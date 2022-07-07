<?php

declare(strict_types=1);

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class OrderCreateRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules()
    {
        return [
            'order_data' => 'required|json',
        ];
    }

    public function messages()
    {
        return [
            'order_data.json' => `It must be a json format`,
        ];
    }
}
