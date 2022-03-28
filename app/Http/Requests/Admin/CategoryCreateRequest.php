<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CategoryCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'parent_category' => 'nullable',
            'name' => 'required|string|max:100',
            'slug' => 'required|string|max:200|unique:category,slug',
            'desc' => 'nullable|string|max:1000'
        ];
    }
}
