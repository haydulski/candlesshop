<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ProductUpdateRequest extends FormRequest
{
    public function authorize()
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
            'title' => 'required|string|max:100',
            'slug' => [
                'required',
                'string',
                'max:200',
                Rule::unique('products', 'slug')->ignore($this->route('id')),
            ],
            'on_shop' => 'nullable|integer|max:1',
            'price' => 'required|integer',
            'description' => 'nullable|max:1000',
            'stock_qty' => 'integer|min:0',
            'categories' => 'nullable|array',
            'picture' => 'nullable|file|image',
        ];
    }
}
