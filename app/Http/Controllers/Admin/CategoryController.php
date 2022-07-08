<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CategoryCreateRequest;
use App\Http\Requests\Admin\CategoryUpdateRequest;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class CategoryController extends Controller
{
    private Category $category;

    public function __construct(Category $cat)
    {
        $this->category = $cat;
    }

    public function index(): View
    {
        $cats = $this->category->with('products')->get();

        return view('adminpanel.categories.all', ['categories' => $cats]);
    }

    public function show(int $id): View
    {
        $cat = $this->category->find($id);

        return view('adminpanel.categories.show', ['cat' => $cat]);
    }

    public function create(): View
    {
        return view('adminpanel.categories.new');
    }

    public function store(CategoryCreateRequest $req): RedirectResponse
    {
        $data = $req->validated();
        $this->category->create($data);

        return redirect()->route('admin.categories.all')->with('success', 'Category created!');
    }

    public function update(int $id, CategoryUpdateRequest $req): RedirectResponse
    {
        $newData = $req->validated();
        if (isset($newData)) {
            $cat = $this->category->find($id);
            $cat->update($newData);

            return redirect()->route('admin.categories.all')->with('success', 'Category was updated!');
        }

        return redirect()->route('admin.category.show', $id)->with('error', 'Something went wrong');
    }

    public function destroy(int $id): RedirectResponse
    {
        $cat = $this->category->find($id);
        if ($cat) {
            $cat->products()->detach();
            $cat->delete();

            return redirect()->route('admin.categories.all')->with('success', 'Category was deleted');
        }

        return redirect()->route('admin.categories.all')->with('error', 'Category was not find');
    }
}
