<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ClientCompanyController;

Route::get('/user', function (Request $request) {
return $request->user();
})->middleware('auth:sanctum');

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/signin', [AuthController::class, 'signin']);


Route::middleware(['jwt.auth'])->group(function() {
    Route::post('/user/deactivate', [AuthController::class, 'deactivateUser']);
    Route::post('/employee/clockin', [EmployeeController::class, 'clockIn']);
    Route::post('/employee/clockout', [EmployeeController::class, 'clockOut']);
    Route::post('/client_company/add', [ClientCompanyController::class, 'addClientCompany']);
    Route::post('/employee/details/add',[EmployeeController::class, 'addEmployeeDetails']);
});