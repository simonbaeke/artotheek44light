<?php

namespace App\Models;

use App\Interfaces\Constraint;
use http\Env\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class Expire extends Model implements Constraint
{
    protected $fillable = ['date', 'expirable_type', 'expirable_id','updated_at'];

    public function expirable()
    {
        return $this->morphTo();
    }


    public function user()
    {
        return $this->belongsTo('expirable')->user;
    }

    public function scopeExpired($query, $flag)
    {
        $flag ? $operator = '<' : $operator = '>=';

        return $query->whereDate('date', $operator, \Carbon\Carbon::today());
    }

    public function scopeOfType($query, $type)
    {
        return $query->where('expirable_type', $type);
    }

    static $validationRules = [
        'expirable_type' => 'required',
        'expirable_id' => 'required',
    ];

    public function constraint(FormRequest $request)
    {
        Log::channel('single')->info('Expire constraint');
    }
}
