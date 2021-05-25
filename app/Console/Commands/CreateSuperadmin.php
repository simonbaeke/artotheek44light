<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateSuperadmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:superadmin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $firstname = $this->ask('What is your firstname?');
        $lastname = $this->ask('What is your lastname?');
        $email = $this->ask('What is your email?');
        $password = $this->ask('What is your password?');

        $user = User::create([
            'firstname'=> $firstname,
            'lastname'=> $lastname,
            'email'=> $email,
            'password'=> Hash::make($password) ,

        ]);

        return$user;

    }
}
