<?php

namespace App\Models;

use App\Notifications\ResetPasswordNotification;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use TaylorNetwork\UsernameGenerator\FindSimilarUsernames;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens,
        HasFactory,
        Notifiable,
        FindSimilarUsernames,
        HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function order()
    {
        return $this->hasMany(Order::class);
    }

    public function sendPasswordResetNotification($token)
    {
        $url = "http://localhost:3000/web-restaurant/password/reset/" . $token;
        $this->notify(new ResetPasswordNotification($url));
    }
}
