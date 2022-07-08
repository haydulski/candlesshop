<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductCreateRequest;
use App\Http\Requests\Admin\ProductUpdateRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class ProductController extends Controller
{
    private Product $products;

    public function __construct(Product $prod)
    {
        $this->products = $prod;
    }

    public function products(): View
    {
        $allProducts = $this->products->with('categories')->paginate(10);

        return view('adminpanel.products.products', ['products' => $allProducts]);
    }

    public function add(Category $cat): View
    {
        $categories = $cat->all();

        return view('adminpanel.products.add', ['categories' => $categories]);
    }

    public function edit(int $id, Category $cat): View|RedirectResponse
    {
        $prod = $this->products->with('categories')->find($id);
        if (isset($prod)) {
            $prodCatIds = [];
            foreach ($prod->categories as $cat) {
                $prodCatIds[] = $cat->id;
            }
            $prod['prodCats'] = $prodCatIds;
            $categories = $cat->all();

            return view('adminpanel.products.edit', ['product' => $prod, 'categories' => $categories]);
        } else {
            return redirect()->route('admin.products')->with('error', 'Product with that id does not exist');
        }
    }

    public function update(int $id, ProductUpdateRequest $req): RedirectResponse
    {
        $validated = $req->validated();
        $product = $this->products->find($id);

        if (! empty($validated['categories'])) {
            $product->categories()->detach();
            foreach ($validated['categories'] as $catId) {
                $product->categories()->attach($catId);
            }
        } else {
            $product->categories()->detach();
        }

        if (! empty($validated['picture'])) {
            $pic = $validated['picture'];
            Storage::disk('public')->delete($product->picture);
            $path = $pic->storeAs('product_pictures', $product->id.'.jpg', 'public');
            $validated['picture'] = $path;
        } else {
            $validated['picture'] = $product->picture;
        }

        unset($validated['categories']);
        $product->update($validated);

        return redirect()->route('admin.product.edit', $id)->with('success', 'Product was updated');
    }

    public function destroy(int $id): RedirectResponse
    {
        $product = $this->products->find($id);
        if (isset($product)) {
            $product->categories()->detach();
            $product->delete();

            return redirect()->route('admin.products')->with('success', 'Product was deleted');
        } else {
            return redirect()->route('admin.products')->with('error', 'Something went wrong');
        }
    }

    public function store(ProductCreateRequest $req): RedirectResponse
    {
        $data = $req->validated();
        $newProduct = null;
        if (isset($data)) {
            $newProduct = $this->products->create($data);

            if (! empty($data['picture'])) {
                $pic = $data['picture'];
                $path = $pic->storeAs('product_pictures', $newProduct->id.'-product.jpg', 'public');
                $newProduct->update(['picture' => $path]);
            }
        }
        if (! empty($data['categories'])) {
            foreach ($data['categories'] as $catId) {
                $newProduct->categories()->attach($catId);
            }
        }

        return redirect()->route('admin.products')->with('success', 'Product was created');
    }
}
