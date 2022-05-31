<?php

namespace App\Http\Controllers;

use App\Models\SoldProduct;
use Illuminate\Http\Request;

class SoldProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // count quantity sold product
        $soldProducts = SoldProduct::with('product')->get();
        $sold = 0;
        $omset = 0;
        foreach ($soldProducts as $soldProduct) {
            $sold += $soldProduct->quantity;
            $omset += ($soldProduct->product->price_after_discount ? $soldProduct->product->price_after_discount : $soldProduct->product->price) * $soldProduct->quantity;
        }
        return response()->json([
            'sold' => $sold,
            'omset' => $omset,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = SoldProduct::insert($request->all());
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SoldProduct  $soldProduct
     * @return \Illuminate\Http\Response
     */
    public function show(SoldProduct $soldProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SoldProduct  $soldProduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SoldProduct $soldProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SoldProduct  $soldProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(SoldProduct $soldProduct)
    {
        //
    }
}
