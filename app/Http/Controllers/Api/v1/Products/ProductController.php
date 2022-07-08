<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ProductCreateRequest;
use App\Http\Resources\Api\ProductsWithCategoriesResource;
use App\Models\Product;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection as Json;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends Controller
{
    private Product $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function index(): Json
    {
        $products = Cache::remember('all_products', 60 * 60 * 24, function () {
            return $this->product->with('categories')->get();
        });

        return ProductsWithCategoriesResource::collection($products);
    }

    public function show(int $id)
    {
        $product = $this->product->with('categories')->find($id);

        return new ProductsWithCategoriesResource($product);
    }

    public function store(ProductCreateRequest $req): Response
    {
        $data = $req->validated();
        if (isset($data)) {
            $this->product->create($data);

            return response('Product created', 200);
        }
    }

    public function update(int $id, ProductCreateRequest $req): Response
    {
        $data = $req->validated();
        $product = $this->product->find($id);
        if (isset($data)) {
            $product->update($data);

            return response('Product updated', 200);
        }
    }

    public function destroy(int $id): Response
    {
        $product = $this->product->find($id);
        $product->categories()->detach();
        $product->delete();

        return response('Product deleted', 200);
    }
}
