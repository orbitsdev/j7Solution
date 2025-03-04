<div class="container mx-auto my-16 px-6 max-w-3xl">
    <h2 class="text-xl text-blue-700 text-center font-semibold">Contact Us</h2>
    <h3 class="text-4xl font-bold text-blue-900 text-center mt-2">Get in Touch</h3>
    <p class="text-gray-600 text-center mt-2">
        Looking forward to building your own residential or commercial property? Feel free to contact us
        using the form below to discuss additional details of your project with our managers so
        that our team could get started with your project right away.
    </p>

    <!-- Contact Form -->
    <form wire:submit.prevent="submit" class="mt-8 space-y-6">
        <!-- Name Field -->
        <div>
            <label class="block font-semibold text-blue-900">Name</label>
            <input type="text" wire:model="name" placeholder="Type your name here"
                class="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-2 text-gray-700">
            @error('name') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        <!-- Email Field -->
        <div>
            <label class="block font-semibold text-blue-900">Email</label>
            <input type="email" wire:model="email" placeholder="Type your email here"
                class="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-2 text-gray-700">
            @error('email') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        <!-- Message Field -->
        <div>
            <label class="block font-semibold text-blue-900">Message</label>
            <textarea wire:model="message" placeholder="Type your message here"
                class="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-2 text-gray-700 h-24 resize-none"></textarea>
            @error('message') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        <!-- Submit Button -->
        <div class="text-center">
            <button type="submit"
                class="bg-blue-900 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition flex items-center justify-center mx-auto">
                Send <i class="fas fa-paper-plane ml-2"></i>
            </button>
        </div>
    </form>
</div>
