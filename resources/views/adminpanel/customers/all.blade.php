@extends('layout.main')

@section('title', 'Customers')

@section('sidebar')
    @parent
@endsection
@section('content')
    <div class="card text-dark bg-light mt-5">
        <h2 class="card-header">Customers</h2>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Registered from</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($customers as $customer)
                        <tr style="vertical-align: middle;">
                            <td>{{ $loop->iteration }}</td>
                            <td>
                                {{ $customer->name }}
                            </td>
                            <td>{{ $customer->surname }}</td>
                            <td>{{ $customer->mobile }}</td>
                            <td>{{ $customer->email }}</td>
                            <td>{{ $customer->created_at->format('d. m. Y') }}</td>
                            <td>
                                <div class="row">
                                    <a style="width:30%;"
                                        href="{{ route('admin.customer.show', ['id' => $customer->id]) }}"> <button
                                            class="btn btn-info">More</button></a>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $customers->links() }}
        </div>
    </div>
@endsection
