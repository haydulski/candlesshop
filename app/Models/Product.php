<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'title',
        'slug',
        'on_shop',
        'price',
        'description',
        'stock_qty',
        'picture',
    ];

    public function categories(): BelongsToMany
    {
        return  $this->belongsToMany(Category::class, 'product_categories');
    }
}
