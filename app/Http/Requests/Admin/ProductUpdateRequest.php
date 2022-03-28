<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductUpdateRequest extends FormRequest
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
            'title' => 'required|string|max:100',
            'slug' => [
                'required',
                'string',
                'max:200',
                Rule::unique('products', 'slug')->ignore($this->route('id'))
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
