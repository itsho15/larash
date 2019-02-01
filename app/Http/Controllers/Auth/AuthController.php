<?php
namespace App\Http\Controllers\Auth;
use App\Helpers\LumenHelper;
use App\Http\Controllers\Controller;
use App\Models\WpUser;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller {
	protected $helper, $request, $auth, $user, $validator;

	/**
	 * Create a new controller instance.
	 * @var $helper LumenHelper
	 * @var $user WpUser
	 */
	public function __construct(LumenHelper $helper, WpUser $user) {
		$this->user      = $user;
		$this->helper    = $helper;
		$this->request   = $this->helper->request();
		$this->auth      = $this->helper->auth();
		$this->validator = $this->helper->validator();
	}
	/**
	 * Register a new user.
	 * @throws \Exception
	 */
	public function registerPost() {
		$this->validate($this->request, [
			'display_name'           => 'bail|required|min:3',
			'user_email'             => 'bail|required|email|unique:users',
			'user_pass'              => 'bail|required|min:8|confirmed',
			'user_pass_confirmation' => 'bail|required|min:8',
		], [
			'display_name.required'           => 'Display Name is required.',
			'display_name.min'                => 'Display Name must be at least 3 characters in length.',
			'user_email.email'                => 'Email must be a valid email address format.',
			'user_email.required'             => 'Email address is required.',
			'user_email.unique'               => 'Email address must be unique for each account.',
			'user_pass.required'              => 'Passwords are required.',
			'user_pass.min'                   => 'Passwords must be at least 8 characters in length.',
			'user_pass.confirmed'             => 'Passwords must match.',
			'user_pass_confirmation.required' => 'Password confirmation is required.',
			'user_pass_confirmation.min'      => 'Passwords must be at least 8 characters in length.',
		]);

		$user = new WpUser;
		$user->fill($this->request->all());
		$user->save();
		$user->wpLogin();

		$this->helper->session()->flash('success', 'Registered Successfully!');
		return redirect(url('/'));

	}

	/**
	 * Login an existing user.
	 * @throws \Exception
	 */
	public function loginPost() {

		$this->getValidationFactory()->extendImplicit('wp_password', function ($attribute, $value, $parameters, $validator) {
			if ($this->user->where('user_email', $this->request->get('user_email'))->exists()) {
				$user = $this->user->where('user_email', $this->request->get('user_email'))->first();
				return wp_check_password($value, $user->user_pass, $user->ID);
			}
			return false;
		});

		$validator = Validator::make($this->request->all(),
			[
				'user_email' => 'bail|required|email|exists:users',
				'user_pass'  => 'bail|required|min:6|wp_password',

			], [
				'user_email.required'   => 'Email address is required.',
				'user_email.email'      => 'Email must be a valid email address format.',
				'user_email.exists'     => 'Credentials do not match our records, try again.',
				'user_pass.required'    => 'Password is required.',
				'user_pass.min'         => 'Password must be at least 8 characters in length.',
				'user_pass.wp_password' => 'Credentials do not match our records, try again.',
			]);

		// check if validate is fails
		if ($validator->fails()) {
			$this->helper->session()->flash('errors', json_decode($validator->errors(), true));
			return redirect(url('truediv/login'));
		}

		/** @var $user WpUser */
		$user = $this->user->where('user_email', $this->request->get('user_email'))->first();
		$user->wpLogin();

		$this->helper->session()->flash('success', 'Login Successfully!');
		return redirect(url('/'));
	}

	/**
	 * Login an existing user.
	 * @throws \Exception
	 */
	public function login() {
		return $this->helper->view('auth.login');
	}
	public function register() {

		return $this->helper->view('auth.register');
	}

	public function sendResetEmail() {

	}

	public function resetPassword() {

	}

	public function logout() {
		wp_logout();
		return $this->helper->redirect('/');
	}
}
