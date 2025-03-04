<!-- Footer -->
<div class="bg-gradient-to-b from-[#0056b3] to-[#02458d] text-white py-16">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 items-start">

        <!-- Left Side: Logo & Company Info -->
        <div class="flex flex-col items-center md:items-start space-y-4">
            <img src="{{ asset('images/J7.jpg') }}" alt="J7 IT Solution" class="h-24 w-24 rounded-full shadow-lg">
            <p class="text-gray-200 leading-relaxed text-center md:text-left">
                J7 IT Solution and Multimedia Services blends cutting-edge technology with creative excellence
                to deliver innovative IT solutions.
            </p>
            <a href="#" class="inline-flex items-center text-white font-semibold hover:text-gray-200 transition-all">
                <i class="fab fa-facebook text-2xl mr-2"></i> Follow us on Facebook
            </a>
        </div>

        <!-- Quick Links -->
        <div class="text-center md:text-left">
            <h3 class="text-lg font-bold text-white">Quick Links</h3>
            <ul class="mt-3 space-y-2">
                <li><a href="#" class="text-gray-200 hover:text-white transition">About Us</a></li>
                <li><a href="#" class="text-gray-200 hover:text-white transition">Services</a></li>
                <li><a href="#" class="text-gray-200 hover:text-white transition">Projects</a></li>
                <li><a href="#" class="text-gray-200 hover:text-white transition">Contact</a></li>
            </ul>
        </div>

        {{-- <!-- Newsletter Signup -->
        <div class="text-center md:text-left">
            <h3 class="text-lg font-bold text-white">Subscribe to Our Newsletter</h3>
            <form wire:submit.prevent="subscribe" class="mt-3 flex items-center">
                <input type="email" wire:model="email" placeholder="Enter your email"
                    class="px-4 py-2 rounded-l-lg bg-white text-gray-700 outline-none w-60">
                <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700 transition">
                    Subscribe
                </button>
            </form>
            @error('email') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div> --}}

        <!-- Contact Info -->
        <div class="flex flex-col items-center md:items-end">
            <h3 class="text-lg font-bold text-white">Contact Us</h3>
            <div class="mt-4 text-gray-200 space-y-3 text-center md:text-right">
                <p class="flex items-center justify-center md:justify-end">
                    <i class="fas fa-phone-alt text-white mr-2"></i> +852 9155 5069
                </p>
                <p class="flex items-center justify-center md:justify-end">
                    <i class="fas fa-envelope text-white mr-2"></i> kristinemaeampas@gmail.com
                </p>
                <p class="flex items-center justify-center md:justify-end">
                    <i class="fas fa-map-marker-alt text-white mr-2"></i> MJ49+6PP Kenram, Isulan, Sultan Kudarat
                </p>
            </div>
        </div>
    </div>

    <!-- Testimonials -->
    <div class="mt-10 text-center">
        <h3 class="text-lg font-bold text-white">What Our Clients Say</h3>
        <p class="text-gray-200 italic mt-3">"J7 IT Solution helped us scale our business seamlessly! Highly recommended." - <strong>John Doe, CEO</strong></p>
    </div>

    <!-- Awards & Certifications -->
    <div class="mt-10 flex justify-center space-x-4">
        <img src="{{ asset('images/certification.png') }}" class="h-10" alt="ISO Certified">
        <img src="{{ asset('images/award.png') }}" class="h-10" alt="Top IT Company 2024">
    </div>
</div>


