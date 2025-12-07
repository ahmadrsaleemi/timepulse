<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmployeeController;

Route::get('/user', function (Request $request) {
return $request->user();
})->middleware('auth:sanctum');

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/signin', [AuthController::class, 'signin']);


Route::middleware(['jwt.auth'])->group(function() {
    Route::post('/employee/clockin', [EmployeeController::class, 'clockIn']);
});