<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('employee_details', function (Blueprint $table) {
			$table->id('eid'); 
			$table->integer('user_id');
			$table->integer('assigned_company_id');

			$table->string('first_name');
            $table->string('last_name')->nullable();
            $table->string('email')->unique();
            $table->string('phone')->nullable();

			$table->string('position')->nullable();
            $table->string('department')->nullable();
            $table->date('hire_date')->nullable();
            $table->decimal('salary', 10, 2)->nullable();

			$table->string('address')->nullable();
		});
	}
	public function down(): void
	{
		Schema::dropIfExists('employee_details');
	}
};

