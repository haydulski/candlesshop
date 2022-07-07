<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class OrderStatusReq extends FormRequest
{

    public function authorize(): bool
    {
        $vendor = Auth::user()->vendor;
        if ($vendor === 0) return true;

        return false;
    }


    public function rules()
    {
        return [
            'status' => 'integer|min:1|max:8|required'
        ];
    }
}
