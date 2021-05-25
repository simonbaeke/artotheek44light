<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $fillable = ['user_id','artwork_id','user_info'];

    public function artwork(){
        return $this->belongsTo(Artwork::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
