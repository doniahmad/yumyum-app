<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'price_per_km', 'area_radius', 'name', 'email', 'phone', 'address', 'logo', 'coordinate_location', 'facebook_url', 'instagram_url', 'twitter_url'
    ];

    protected $primaryKey = null;
}
