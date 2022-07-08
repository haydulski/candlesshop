<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoriesResoruce extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'parent_category' => $this->parent_category,
            'name' => $this->name,
            'slug' => $this->slug,
            'desc' => $this->desc,
            'products' => ProductsResource::collection($this->products),
        ];
    }
}
