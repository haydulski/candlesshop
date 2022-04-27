@extends('layout.main')

@section('title', 'Użytkownik')

@section('sidebar')
    @parent
@endsection

@section('content')
    <div class="card mt-5">
        <h2 class="card-header">Shop admin panel</h2>
        <div class="card-body">
            {{-- {{ dd($dbData) }} --}}
            <ul>
                <li>You offering <b>{{ $dbData['productsAmount'] }}</b> products</li>
                <li>Number of registered clients: <b>{{ $dbData['users'] }}</b></li>
                <li>Pending orders: <b>{{ $dbData['pendingOrders'] }}</b></li>
                <li>Completed orders: <b>{{ $dbData['completeOrders'] }}</b></li>
                <li>Out of stock products: <b>{{ $dbData['outOfStock'] }}</b></li>
            </ul>

            <a href="{{route('admin.orders.all')}}" class="btn btn-light">Manage orders</a>
        </div>
    </div>
@endsection
