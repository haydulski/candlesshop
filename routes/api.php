<?php

use App\Http\Controllers\Api\v1\Products\ProductController;
use App\Http\Controllers\Api\v1\Categories\CategoryController;
use App\Http\Controllers\Api\v1\Orders\OrderController;
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

    Route::controller(UserController::class)->group(function () {
        Route::get('user', 'show')->middleware('auth:sanctum');
    });
    Route::controller(ProductController::class)->group(function () {
        Route::get('products', 'index');
        Route::get('products/{product}', 'show');
        Route::post('products', 'store')->middleware('auth:sanctum');
        Route::put('products/{product}', 'update')->middleware('auth:sanctum');
        Route::delete('products/{product}', 'destroy')->middleware('auth:sanctum');
    });
    // categories 
    Route::controller(CategoryController::class)->group(function () {
        Route::get('categories', 'index');
        Route::get('categories/product', 'productcategories');
    });
    Route::controller(OrderController::class)->group(function () {
        Route::post('new-order', 'store');
    });



    // Route::post('products', [ProductController::class, 'create']);
    // Route::post('products/{id}', [ProductController::class, 'update']);
    // Route::delete('products/{id}', [ProductController::class, 'destroy']);

});
