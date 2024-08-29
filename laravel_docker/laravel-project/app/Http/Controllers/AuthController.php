<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validate the login credentials
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Attempt to log the user in
        if (Auth::attempt($request->only('email', 'password'))) {
            // If successful, generate a token (if using Sanctum, Passport, etc.)
            $token = $request->user()->createToken('authToken')->plainTextToken;

            return response()->json([
                'message' => 'Login successful',
                'token' => $token,
            ]);
        }

        // If login fails
        return response()->json([
            'message' => 'Invalid login credentials',
            'code' => '001',
        ], 401);
    }
}
