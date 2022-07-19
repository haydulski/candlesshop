<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Category extends Model
{
    use HasFactory;

    protected $table = 'category';

    protected $fillable = [
        'parent_category',
        'name',
        'slug',
        'desc',
    ];

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_categories');
    }

    public function getProductCountAttribute(): int
    {
        return $this->products()->count();
    }
}
