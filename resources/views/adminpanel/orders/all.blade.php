@extends('layout.main')

@section('title', 'Orders')

@section('sidebar')
    @parent
@endsection

@section('content')
    <div class="card mt-5">
        <h2 class="card-header">Orders</h2>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Order Id</th>
                        <th>Client</th>
                        <th>Price netto</th>
                        <th>Shipping costs</th>
                        <th>Total price brutto</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>More</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($orders as $order)
                        <tr style="vertical-align: middle;">
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $order->id }}</td>
                            <td>
                                {{ $order->user->name . ' ' . $order->user->surname }}
                            </td>
                            <td>{{ $order->sub_total }} zł netto</td>
                            <td>{{ $order->shipping }} zł netto</td>
                            <td>{{ $order->total_price }} zł brutto</td>
                            <td>{{ orderStatusName($order->status) }}</td>
                            <td>
                                {{ $order->created_at->format('d.m.Y') }}
                            </td>
                            <td>
                                <div class="row">
                                    <a style="width:30%;" href="{{ route('admin.order.show', ['id' => $order->id]) }}">
                                        <button class="btn btn-info">Details</button></a>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $orders->links() }}
        </div>
        {{-- <a href="{{ route('admin.order.create') }}" class="btn btn-info mt-5 mb-5">Add order</a> --}}
    </div>
@endsection
