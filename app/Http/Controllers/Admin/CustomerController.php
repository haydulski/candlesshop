<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class CustomerController extends Controller
{
    private User $user;

    public function __construct(User $us)
    {
        $this->user = $us;
    }

    public function index(string $sorting = 'id'): View
    {
        $all = $this->user
            ->where('vendor', '=', '1')
            ->orderBy($sorting, 'ASC')
            ->paginate(10);

        return view('adminpanel.customers.all', ['customers' => $all]);
    }

    public function show(int $id): View| RedirectResponse
    {
        $customer = $this->user->with('orders')->find($id);
        if ($customer->vendor === 0) {

            return redirect()->route('admin.customers.all')->with('error', 'You are not allowed to see this customer');
        }

        return view('adminpanel.customers.show', ['customer' => $customer]);
    }
}
