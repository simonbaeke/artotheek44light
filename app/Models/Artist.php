<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = ['firstname', 'lastname','bio','short'];

    protected $appends = ['fullname'];

    public function getFullnameAttribute(){
        return "{$this->firstname} {$this->lastname}";

    }


    public function artworks()
    {
        return $this->hasMany(Artwork::class);
    }
}
