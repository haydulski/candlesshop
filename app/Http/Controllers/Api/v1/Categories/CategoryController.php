<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1\Categories;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\CategoriesResoruce;
use App\Models\Category;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection as Json;

class CategoryController extends Controller
{
    private Category $cat;

    public function __construct(Category $cat)
    {
        $this->cat = $cat;
    }

    public function index(): Json
    {
        $cats = $this->cat->with('products')->get();

        return CategoriesResoruce::collection($cats);
    }
}
