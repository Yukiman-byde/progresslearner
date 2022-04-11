<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

use Illuminate\Http\Request;

class LineController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function handleCallbackProvider($provider)
    {
        $provided_user = Socialite::driver($provider)->user();

        $user = User::where('provided_user_id', $provided_user->id)
            ->first();

        if($user){
           $user->update([
               'name'     => $provided_user->name,
               'myAvatar' => $provided_user->avatar,
           ]);
       }

        if ($user === null) {
            // redirect confirm
            $user = User::create([
               'name'               => $provided_user->name,
               'provided_user_id'   => $provided_user->id,
               'myAvatar'           => $provided_user->avatar,
            ]);
        }


        // if(Auth::guard('admin')){
        //     if($user->admin == 1) {
        //        Auth::guard('admin')->session()->regenerate();
        //     }
        // }

        Auth::guard('web')->login($user);

        return redirect('/index');
    }

    public function logout()
    {
        Auth::logout();

        return redirect()->view('/');
    }
}
