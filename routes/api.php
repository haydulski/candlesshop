<?php

use App\Http\Controllers\Api\v1\Categories\CategoryController;
use App\Http\Controllers\Api\v1\Orders\OrderController;
use App\Http\Controllers\Api\v1\Products\ProductController;
use App\Http\Controllers\Api\v1\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function () {
    Route::get('user', [UserController::class, 'show'])->middleware('auth:sanctum');

    Route::apiResource('products', ProductController::class)->only(['show', 'index']);

    Route::controller(CategoryController::class)->group(function () {
        Route::get('categories', 'index');
        Route::get('categories/product', 'productcategories');
    });

    Route::post('new-order', [OrderController::class, 'store']);
});
