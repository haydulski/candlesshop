<?php

namespace App\Http\Controllers\Api\v1\Orders;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Api\OrderCreateRequest;
use App\Models\Order;
use App\Models\OrderItem;


class OrderController extends Controller
{
    private Order $order;

    public function __construct(Order $or)
    {
        $this->order = $or;
    }
    public function store(OrderCreateRequest $req, OrderItem $item): Response
    {
        $form = $req->validated();
        $user= auth()->user();
        if(isset($user)){
           
            $orderData= json_decode($form['order_data']);
            $products=$orderData->cart;
            $details=$orderData->details;
            $newOrder=[];
            foreach($details as $key=>$det){
                $newOrder[$key]=$det;
            };
            

            
            $newOrder['user_id'] = $user->id;
            $newOrder['session_id'] = session()->getId();
            $newOrder['token'] = 'test-token';
            $newOrder['sub_total'] = $orderData->netto;
            $newOrder['total_price'] = $orderData->brutto;
            $newOrder['tax'] = '0.23';
            $newOrder['status'] = 1;
            $newOrder = $this->order->create($newOrder);

            foreach($products as $prod){
                $newItem = new $item([
                            'order_id' => $newOrder->id,
                            'product_id' => $prod->id,
                            'order_qty' =>$prod->qty,
                            'price' => $prod->price,
                        ]);
                        $newItem->save();
            }
            
            return response()->json('Order accepted', 200);
        }

        return response()->json("User is not logged", 402);
    }
}
