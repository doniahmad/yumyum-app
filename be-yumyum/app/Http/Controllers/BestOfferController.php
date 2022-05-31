<?php

namespace App\Http\Controllers;

use App\Models\BestOffer;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class BestOfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = BestOffer::with('product.category')->get();
        return response()->json($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // delete all table best offer
        BestOffer::truncate();


        try {
            DB::table('products')->update(['discount_type' => null, 'price_after_discount' => null]);
            foreach ($request->all() as $value) {
                Product::where('id', $value["product_id"])->update(
                    [
                        'discount_type' => $value["discount_type"],
                        'price_after_discount' => $value["price_after_discount"],
                    ]
                );
                // insert new best offer
                BestOffer::create(['product_id' => $value["product_id"]]);
            }

            return response()->json($request->all());
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BestOffer  $bestOffer
     * @return \Illuminate\Http\Response
     */
    public function destroy(BestOffer $bestOffer)
    {
        try {
            $response = BestOffer::destroy($bestOffer->id);
            return response()->json([
                'message' => 'Best offer deleted',
                'deleted' => $response
            ]);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
}
