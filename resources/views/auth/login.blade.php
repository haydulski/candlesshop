@extends('layout.main')

@section('title', 'Login page')

@section('sidebar')
    @parent
@endsection

@section('content')

    <div class="row justify-content-center">
        <div class="col-6 mt-5">
            <h1>Login please</h1>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-6 mt-5">
            <form action="{{ route('login') }}" method="POST" class="form-fluid">
                @csrf
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                        name="email">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                        name="password">
                    <label for="floatingPassword">Password</label>
                </div>
                <button type="submit" class="btn btn-dark mt-5">Log in</button>
            </form>
        </div>
    </div>


@endsection
