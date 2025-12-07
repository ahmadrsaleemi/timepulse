<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmployeeDetails extends Model
{
    protected $table = 'employee_details';
	protected $primaryKey = 'eid';
	public $timestamps = false;

	protected $fillable = ['user_id', 'assigned_company_id', 'first_name', 'last_name', 'email', 'phone', 'position', 'department', 'hire_date', 'salary', 'address'];
}
