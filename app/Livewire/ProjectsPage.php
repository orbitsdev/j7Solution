<?php

namespace App\Livewire;

use Livewire\Component;

class ProjectsPage extends Component
{

    public $activeTab = 'software'; // Default Tab

    public function setTab($tab)
    {
        $this->activeTab = $tab;
    }

    public function render()
    {
        return view('livewire.projects-page');
    }
}
