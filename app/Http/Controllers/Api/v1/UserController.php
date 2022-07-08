<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function show(): Response
    {
        $user = User::with('orders')->find(auth()->id());
        if (isset($user)) {
            return response()->json([
                'id' => $user->id,
                'name' => $user->name,
                'surname' => $user->surname,
                'email' => $user->email,
                'mobile' => $user->mobile,
                'orders' => $user->orders,
            ], 200);
        } else {
            return response()->json("['message' => 'Login error']", 401);
        }
    }
}
