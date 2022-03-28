<?php

namespace App\Http\Controllers\Api\v1\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ProductCreateRequest;
use App\Models\Product;
use Symfony\Component\HttpFoundation\Response;


class ProductController extends Controller
{
    private Product $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function index(): Response
    {
        $products = $this->product->with('categories')->get();
        // dump($products[0]->categories[0]->name);
        return response()->json($products);
    }

    public function show($id): Response
    {
        $product = $this->product->with('categories')->find($id);

        return response()->json($product);
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
