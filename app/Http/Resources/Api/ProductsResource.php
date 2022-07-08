<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
{
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
        ];
    }
}
