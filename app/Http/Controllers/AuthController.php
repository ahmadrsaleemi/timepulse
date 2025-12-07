<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
	public function signup(Request $request)
	{
		$request->validate([
			'name'      => 'required|string',
			'email'     => 'required|email',
			'password'  => 'required|min:6'
		]);

		//check if user already exists

		$userExist = User::where('email', $request->email)->exists();
		if(!empty($userExist))
		{
			return response()->json([
				'success'   => false,
				'message'   => 'Email already registered!',
				'user'      => []
			]);
		}

		$user = User::create([
			'name'      => $request->name,
			'email'     => $request->email,
			'password'  => Hash::make($request->password),
			'type'      => $request->type
		]);

		return response()->json([
			'success'   => true,
			'message'   => 'Signup successful',
			'user'      => $user
		]);
	}

	public function signin(Request $request)
    {
		$credentials = $request->only('email', 'password');

		if (!$token = JWTAuth::attempt($credentials))
		{
			return response()->json([
				'success' => false,
				'message' => 'Invalid email or password',
			], 401);
		}

		return response()->json([
			'success'	=> true,
			'token'		=> $token,
			'user'		=> auth()->user()
		]);
    }
}
