<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductsWithCategoriesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'picture' => $this->picture,
            'slug' => $this->slug,
            'on_shop' => $this->on_shop,
            'price' => $this->price,
            'description' => $this->description,
            'stock_qty' => $this->stock_qty,
            'categories' => $this->categories,
        ];
    }
}
