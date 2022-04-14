<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function show(): Response
    {
        $user = auth()->user();
        if (isset($user)) {
            return response()->json([
                'id' => $user->id,
                'name' => $user->name,
                'surname' => $user->surname,
                'email' => $user->email,
                'mobile' => $user->mobile,
            ], 200);
        } else {
            return response()->json(['message' => 'Login error'], 401);
        }
    }
}
