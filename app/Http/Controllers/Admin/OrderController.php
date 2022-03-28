<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\OrderCreateRequest;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class OrderController extends Controller
{
    private Order $order;

    public function __construct(Order $or)
    {
        $this->order = $or;
    }

    public function index(): View
    {
        $orders = $this->order->with('user')->paginate(10);
        return view('adminpanel.orders.all', ['orders' => $orders]);
    }

    public function create(): View
    {
        return view('adminpanel.orders.new');
    }

    public function show(int $id, OrderItem $item): View
    {
        $ord = $this->order->with('user')->find($id);
        $items = $item->with('product')->where('order_id', '=', $id)->get();
        return view('adminpanel.orders.show', ['order' => $ord, 'items' => $items]);
    }

    public function store(OrderCreateRequest $req, OrderItem $item): RedirectResponse
    {
        $form = $req->validated();

        if (isset($form)) {
            $priceNetto = (int)$form['sub_total'];
            $form['total_price'] = $priceNetto + $form['shipping'];
            $form['session_id'] = 'test-session';
            $form['token'] = 'test-token';
            $newOrder = $this->order->create($form);

            $newItem = new $item([
                'order_id' => $newOrder->id,
                'product_id' => '9',
                'order_qty' => '2',
                'price' => 391,
            ]);
            $newItem->save();
        }

        return redirect()->route('admin.orders.all')->with('success', 'Order added');
    }
}
