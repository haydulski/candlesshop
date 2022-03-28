<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1\Categories;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends Controller
{
    private Category $cat;

    public function __construct(Category $cat)
    {
        $this->cat = $cat;
    }

    public function index(): Response
    {
        $cats = $this->cat->with('products')->get();
        return response()->json($cats);
    }
}
