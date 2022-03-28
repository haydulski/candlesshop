@extends('layout.main')

@section('title', 'Użytkownik')

@section('sidebar')
    @parent
@endsection

@section('content')

    <div class="card">
        <h5 class="card-header"></h5>
        <div class="card-body">
            <ul>
                <li>Name:{{ $user->name }}</li>
                <li>Email: {{ $user->email }}</li>
                <li>Mobile phone: {{ $user->mobile }}</li>
            </ul>

            <a href="#" class="btn btn-light">Lista użytkowników</a>
        </div>
    </div>
@endsection
