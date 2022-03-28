@extends('layout.main')

@section('title', 'Add new product')

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
        <h2 class="card-header">Add new product</h2>

        <div class="card-body">
            <form action="{{ route('admin.product.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="row mb-3">
                    <label for="title" class="col-sm-2 col-form-label col-form-label-sm">Product title: </label>
                    <div class="col-sm-6">
                        <input type="ext" class="form-control form-control-sm" id="title" name="title"
                            placeholder="title of product">
                    </div>
                </div>
                <div class="mb-3 input-group">
                    <label for="photo" class="col-sm-2 col-form-label col-form-label-sm">Picture:</label>
                    <div class="col-sm-6">
                        <input type="file" class="form-control " id="photo" name="picture">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="slug" class="col-sm-2 col-form-label col-form-label-sm">Product slug: </label>
                    <div class="col-sm-6">
                        <input type="ext" class="form-control form-control-sm" id="slug" name="slug"
                            placeholder="Unique slug">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="price" class="col-sm-2 col-form-label col-form-label-sm">Price netto: </label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-sm" id="price" name="price"
                            placeholder="Price netto">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-6">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="on_shop" id="dontdis" value="0">
                            <label class="form-check-label" for="dontdis">
                                Don't display on shop
                            </label>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="radio" name="on_shop" id="dis" value="1">
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
                            min="0" max="100">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="description" class="col-sm-2 col-form-label col-form-label-sm">Description: </label>
                    <div class="col-sm-6">
                        <textarea class="form-control form-control-sm" id="description" name="description"
                            placeholder="Description of product..."></textarea>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="" class="col-sm-2 col-form-label col-form-label-sm">Categories: </label>
                    <div class="col-sm-6">
                        @foreach ($categories as $cat)
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="{{ $cat->id }}"
                                    name="categories[]" id="cat-{{ $cat->id }}">
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
                        <button type="submit" class="btn btn-success">Create product</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
@endsection
