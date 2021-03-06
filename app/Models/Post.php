<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    const UPDATED_AT = null;

    protected $fillable = ['title', 'body', 'created_at'];
}
