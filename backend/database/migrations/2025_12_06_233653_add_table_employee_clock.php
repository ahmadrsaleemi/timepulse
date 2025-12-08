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
        Schema::create('employee_clock', function (Blueprint $table) {
            $table->id('ecid'); 
            $table->integer('user_id');
            $table->date('date');
            $table->timestamp('clock_in');
            $table->timestamp('clock_out')->nullable();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('employee_clock');
    }
};
