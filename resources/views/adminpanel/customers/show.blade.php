@extends('layout.main')

@section('title')
    Customer: {{ $customer->name . ' ' . $customer->surname }}
@endsection

@section('sidebar')
    @parent
@endsection
@section('content')
    <div class="card text-dark bg-light mt-5">
        <h2 class="card-header">Details</h2>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Registered from</th>
                    </tr>
                </thead>
                <tbody>

                    <tr style="vertical-align: middle;">
                        <td>{{ $customer->id }}</td>
                        <td>
                            {{ $customer->name }}
                        </td>
                        <td>{{ $customer->surname }}</td>
                        <td>{{ $customer->mobile }}</td>
                        <td>{{ $customer->email }}</td>
                        <td>{{ $customer->created_at }}</td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>
    <div class="card text-dark bg-light mt-5">
        <h2 class="card-header">Orders</h2>
        <div class="card-body">
            @if (count($customer->orders) < 1)
                <p>No orders yet.</p>
            @else
                <table class="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Order Id</th>
                            <th>Products</th>
                            <th>Subtotal</th>
                            <th>Tax</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($customer->orders as $order)
                            <tr style="vertical-align: middle;">
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $order->id }}</td>
                                <td>
                                    Example Product 1
                                </td>
                                <td>{{ $order->sub_total }} zł brutto</td>
                                <td>{{ $order->tax }}%</td>
                                <td>{{ $order->total_price }} zł brutto</td>
                                <td>{{ $order->created_at->format('d. m. Y') }}</td>
                                <td>{{ $order->status }}</td>
                                <td>
                                    <div class="row">
                                        <a style="width:30%;"
                                            href="{{ route('admin.order.show', ['id' => $order->id]) }}">
                                            <button class="btn btn-info">Details</button></a>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            @endif
        </div>
    </div>
@endsection
