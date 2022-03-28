@extends('layout.main')

@section('title', 'New category')

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
        <h2 class="card-header">Add new category</h2>

        <div class="card-body">
            <form action="{{ route('admin.category.store') }}" method="POST">
                @csrf
                <div class="row mb-3">
                    <label for="title" class="col-sm-2 col-form-label col-form-label-sm">Category name: </label>
                    <div class="col-sm-6">
                        <input type="ext" class="form-control form-control-sm" id="title" name="name"
                            placeholder="Add name">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="slug" class="col-sm-2 col-form-label col-form-label-sm">Category slug: </label>
                    <div class="col-sm-6">
                        <input type="ext" class="form-control form-control-sm" id="slug" name="slug"
                            placeholder="your-slug-here">
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="parent_category" class="col-sm-2 col-form-label col-form-label-sm">Parent category id:
                    </label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control form-control-sm" id="parent_category"
                            name="parent_category" step="1" min="0" max="50">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="desc" class="col-sm-2 col-form-label col-form-label-sm">Description: </label>
                    <div class="col-sm-6">
                        <textarea class="form-control form-control-sm" id="desc" name="desc" placeholder="Cateory description..."></textarea>
                    </div>
                </div>
                <hr>
                <div class="row mb-5 text-start">
                    <div class="col-6"></div>
                    <div class="col-3">
                        <button type="submit" class="btn btn-success">Add category</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
@endsection
