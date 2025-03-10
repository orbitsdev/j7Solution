<?php

namespace App\Livewire;

use Livewire\Component;

class TestimonialsPage extends Component
{
    public function render()
    {
        $testimonials = [
            [
                'name' => 'Bonnie Green',
                'role' => 'CTO at OpenAI',
                'image' => 'https://randomuser.me/api/portraits/women/1.jpg',
                'quote' => 'This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.',
                'title' => 'Solid foundation for any project'
            ],
            [
                'name' => 'Joseph McFall',
                'role' => 'Junior Designer at Adobe',
                'image' => 'https://randomuser.me/api/portraits/men/2.jpg',
                'quote' => 'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screens to complex dashboards. Perfect choice for your next SaaS application.',
                'title' => 'Efficient Collaborating'
            ],
            [
                'name' => 'Michael Gough',
                'role' => 'Front-end Engineer at Meta',
                'image' => 'https://randomuser.me/api/portraits/men/3.jpg',
                'quote' => 'I recently got my hands on Flowbite Pro, and I\'m speechless with how easy this was to integrate within my application.',
                'title' => 'Solid foundation for any project'
            ],
            [
                'name' => 'Lana Byrd',
                'role' => 'Software Engineer at Tesla',
                'image' => 'https://randomuser.me/api/portraits/women/4.jpg',
                'quote' => 'This is a very complex and beautiful set of elements. It comes with the best things from Figma and Tailwind.',
                'title' => 'A must-have for designers'
            ],
            [
                'name' => 'Helene Engels',
                'role' => 'CFO at Microsoft',
                'image' => 'https://randomuser.me/api/portraits/women/5.jpg',
                'quote' => 'Flowbite provides a robust set of design tokens and components based on the popular Tailwind CSS framework.',
                'title' => 'Mindblowing workflow and variants'
            ],
            [
                'name' => 'Neil Sims',
                'role' => 'Software Architect at Amazon',
                'image' => 'https://randomuser.me/api/portraits/men/6.jpg',
                'quote' => 'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard.',
                'title' => 'Mindblowing workflow and variants'
            ],
            [
                'name' => 'Jese Leos',
                'role' => 'CEO at Oracle',
                'image' => 'https://randomuser.me/api/portraits/men/7.jpg',
                'quote' => 'I recently got my hands on Flowbite Pro, and I\'m speechless with how easy this was to integrate within my application.',
                'title' => 'Speechless with how easy this was to integrate'
            ],
            [
                'name' => 'Robert Brown',
                'role' => 'Junior Developer at SAP',
                'image' => 'https://randomuser.me/api/portraits/men/8.jpg',
                'quote' => 'This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.',
                'title' => 'Speechless with how easy this was to integrate'
            ]
        ];
        return view('livewire.testimonials-page',
            [
                'testimonials' => $testimonials
            ]
        );
    }
}
