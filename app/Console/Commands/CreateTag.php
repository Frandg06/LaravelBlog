<?php

namespace App\Console\Commands;

use App\Models\Tag;
use Illuminate\Console\Command;

class CreateTag extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-tag';

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
        $names = $this->ask('Tag name?');

        if (app()->isProduction()) {
            $this->error('This command cannot be run in production.');
            return;
        }

        foreach (explode(',', $names) as $name) {
            Tag::create([
                'name' => strtoupper(trim($name)),
            ]);
        }

        $this->info('Tag created successfully!');
    }
}
