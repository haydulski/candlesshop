@extends('layout.main')

@section('title', 'Products')

@section('sidebar')
    @parent
@endsection

@section('content')
    <div class="card mt-5">
        <h2 class="card-header">All products</h2>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Shop Id</th>
                        <th></th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Stock QTY</th>
                        <th>Public</th>
                        <th>Category</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($products as $product)
                        <tr style="vertical-align: middle;">
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $product->id }}</td>
                            <td>
                                @if ($product->picture)
                                    <img class="card-img-top mx-auto mt-3"
                                        src="{{ asset('storage/' . $product->picture) }}" alt="product picture"
                                        style="width: 5rem;">
                                @endif
                            </td>
                            <td>{{ $product->title }}</td>
                            <td>{{ $product->price }} zł netto</td>
                            <td>{{ $product->stock_qty }}</td>
                            <td>
                                @if ($product->on_shop == 1)
                                    <button class="btn btn-success">Yes</button>
                                @else
                                    <button class="btn btn-danger">No</button>
                                @endif
                            </td>
                            <td>
                                @if (isset($product->categories[0]))
                                    {{ $product->categories[0]->name }}
                                @else
                                    <p>no category</p>
                                @endif
                            </td>
                            <td>
                                <div class="row">
                                    <a style="width:30%;"
                                        href="{{ route('admin.product.edit', ['id' => $product->id]) }}"> <button
                                            class="btn btn-info">Edit</button></a>
                                    <form action="{{ route('admin.product.destroy', ['id' => $product->id]) }}"
                                        method="POST" style="width:60%;">
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
            {{ $products->links() }}
        </div>
    </div>
@endsection
