<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArtwork;
use App\Http\Requests\UpdateArtwork;
use App\Http\Resources\ArtworkCollection;
use App\Http\Resources\ArtworkDetailResource;
use App\Http\Resources\ArtworkResource;
use App\Http\Resources\IsSoldResource;
use App\Models\Artist;
use App\Models\Artwork;
use App\Models\ArtworkUser;
use App\Models\Type;
use App\NotifyArtworkAvailable;
use App\Services\ArtworkService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;



class ArtworkController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index', 'show']);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->has('available')) {
            return AvailableResource::collection(Artwork::all()->inRandomOrder()->get());
        }

        //return ArtworkResource::collection(Artwork::all());
        return  json_encode(Artwork::with('artist')->with('type')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreArtwork $request)
    {
        $file = $request->file('thumbnailurl');

        return Artwork::create([
            'name' => $request->input('name'),
            'type_id' => $request->input('type_id'),
            'artist_id' => $request->input('artist_id'),
            'thumbnailurl' => $this->saveImage($request->file('thumbnailurl')),
            'length' => $request->input('length'),
            'width' => $request->input('width'),
            'height' => $request->input('height'),
            'price' => $request->input('price'),
            'code' => str_pad(preg_replace('/\s+/', '', $request->input('code')), 3, "0", STR_PAD_LEFT),
            'forsale' => ($request->input('forsale')) == 'true'
        ]);

        return new ArtworkResource($this->artworkService->store($request, $file));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Artwork $artwork
     * @return \Illuminate\Http\Response
     */
    public function show(Artwork $artwork)
    {

        return json_encode(new ArtworkDetailResource($artwork));
    }

    public function showImage(Artwork $artwork)
    {
        return Storage::download('public/img/' . $artwork->thumbnailurl);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Artwork $artwork
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateArtwork $request, Artwork $artwork)
    {
        return new ArtworkDetailResource($this->artworkService->update($request, $artwork));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Artwork $artwork
     * @return \Illuminate\Http\Response
     */
    public function destroy(Artwork $artwork)
    {
        $deleteArtwork = new delete();
        try {
            $deleteArtwork->execute($artwork);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);

        }

        return response()->json('OK', 200);

    }


    public function sold(Request $request)
    {
        return IsSoldResource::colection(Artwork::get());
    }

    protected function saveImage($file)
    {
        $filename = basename(Storage::put('public/img', $file));
        $full = Image::make(Storage::get('public/img/' . $filename))->stream()->__toString();
        Storage::put('public/img/' . $filename, $full);

        //thumbnail
        try {
            $img = Image::make(Storage::get('public/img/' . $filename))->resize(300, null, function ($constraint) {
                $constraint->aspectRatio();
            })->stream('jpg', 90)->__toString();

            Storage::put('public/img/thumbnail/' . $filename, $img);

        } catch (\Exception $e) {
            throw new \Exception($e);
        }
        return $filename;

    }
}
