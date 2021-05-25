<?php

namespace App\Http\Resources;

use App\Models\Expire;
use Illuminate\Http\Resources\Json\JsonResource;

class RentListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return
        [
            'id' => $this->id,
            'artwork' => new ArtworkSimpleResource($this->artwork),
            'artwork_id' => $this->artwork->id,
            'expires_at' => \Carbon\Carbon::parse($this->expire->date)->toDateString(),
            'returned' => $this->returned_at != null,
            'started_at' =>\Carbon\Carbon::parse($this->created_at)->toDateString() ,
            'returned_at' => $this->returned_at,
            'subscription_id' => $this->subscription->id,
            'user'=> new UserSimpleResource($this->subscription->user),
            'subscriptionnumber' => $this->subscription->number,
            'expire' => $this->expire
           // 'expired' =>  $this->expire->date < \Carbon\Carbon::today()
        ];
    }
}
