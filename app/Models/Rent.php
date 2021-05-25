<?php

namespace App\Models;

use App\Models\Expire;
use App\Http\Filter\Filterable;
use App\Http\Filter\RentFilter;
use App\Interfaces\Constraint;
use App\Interfaces\Orderable;
use App\Interfaces\Renewable;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;

class Rent extends Model implements Constraint, Renewable, Orderable
{
    //use Filterable;

    protected $fillable = ['subscription_id', 'artwork_id', 'expires', 'returned', 'created_at', 'returned_at'];

    public function getExpireAttribute()
    {


        $expire =  Expire::ofType('Rent')->where('expirable_id',$this->id)->orderBy('id', 'desc')->first();


        if ($expire) {
            return $expire;

        }

        return new Expire();

    }


    public function subscription()
    {
        return $this->belongsTo(Subscription::class);
    }

    public function artwork()
    {
        return $this->belongsTo(Artwork::class);
    }

    public function user()
    {
        return $this->subscription()->user;
    }


    public function expire()
    {
        return $this->morphMany(Expire::class, 'expirable');
    }

    public function expires()
    {
        return $this->morphMany(Expire::class, 'expirable');
    }

    public function expired()
    {
        return $this->expire < \Carbon\Carbon::today();
    }

    public function scopeReturned($query, $flag)
    {
        if ($flag) {
            return $query->where('returned_at', '!=', null);

        }
        return $query->where('returned_at', null);
    }

    public function scopeFilter(Builder $builder, RentFilter $filter)
    {
        $filter->apply($builder);
    }



    static $validationRules = [
        'subscription_id' => 'required',
        'artwork_id' => 'required',
    ];

    public function constraint(FormRequest $request)
    {
        //TODO 1e ontlening per abonnement is gratis en voor 6 maand
        //na verlenging opnieuw gratis

        $artwork = Artwork::available()->find($request->input('artwork_id'));
        //check if object is available
        if (!$artwork) {
            throw new \Exception('Kunstwerk niet beschikbaar');
        }

        $subscription = Subscription::findOrFail($request->input('subscription_id'));
        //abonnement niet geconfirmeerd
        if (!$subscription->confirmed) {
            throw new \Exception('Abonnement nog niet geconfirmeerd');
        }

        //abonnement verlopen
        if ($subscription->expired()) {
            throw new \Exception('Abonnement is verlopen');
        }

        //check  subscription available
        if (!$subscription->isAvailable()) {
            throw new \Exception('Abonnement niet beschikbaar');
        }

        //check subscription is active
        if (!$subscription->active) {
            throw new \Exception('Abonnement is niet actief');
        }
    }

    public function getAmount()
    {

        if ($this->subscription->hasFreeRent()) {
            $this->subscription->useFreeRent($this);
            return 0;
        }

        return 2;
    }

    public function renewDate()
    {
        if ($this->expire == null) {
            $date = Carbon::now()->addMonth(6)->subDay(1);
        } else {
            $date = Carbon::parse($this->expire->date)->addMonth(6)->subDay();
        }

        $subscriptiondate = Carbon::parse($this->subscription->expire->date);

        $subscriptiondate->greaterThanOrEqualTo($date) ? $expiredate = $date : $expiredate = $subscriptiondate;

        return $expiredate;
    }

    public function getUserId()
    {
        return $this->subscription->user->id;
    }

    public function canBeRenewed()
    {
        //invoice laatste expire
        $expirableIds = $this->subscription->user->orders()->whereHas('invoice', function ($query) {
            $query->where('confirmed', 'false');
        })->where('orderable_type', 'Expire')->pluck('orderable_id');

        if ($expirableIds->count() > 0) {

            return Expire::find($expirableIds)
                    ->where('expirable_type', 'Rent')
                    ->where('expirable_id', $this->id)
                    ->count() == 0;
        }

        return true;
    }
}
