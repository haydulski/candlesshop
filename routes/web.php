<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\OrderController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::prefix('shop-admin')->name('admin.')
        ->controller(AdminController::class)->group(function () {
            Route::get('/', 'index')->name('home');
            Route::get('/me', 'myDetails')->name('me');
        });

    Route::prefix('shop-admin')->name('admin.')
        ->controller(ProductController::class)->group(function () {

            Route::get('/products', 'products')->name('products');
            Route::post('/products', 'store')->name('product.store');
            Route::get('/products/add', 'add')->name('product.add');
            Route::get('/products/{id}', 'edit')->name('product.edit');
            Route::post('/products/{id}', 'update')->name('product.update');
            Route::delete('/products/{id}', 'destroy')->name('product.destroy');
        });

    Route::prefix('shop-admin')->name('admin.')
        ->controller(CategoryController::class)->group(function () {

            Route::get('/categories', 'index')->name('categories.all');
            Route::post('/categories', 'store')->name('category.store');
            Route::get('/categories/new', 'create')->name('category.new');
            Route::get('/categories/{id}', 'show')->name('category.show');
            Route::delete('/categories/{id}', 'destroy')->name('category.destroy');
            Route::post('/categories/{id}', 'update')->name('category.update');
        });

    Route::prefix('shop-admin')->name('admin.')
        ->controller(CustomerController::class)->group(function () {

            Route::get('/customers', 'index')->name('customers.all');
            Route::get('/customer/{id}', 'show')->name('customer.show');
            Route::delete('/customer/{id}', 'destroy')->name('customer.destroy');
            Route::post('/customers/{id}', 'update')->name('customer.update');
        });

    Route::prefix('shop-admin')->name('admin.')
        ->controller(OrderController::class)->group(function () {

            Route::get('/orders', 'index')->name('orders.all');
            Route::get('/orders/new', 'create')->name('order.create');
            Route::post('/orders', 'store')->name('order.store');
            Route::get('/orders/{id}', 'show')->name('order.show');
            Route::delete('/orders/{id}', 'destroy')->name('order.destroy');
            Route::post('/orders/{id}', 'update')->name('order.update');
            Route::post('/orders/status/{id}', 'status')->name('order.status.update');
        });
});
Route::view('/{path?}', 'welcome');
