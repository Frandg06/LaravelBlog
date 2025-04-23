<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class CreateMyUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-my-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Creating a new user...');

        if (app()->isProduction()) {
            $this->error('This command cannot be run in production.');
            return;
        }

        User::create([
            'name' => 'Fran Diez',
            'email' => 'fdiez86@gmail.com',
            'password' => bcrypt('password'),
        ]);

        // Here you can add the logic to create a user
        // For example, you might want to use a User model to create a new user in the database

        $this->info('User created successfully!');
    }
}
