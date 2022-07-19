@extends('layout.main')

@section('title', 'Categories')

@section('sidebar')
    @parent
@endsection

@section('content')
    <div class="card mt-5">
        <h2 class="card-header">All categories</h2>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Id</th>
                        <th>Parent</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Description</th>
                        <th>Items</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($categories as $cat)
                        <tr style="vertical-align: middle;">
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $cat->id }}</td>
                            <td>
                                {{ $cat->parent_category }}
                            </td>
                            <td>{{ $cat->name }}</td>
                            <td>{{ $cat->slug }}</td>
                            <td>{{ $cat->description }}</td>
                            <td>
                                {{$cat->product_count }}
                            </td>

                            <td>
                                <div class="row">
                                    <a style="width:30%;" href="{{ route('admin.category.show', ['id' => $cat->id]) }}">
                                        <button class="btn btn-info">Edit</button></a>
                                    <form action="{{ route('admin.category.destroy', ['id' => $cat->id]) }}" method="POST"
                                        style="width:60%;">
                                        @csrf
                                        @method('delete')
                                        <button onclick="return confirm('Are you shure?')" type="submit"
                                            class="btn btn-danger">Delete</button>
                                    </form>

                                    </a>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="row">
                <div class="col-12"><a href={{ route('admin.category.new') }} class="btn btn-success">Add new
                        category</a></div>
            </div>
        </div>
    </div>
@endsection
