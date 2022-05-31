<?php

namespace App\Http\Controllers;

use App\Models\User;
use TaylorNetwork\UsernameGenerator\Generator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'username' => 'unique:users,username',
            'password' => 'required|confirmed|min:8',
            'contact' => 'required',
            'address' => 'required',
            'location' => 'string',
            'image' => 'image|mimes:jpeg,png,jpg,svg',
            'role' => 'required|in:admin,user,owner',
        ]);

        $generator = new Generator();

        $fields['username'] = $generator->generate($fields['name']);

        $fields['password'] = Hash::make($fields['password']);

        $fields['location'] = "";

        if ($request->hasFile('image')) {
            $fields['image'] = CloudinaryStorage::upload($request->image->getRealPath(), $request->image->getClientOriginalName());
        }

        $user = User::create($fields);

        $user->assignRole($fields['role']);

        $token = $user->createToken('apptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response);
    }

    public function login(Request $request)
    {
        $login = $request->username;

        $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        $error = $field === 'email' ? 'Email or password invalid' : 'Username or password invalid';

        $request->merge([$field => $login]);

        try {
            if (Auth::attempt($request->only($field, 'password'))) {
                /** @var User $user */
                $user = Auth::user();
                $token = $user->createToken('apptoken')->plainTextToken;

                return response([
                    'message' => 'succes',
                    'token' => $token,
                    'user' => $user
                ]);
            }
            return response([
                'message' => $error
            ], 401);
        } catch (\Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    }

    public function loginAdmin(Request $request)
    {
        $login = $request->username;

        $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        $error = $field === 'email' ? 'Email or password invalid' : 'Username or password invalid';

        $request->merge([$field => $login]);

        try {
            if (Auth::attempt($request->only($field, 'password'))) {
                /** @var User $user */
                $user = Auth::user();

                if ($user->hasRole(['owner', 'admin'])) {
                    $token = $user->createToken('apptoken')->plainTextToken;
                    return response([
                        'message' => 'succes',
                        'token' => $token,
                        'user' => $user
                    ]);
                }

                return response([
                    'message' => $error
                ], 401);
            }
            return response([
                'message' => $error
            ], 401);
        } catch (\Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    }

    public function logout(Request $request)
    {
        try {
            $request->user()->currentAccessToken()->delete();
            return response([
                'message' => 'succes'
            ]);
        } catch (\Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    }

    public function sendPasswordResetLinkEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status === Password::RESET_LINK_SENT) {
            return response()->json(['message' => __($status)], 200);
        } else {
            return response()->json(['message' => __($status)], 400);
        }
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                ]);
                $user->save();
                event(new PasswordReset($user));
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return response()->json(['message' => __($status)], 200);
        } else {
            throw ValidationException::withMessages([
                'email' => __($status)
            ]);
        }
    }
}
