<?php

namespace App\Http\Controllers;

use App\Actions\User\AddUser;
use App\Events\UserStored;
use App\Models\User;
use App\Services\UserService;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    protected $userService;


    public function __construct()
    {

    }

    public function index(Request $request)
    {
        return json_encode(User::all());
    }

    public function store(StoreUser $request)
    {
        $attributes = $request->all();
        $request->has('newsletter') ? $attributes['newsletter'] = true : $attributes['newsletter'] = false;

        $password = bin2hex(openssl_random_pseudo_bytes(4));
        $attributes['password'] = Hash::make($password);

        $registerUser = new AddUser();

        $user = $registerUser->execute($attributes);

        $notify = $attributes['notify'];

        event(new UserStored($user, $password, $notify));
        return new UserResource($user);
    }

    public function update(UpdateUser $request)
    {
        return new UserDetailResource($this->userService->update($request->all()));
    }

    public function show(User $user)
    {
        if (Auth('sanctum')->user()->hasRole('admin')) {
            return new UserDetailResource($user);
        }

        return new UserDetailResource(Auth('api')->user());
    }

    public function gdpr(StoreGdpr $request)
    {
        return $this->userService->storeGpdr($request->all());

    }
}
