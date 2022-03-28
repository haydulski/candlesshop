<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Carbon\Carbon;

class BazaController extends Controller
{
    public function index()
    {

        $posts = Post::all();
        return response()->json($posts);
    }
}
