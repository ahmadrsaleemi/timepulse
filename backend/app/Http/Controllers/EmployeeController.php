<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EmployeeClock;
use Carbon\Carbon;
use JWTAuth;

class EmployeeController extends Controller
{
	public function clockIn(Request $request)
	{
		$user_id = auth()->user()->id;
		$date = date("Y-m-d");
		$clockin = date("Y-m-d H:i:s");

		$checkinExist = EmployeeClock::where('user_id', $user_id)->where('date', $date)->exists();

		if(!empty($checkinExist))
		{
			return response()->json([
				'success'	=> false,
				'message'	=> 'Clock In for ' . $clockin .' already exists',
				'data'		=> []
			], 401);
		}

		$employee_clockin = EmployeeClock::create([
			'user_id'	=> $user_id,
			'date'		=> $date,
			'clock_in'	=> $clockin
		]);

		//lets do a return in response
		return response()->json([
			'success'	=> true,
			'message'	=> 'Clock In successful',
			'data'		=> [
				'user'		=> auth()->user(),
				'timestamp'	=> $clockin
			]
		]);
	}

	public function clockOut(Request $request)
	{
		$user_id = auth()->user()->id;
		$date = date("Y-m-d");
		$clockout = date("Y-m-d H:i:s");

		$employeeClock = EmployeeClock::where('user_id', $user_id)->where('date', $date)->first();

		if(empty($employeeClock))
		{
			return response()->json([
				'success'	=> false,
				'message'	=> 'Clock In for ' . $date .' not found',
				'data'		=> []
			], 401);
		}

		// $employeeClock->update([
		// 	'clock_out'	=> $clockout
		// ]);

		$employeeClock->clock_out = $clockout;
		$employeeClock->save();

		//lets do a return in response
		return response()->json([
			'success'	=> true,
			'message'	=> 'Clock-out successful',
			'data'		=> [
				'user'		=> auth()->user(),
				'timestamp'	=> $clockout
			]
		]);
	}

	public function punchStatus(Request $request)
	{
		$user_id = auth()->user()->id;
		$dateToday = date("Y-m-d");
		$employeeClock = EmployeeClock::where('user_id', $user_id)->where('date', $dateToday)->first();

		if(!$employeeClock)
		{
			return response()->json([
				'success'	=> true,
				'message'	=> 'Clock-in display',
				'data'		=> [
					'user'		=> auth()->user(),
					'clocked_in'	=>	false
				]
			]);
		}
		return response()->json([
			'success'	=> true,
			'message'	=> 'Clock-out display',
			'data'		=> [
				'user'				=> auth()->user(),
				'clocked_in'		=> true,
				'clock_in_time' 	=>	$employeeClock->clock_in,
				'clocked_out'		=> !is_null($employeeClock->clock_out),
				'clock_out_time'	=>	$employeeClock->clock_out ?? false
			]
		]);
	}
}