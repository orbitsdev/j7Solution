<?php

namespace App\Livewire;

use Livewire\Component;

class SoftwareProjects extends Component
{
    public function render()
    {
        return view('livewire.software-projects', [
            'projects' => [
                ['name' => 'Cooperative Management System', 'description' => 'A system for managing cooperatives.'],
                ['name' => 'Hotel Management System', 'description' => 'A system for hotel booking and management.'],
                ['name' => 'Voting System', 'description' => 'An automated voting system.'],
            ]
        ]);
    }
}
