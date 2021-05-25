<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;


class ArtworkResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,

            //'available' => $this->when($request->has('available'), $this->isAvailable()),


            // 'thumbnailurl' => asset('../storage/img/thumbnail/' . $this->thumbnailurl),
            // 'detailurl' => asset('../storage/img/' . $this->thumbnailurl),
            'artist' => new ArtistResource($this->artist),

            //   'height' => $this->height,
            // 'width' => $this->width,
            //'length' => $this->length,
            'code' => $this->longCode,
            // 'price' => $this->price,
            //'forsale' => $this->forsale,
            //'sold' => $this->isSold()


        ];
    }
}
