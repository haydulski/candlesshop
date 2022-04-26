<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use App\Models\Order;
use Illuminate\View\View;

class AdminController extends Controller
{
    public function index(Product $product, User $user, Order $order): View
    {
        $data = [
            'productsAmount' => $product->count(),
            'users' => $user->where('vendor', '=', '1')->count(),
            'outOfStock' => $product->where('stock_qty', '=', '0')->count(),
            'pendingOrders' => $order->where('status', '!=', '8')->count(),
            'completeOrders' => $order->where('status', '=', '8')->count(),
        ];
        return view('adminpanel.show', ['dbData' => $data]);
    }

    public function myDetails(User $user): View
    {
        $admin = auth()->user();

        return view('adminpanel.me', ['user' => $admin]);
    }
}
