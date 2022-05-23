<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use App\Models\Order;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class AdminController extends Controller
{
    public function index(): View
    {
        $data = Cache::remember('admin_summary', 60 * 60 * 8, function () {
            return [
                'productsAmount' => Product::count(),
                'users' => User::where('vendor', '=', '1')->count(),
                'outOfStock' => Product::where('stock_qty', '=', '0')->count(),
                'pendingOrders' => Order::where('status', '!=', '8')->count(),
                'completeOrders' => Order::where('status', '=', '8')->count(),
            ];
        });

        return view('adminpanel.show', ['dbData' => $data]);
    }

    public function myDetails(User $user): View
    {
        $admin = auth()->user();

        return view('adminpanel.me', ['user' => $admin]);
    }
}
