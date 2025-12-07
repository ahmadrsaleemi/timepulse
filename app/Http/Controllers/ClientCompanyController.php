<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClientCompany;


class ClientCompanyController extends Controller
{
	public function add_client_company(Request $request)
	{
		$request->validate([
			'name'      => 'required|string'
		]);

		$user_id = auth()->user()->id;
		$name = $request->name;

		$client_company = ClientCompany::create([
			'name'		=> $name,
			'user_id'	=> $user_id
		]);

		return response()->json([
			'success'	=> true,
			'message'	=> 'Client company added',
			'data'		=> [
				'user_id'	=> auth()->user()->id,
				'name'		=> $name
			]
		]);

	}
}
