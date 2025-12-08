<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientCompany extends Model
{
    protected $table = 'client_company';
    protected $primaryKey = 'cid';
    public $timestamps = false;

    protected $fillable = ['user_id', 'name'];
}
