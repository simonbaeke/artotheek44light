<?php

namespace App\Http\Controllers;

use App\Models\Expire;
use App\Http\Requests\StoreSubscription;
use App\Http\Resources\SubscriptionDetailResource;
use App\Http\Resources\SubscriptionListResource;
use App\Http\Resources\SubscriptionResource;
use App\Models\Rent;
use App\Models\Subscription;
use Illuminate\Http\Request;


class SubscriptionController extends Controller
{

    public function __construct()
    {

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {


        if ($request->has('list') && $request->input('list') == true){
            return SubscriptionListResource::collection(Subscription::all());
        }
        return json_encode(Subscription::with('user')->get());

        return SubscriptionResource::collection(Subscription::with('user')->get());


        return SubscriptionDetailResource::collection(Subscription::limit(5)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSubscription $request)
    {
        $subscription = Subscription::create([
            'user_id' => $request['user_id'],
            'active' => true,
            'number' =>  array_key_exists('number',$request)?$request['number']:Subscription::createNumber(),
            'started_at' => array_key_exists('started_at',$request)?$request['started_at']:Carbon::now()
        ]);

        $subscription->expires()->save(new \App\Expire(["date" => array_key_exists('expires_at',$request)?$request['expires_at']:Carbon::now()->addMonths(6)]));

        return $subscription;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Subscription $subscription
     * @return \Illuminate\Http\Response
     */
    public function show(Subscription $subscription)
    {

        return new SubscriptionResource($subscription);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Subscription $subscription
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subscription $subscription)
    {
        try {

            //Deze code moet ergens anders komen
            if ($request->has('active') && $request->input('active') == false) {
                //check
                if ($subscription->activeRent != null) {
                    return response()->json(['message' => 'Er is nog een ontlening actief'], 400);
                }
            }

            return new SubscriptionResource($this->subscriptionService->update($request->all(), $subscription));
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Subscription $subscription
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subscription $subscription)
    {
        //verwijder expire order

        if (!$subscription->canBeDeleted()){
          return   response()->json(['message' => 'Ontlening of reservering actief'], 400);
        }

        Expire::destroy($subscription->expires()->pluck('id'));

        $subscription->confirmed()->delete();
        $order = $subscription->order;
        //delete rents en reservations
        Rent::destroy($subscription->rents()->pluck('id'));

        if ($order) {
            $order->delete();

        }
        //$subscription->order()->delete();
        $subscription->delete();

        return response()
            ->json(['deleted']);

    }

    public function getNumber()
    {
        return response()
            ->json(['number' => Subscription::createNumber()]);
    }
}
