<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class OrderCreateRequest extends FormRequest
{
    public function authorize(): bool
    {
        $vendor = Auth::user()->vendor;
        if ($vendor === 0) {
            return true;
        }

        return false;
    }

    public function rules()
    {
        return [
            'user_id' => 'required|int|exists:users,id',
            'status' => 'required|int|min:1|max:8',
            'tax' => 'required|int|min:0|max:100',
            'sub_total' => 'required|int|min:0',
            'shipping' => 'required|int|min:0|max:500',
            'name' => 'required|string|max:100',
            'surname' => 'required|string|max:100',
            'mobile' => 'required|string|max:15',
            'email' => 'required|email|max:100',
            'street' => 'required|string|max:100',
            'city' => 'required|string|max:100',
            'province' => 'required|string|max:100',
            'country' => 'required|string|max:100',
            'message' => 'nullable|string|max:5000',
        ];
    }

    public function messages()
    {
        return [
            'user_id.exists' => `User with that id doesn't exists`,
        ];
    }
}
