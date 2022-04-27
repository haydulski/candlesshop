@extends('layout.main')

@section('title', 'Order')

@section('sidebar')
    @parent
@endsection

@section('content')
    <div class="card mt-5">
        <h2 class="card-header">Order no.{{ $order->id }}</h2>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>User id</th>
                        <th>Price netto</th>
                        <th>Shipping costs</th>
                        <th>Tax</th>
                        <th>Total price brutto</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                    <tr style="vertical-align: middle;">
                        <td>{{ $order->id }}</td>
                        <td>
                            {{ $order->user_id }}
                        </td>
                        <td>{{ $order->sub_total }} zł netto</td>
                        <td>{{ $order->shipping }} zł netto</td>
                        <td>{{ floatval($order->tax)*100 }}%</td>
                        <td>{{ $order->total_price }} zł brutto</td>
                        <td>
                            {{ $order->created_at }}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
    <div class="card  mt-5">
        <div class="card-body">
            <div class="row">
                <div class="col-md-12 col-xl-6">
                    <h4 class="card-header">Products:</h4>
                    @if (count($order->items) > 0)
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($order->items as $item)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ $item->product_id }}</td>
                                        <td>{{ $item->product->title }}</td>
                                        <td>{{ $item->price }} zł netto</td>
                                        <td>{{ $item->order_qty }}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    @endif
                </div>
                <div class="col-md-12 col-xl-6">
                    <h4 class="card-header">Order status:</h4>
                    <div class="row justify-content-arround">
                        <div class="col-6">

                            <p class="btn btn-success mt-3">{{ orderStatusName($order->status) }}</p>
                            <span>{{ $order->updated_at }}</span>
                        </div>
                        <div class="col-6">
                            <p class="mt-3">Change order status:</p>
                            <form action="{{ route('admin.order.status.update', ['id' => $order->id]) }}" method="post">
                                @csrf
                                <select class="form-select" name="status" id="status">
                                    <option value="1">New</option>
                                    <option value="2">Checkout</option>
                                    <option value="3">Paid</option>
                                    <option value="4">Failed</option>
                                    <option value="5">Shipped</option>
                                    <option value="6">Delivered</option>
                                    <option value="7">Returned</option>
                                    <option value="8">Complete</option>
                                </select>
                                <button type="submit" class="btn btn-dark mt-2">Update status</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
