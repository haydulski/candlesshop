@extends('layout.main')

@section('title', 'Add new product')

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
        <h2 class="card-header">Add new order</h2>

        <div class="card-body">
            <form action="{{ route('admin.order.store') }}" method="POST">
                @csrf
                <div class="row mb-3">
                    <label for="title" class="col-sm-2 col-form-label col-form-label-sm">User id</label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control form-control-sm" id="title" name="user_id"
                            value="{{ old('user_id') }}">
                    </div>
                </div>
                <div class="    row mb-3">
                    <label for="status" class="col-sm-2 col-form-label col-form-label-sm">Status </label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control form-control-sm" id="status" name="status"
                            value="{{ old('status') }}">
                        <small>1:New, 2:Checkout, 3:Paid, 4:Failed, 5:Shipped, 6:Delivered, 7:Returned, and
                            8:Complete</small>
                    </div>
                </div>
                <div class="    row mb-3">
                    <label for="sub_total" class="col-sm-2 col-form-label col-form-label-sm">Price netto: </label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control form-control-sm" id="sub_total" name="sub_total"
                            value="{{ old('sub_total') }}">
                    </div>
                </div>
                <div class="     row mb-3">
                    <label for="tax" class="col-sm-2 col-form-label col-form-label-sm">Tax: </label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control form-control-sm" id="tax" name="tax"
                            value="{{ old('tax') }}">
                    </div>
                </div>
                <div class="    row mb-3">
                    <label for="shipping" class="col-sm-2 col-form-label col-form-label-sm">Shipping
                        charges: </label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control form-control-sm" id="shipping" name="shipping"
                            value="{{ old('shipping') }}">
                    </div>
                </div>

                <div class="   row mb-3">
                    <label for="name" class="col-sm-2 col-form-label col-form-label-sm">Name: </label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-sm" id="name" name="name"
                            value="{{ old('name') }}">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="surname" class="col-sm-2 col-form-label col-form-label-sm">Surname:
                    </label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-sm" id="surname" name="surname"
                            value="{{ old('surname') }}">
                    </div>
                </div>
                <div class="   row mb-3">
                    <label for="mobile" class="col-sm-2 col-form-label col-form-label-sm">Mobile:
                    </label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-sm" id="mobile" name="mobile"
                            value="{{ old('mobile') }}">
                    </div>
                </div>
                <div class="   row mb-3">
                    <label for="email" class="col-sm-2 col-form-label col-form-label-sm">Email:
                    </label>
                    <div class="col-sm-6">
                        <input type="email" class="form-control form-control-sm" id="email" name="email"
                            value="{{ old('email') }}">
                    </div>
                </div>
                <div class="   row mb-3">
                    <label for="street" class="col-sm-2 col-form-label col-form-label-sm">Street: </label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-sm" id="street" name="street"
                            value="{{ old('street') }}">
                    </div>
                </div>
                <div class="   row mb-3">
                    <label for="city" class="col-sm-2 col-form-label col-form-label-sm">City: </label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-sm" id="city" name="city"
                            value="{{ old('city') }}">
                    </div>
                </div>
                <div class="   row mb-3">
                    <label for="province" class="col-sm-2 col-form-label col-form-label-sm">Province:
                    </label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-sm" id="province" name="province"
                            value="{{ old('province') }}">
                    </div>
                </div>
                <div class="  row mb-3">
                    <label for="country" class="col-sm-2 col-form-label col-form-label-sm">Country:
                    </label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-sm" id="country" name="country"
                            value="{{ old('country') }}">
                    </div>
                </div>
                <div class="  row mb-3">
                    <label for="message" class="col-sm-2 col-form-label col-form-label-sm">Message:
                    </label>
                    <div class="col-sm-6">
                        <textarea class="form-control form-control-sm" id="message" name="message"
                            placeholder="Message...">{{ old('message') }}</textarea>
                    </div>
                </div>
                <hr>
                <div class="row mb-5 text-start">
                    <div class="col-6"></div>
                    <div class="col-3">
                        <button type="submit" class="btn btn-success">Create
                            order</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
@endsection
