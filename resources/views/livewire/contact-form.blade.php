<div class="container mx-auto my-16 px-6 max-w-3xl ">
    <!-- Section Title -->
    <h2 class="text-lg text-blue-700 text-center font-semibold uppercase tracking-wide">
        Contact Us
    </h2>
    <h3 class="text-4xl font-bold text-blue-900 text-center mt-2 leading-tight">
        Get in Touch
    </h3>
    <p class="text-gray-600 text-center mt-2 max-w-lg mx-auto">
        Looking forward to building your own residential or commercial property?
        Feel free to contact us using the form below to discuss additional details
        with our team and get started with your project right away.
    </p>

    <!-- Contact Form -->
    <form wire:submit.prevent="submit" class="mt-10 space-y-6">
        <!-- Name Field -->
        <div>
            <label class="block font-semibold text-blue-900">Name</label>
            <input type="text" wire:model="name" placeholder="Type your name here"
                class="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300
                outline-none px-4 py-3 text-gray-700 rounded-lg shadow-sm transition-all duration-200">
            @error('name') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        <!-- Email Field -->
        <div>
            <label class="block font-semibold text-blue-900">Email</label>
            <input type="email" wire:model="email" placeholder="Type your email here"
                class="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300
                outline-none px-4 py-3 text-gray-700 rounded-lg shadow-sm transition-all duration-200">
            @error('email') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        <!-- Message Field -->
        <div>
            <label class="block font-semibold text-blue-900">Message</label>
            <textarea wire:model="message" placeholder="Type your message here"
                class="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300
                outline-none px-4 py-3 text-gray-700 rounded-lg shadow-sm h-28 resize-none transition-all duration-200"></textarea>
            @error('message') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        <!-- Submit Button -->
        <div class="text-center">
            <button type="submit"
                class="bg-blue-900 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700
                transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto gap-2">
                <span>Send</span>
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    </form>

    
</div>
