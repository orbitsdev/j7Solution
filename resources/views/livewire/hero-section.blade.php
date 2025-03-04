<div class="relative bg-cover bg-center h-screen min-h-[600px] flex items-center" style="background-image: url('{{ asset('images/bg1.jpg') }}');">
    <!-- Darker Overlay for Readability -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#012a63] to-[#02458d] opacity-90"></div>

    <!-- Content -->
    <div class="container relative z-10 mx-auto px-6 lg:px-20 flex flex-col justify-center items-start text-white">
        <!-- Company Name Highlight -->
        <h1 class="text-5xl lg:text-6xl font-extrabold leading-tight">
            <span class="text-blue-300">J7</span> IT Solution: Empowering Businesses with
            <span class="text-blue-300">Innovative Technology</span>
        </h1>

        <p class="mt-4 text-lg max-w-xl text-gray-300 leading-relaxed">
            We blend cutting-edge technology with creative excellence to provide high-impact digital solutions tailored to your needs.
        </p>

        <!-- Key Features (Updated Icons) -->
        <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="flex items-center space-x-3">
                <i class="fas fa-code text-3xl text-blue-300"></i>
                <span>Software Development</span>
            </div>
            <div class="flex items-center space-x-3">
                <i class="fas fa-pencil-ruler text-3xl text-blue-300"></i>
                <span>Multimedia & Branding</span>
            </div>
            <div class="flex items-center space-x-3">
                <i class="fas fa-cloud text-3xl text-blue-300"></i>
                <span>Cloud & Web Services</span>
            </div>
            <div class="flex items-center space-x-3">
                <i class="fas fa-shield-alt text-3xl text-blue-300"></i>
                <span>Cybersecurity</span>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-6">
            <a href="#contact" class="px-6 py-3 bg-white text-blue-900 uppercase text-lg font-semibold rounded-full shadow-lg hover:bg-blue-400 transition">
                Get Started
            </a>
        </div>
    </div>
</div>
