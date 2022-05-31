<?php

namespace App\Http\Controllers;

use App\Models\Product;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use \Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = Product::withCount(['solds' => function ($query) {
            return $query->select(DB::raw('SUM(sold_products.quantity) AS total'));
        }])->with('category');

        if ($search = $request->input('search')) {
            $data->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%');
            });
        }

        if ($category = $request->input('category')) {
            $data->whereHas('category', function ($categories) use ($category) {
                $categories->where('category', $category);
            });
        }

        if ($sort = $request->input('sort')) {
            switch ($sort) {
                case 'terpopuler':
                    $data->orderBy('solds_count', 'desc');

                case 'terbaru':
                    $data->orderBy('created_at', 'desc');

                case 'termahal':
                    $data->orderBy('price', 'desc');

                case 'termurah':
                    $data->orderBy('price', 'asc');

                case 'terlama':
                    $data->orderBy('created_at', 'asc');
            }
        }

        $response = $data->paginate(20);

        return response()->json($response, 200);
    }

    public function all(Request $request)
    {
        $data = Product::withCount(['solds' => function ($query) {
            return $query->select(DB::raw('SUM(sold_products.quantity) AS total'));
        }])->with('category');

        if ($search = $request->input('search')) {
            $data->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%');
            });
        }

        if ($category = $request->input('category')) {
            $data->whereHas('category', function ($categories) use ($category) {
                $categories->where('category', $category);
            });
        }

        if ($sort = $request->input('sort')) {
            switch ($sort) {
                case 'terpopuler':
                    $data->orderBy('solds_count', 'desc');

                case 'terbaru':
                    $data->orderBy('created_at', 'desc');

                case 'termahal':
                    $data->orderBy('price', 'desc');

                case 'termurah':
                    $data->orderBy('price', 'asc');

                case 'terlama':
                    $data->orderBy('created_at', 'asc');
            }
        }

        $response = $data->get();

        return response()->json($response, 200);
    }

    public function MakananDanMinuman(Request $request)
    {
        $data = Product::with("category");
        if ($search = $request->input('search')) {
            $data->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%');
            });
        }
        $response = $data->whereIn('category_id', [1, 2])->get();
        return response()->json($response, 200);
    }

    public function paket(Request $request)
    {
        $data = Product::with("category")->where('category_id', 3);
        if ($search = $request->input('search')) {
            $data->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%');
            });
        }
        $response = $data->get();
        return response()->json($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validateData = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|integer',
            'image' => 'required|image|mimes:jpeg,png,jpg',
            'description' => 'required|max:350',
            'detail' => 'max:100',
            'price' => 'required|integer',
        ]);

        $slug = SlugService::createSlug(Product::class, 'slug', $request->name);
        $uploadImage = CloudinaryStorage::upload($request->image->getRealPath(), $request->image->getClientOriginalName());
        $validateData['image'] = $uploadImage;

        try {
            $validateData['slug'] = $slug;
            $response = Product::create($validateData);
            return response()->json([
                'succes' => true,
                'message' => 'Success',
                'data' => $response,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error',
                'error' => $e->getMessage()
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $product->load('category');
        return response()->json($product, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Product  $product
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $response = Product::find($id);
        $rules = [
            'name' => 'string',
            'category_id' => 'integer',
            'image' => 'image|mimes:png,jpg',
            'description' => 'string|max:350',
            'detail' => 'max:100',
            'price' => 'string',
            'sold' => 'integer',
        ];

        $validateData = $request->validate($rules);

        if ($request->file('image')) {
            Cloudinary::destroy($response->image, ['type' => 'upload', 'resource_type' => 'image']);
            $uploadImage = CloudinaryStorage::replace($response->image, $request->image->getRealPath(), $request->image->getClientOriginalName());
            $validateData['image'] = $uploadImage;
        }

        if ($request->name) {
            $validateData['slug'] = SlugService::createSlug(Product::class, 'slug', $request->name);
        }

        try {
            $response->update($validateData);
            return response()->json([
                'succes' => true,
                'message' => 'Success',
                'data' => $response,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error',
                'error' => $e->getMessage()
            ], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $data = Product::find($id);
            CloudinaryStorage::delete($data->image);
            $data->delete();
            return response()->json([
                'success' => true,
                'message' => 'Success',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error',
                'error' => $e->getMessage()
            ], 422);
        }
    }
}
