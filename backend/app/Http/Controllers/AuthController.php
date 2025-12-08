<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\EmployeeDetails;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
	public function signup(Request $request)
	{
		$request->validate([
			'first_name'	=> 'required|string',
			'email'			=> 'required|email'
		]);

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
			'name'      => $request->first_name,
			'email'     => $request->email,
			'password'  => Hash::make($request->password),
			'type'      => $request->type
		]);

		$user_id = $user->id;
		$employee_details = EmployeeDetails::create([
			'user_id'				=> $user_id,
			'assigned_company_id'	=> $request->assigned_company_id ?? null,
			'first_name'			=> $request->first_name,
			'last_name'				=> $request->last_name ?? null,
			'email'					=> $request->email ?? null,
			'phone'					=> $request->phone ?? null,
			'position'				=> $request->position ?? null,
			'department'			=> $request->department ?? null,
			'hire_date'				=> $request->hire_date ?? null,
			'salary'				=> $request->salary ?? null,
			'address'				=> $request->address ?? null
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

		$user = User::where('email', $request->email)->first();

		if (!$user)
		{
			return response()->json([
				'success' => false,
				'message' => 'Invalid email or password',
			], 401);
		}

		if($user->status == 0)
		{
			return response()->json([
				'success' => false,
				'message' => 'Your account is not active. Please contact administrator.',
			], 403);
		}

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
			'data'		=> [
				'user'	=> auth()->user()
			]
		]);
    }

	public function deactivateUser(Request $request)
	{
		$request->validate([
			'user_id'	=> 'required|integer'
		]);

		$user_id = $request->user_id;

		$user = User::find($user_id);
		if(empty($user))
		{
			return response()->json([
				'success' => false,
				'message' => 'Invalid user',
			], 401);
		}

		$user->status = 0;
		$user->save();

		return response()->json([
			'success'	=> true,
			'message'	=> 'User deactivated',
			'data'		=> [
				'user'	=> $user
			]
		]);
	}
}
