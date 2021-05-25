<?php

namespace App\Http\Controllers;

use App\Actions\CreateNewRent;
use App\Actions\CreateNewRentFromCode;
use App\Actions\CreateOldRent;
use App\Http\Requests\StoreRent;
use App\Http\Requests\UpdateRent;
use App\Http\Resources\RentListResource;
use App\Http\Resources\RentResource;
use App\Models\Rent;
use App\Services\RentService;
use Illuminate\Http\Request;


class RentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return RentListResource::collection(Rent::limit(5)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return  App\Http\Resources\RentResource;
     */
    public function store(StoreRent $request)
    {
        try {


            if ($request->has('notify')) {
                $rent = $this->rentService->store($request->all(), new CreateOldRent());

            } else {

                $rent = $this->rentService->store($request->all(), new CreateNewRent());

            }


            return new RentResource(Rent::whereId($rent->id)
                ->with('order')
                ->with('order.invoice')
                ->first());
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Rent $rent
     * @return \Illuminate\Http\Response
     */
    public
    function show($id)
    {
        return new RentListResource(Rent::findOrFail($id));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Rent $rent
     * @return \Illuminate\Http\Response
     */
    public
    function update(UpdateRent $request, Rent $rent)
    {
        try {
            return new RentResource($this->rentService->update($request, $rent));
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Rent $rent
     * @return \Illuminate\Http\Response
     */
    public
    function destroy($id)
    {
        $rent = Rent::findOrFail($id);
        $rent->delete();
        return $id;
    }
}
