@extends('layout.main')

@section('title', 'Edit product')

@section('sidebar')
    @parent
@endsection

@section('content')
    @if ($errors->any())
        <div class="card text-white bg-danger">

            <div class="card-header">Fix follow errors:</div>
            <div class="card-body">
                @foreach ($errors->all() as $error)
                    <div class="card-text">
                        {{ $error }}
                    </div>
                @endforeach
            </div>

        </div>
    @endif
    <div class="card mt-5">
        <h2 class="card-header">{{ $product->title }}</h2>
        @if (strlen($product->picture) > 1)
            <img class="card-img-top mx-auto mt-3" src="{{ asset('storage/' . $product->picture) }}" alt="product picture"
                style="width: 25rem;">
        @endif


        <div class="card-body">
            <form action="{{ route('admin.product.update', ['id' => $product->id]) }}" method="POST"
                enctype="multipart/form-data">
                @csrf
                <div class="row mb-3">
                    <label for="title" class="col-sm-2 col-form-label col-form-label-sm">Product id: </label>
                    <div class="col-sm-6">
                        {{ $product->id }}
                    </div>
                </div>
                <div class="mb-3 input-group">
                    <label for="photo" class="col-sm-2 col-form-label col-form-label-sm">Picture:</label>
                    <div class="col-sm-6">
                        <input type="file" class="form-control " id="photo" name="picture">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="title" class="col-sm-2 col-form-label col-form-label-sm">Product title: </label>
                    <div class="col-sm-6">
                        <input type="ext" class="form-control form-control-sm" id="title" name="title"
                            value="{{ $product->title }}">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="slug" class="col-sm-2 col-form-label col-form-label-sm">Product slug: </label>
                    <div class="col-sm-6">
                        <input type="ext" class="form-control form-control-sm" id="slug" name="slug"
                            value="{{ $product->slug }}">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="price" class="col-sm-2 col-form-label col-form-label-sm">Price netto: </label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-sm" id="price" name="price"
                            value="{{ $product->price }}">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-6">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="on_shop" id="dontdis" value="0"
                                {{ $product->on_shop == 0 ? 'checked' : '' }}>
                            <label class="form-check-label" for="dontdis">
                                Don't display on shop
                            </label>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="radio" name="on_shop" id="dis" value="1"
                                {{ $product->on_shop == 1 ? 'checked' : '' }}>
                            <label class="form-check-label" for="dis">
                                Display on shop
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="stock_qty" class="col-sm-2 col-form-label col-form-label-sm">Stock level: </label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control form-control-sm" id="stock_qty" name="stock_qty" step="1"
                            min="0" max="50" value="{{ $product->stock_qty }}">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="description" class="col-sm-2 col-form-label col-form-label-sm">Description: </label>
                    <div class="col-sm-6">
                        <textarea class="form-control form-control-sm" id="description"
                            name="description">{{ $product->description }}</textarea>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="" class="col-sm-2 col-form-label col-form-label-sm">Categories: </label>
                    <div class="col-sm-6">
                        @foreach ($categories as $cat)
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="{{ $cat->id }}"
                                    name="categories[]" id="cat-{{ $cat->id }}"
                                    {{ in_array($cat->id, $product->prodCats) ? 'checked' : '' }}>
                                <label class="form-check-label" for="cat-{{ $cat->id }}">
                                    {{ $cat->name }}
                                </label>
                            </div>
                        @endforeach

                    </div>
                </div>
                <hr>
                <div class="row mb-5 text-start">
                    <div class="col-6"></div>
                    <div class="col-3">
                        <button type="submit" class="btn btn-success">Update product</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
@endsection
