<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CategoryCreateRequest extends FormRequest
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
            'parent_category' => 'nullable',
            'name' => 'required|string|max:100',
            'slug' => 'required|string|max:200|unique:category,slug',
            'desc' => 'nullable|string|max:1000',
        ];
    }
}
