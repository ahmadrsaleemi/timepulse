<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmployeeClock extends Model
{
	protected $table = 'employee_clock';
	protected $primaryKey = 'ecid';
	public $timestamps = false;

	protected $fillable = ['user_id', 'date', 'clock_in', 'clock_out'];
}
