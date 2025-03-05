<div id="services" class="services container mx-auto py-20 px-6 lg:px-24 bg-white">
    <!-- Title Section -->
    <div class="text-center mb-12">
        <h3 class="text-blue-600 text-lg font-semibold tracking-wide uppercase">
            Our Services
        </h3>
        <h2 class="text-3xl md:text-5xl font-extrabold text-blue-900 leading-snug">
            Software Development
        </h2>
    </div>

    <!-- Two-Column Grid for Image & Content -->
    <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left - Image -->
        <div class="service-image">
            <img src="{{ asset('images/bg2.png') }}" alt="System Development" class="rounded-xl shadow-lg w-full">
        </div>

        <!-- Right - Description with Blue Box -->
        <div class="space-y-6">
            <p class="text-gray-700 text-lg leading-relaxed">
                We specialize in custom software development and system solutions tailored to streamline
                operations, enhance efficiency, and drive business growth. From web and mobile applications
                to enterprise systems and automation, we deliver innovative, scalable, and secure technology
                solutions that empower businesses to thrive in the digital era.
            </p>

            <!-- Blue Box Highlight -->
            <div class="we-focus bg-gradient-to-r from-blue-900 to-blue-500 text-white p-6 rounded-xl shadow-xl">
                <p class="text-2xl md:text-3xl font-semibold leading-snug">
                    We focus on the problem, the question, and the solution. And we always think ahead.
                </p>
            </div>
        </div>
    </div>

    <!-- Services Grid -->
    <div class="cards grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
        <!-- Planning -->
        <div class="flex items-start gap-6">
            <i class="fas fa-tasks text-5xl text-blue-900"></i>
            <div>
                <h4 class="text-xl font-semibold text-blue-900">Planning</h4>
                <p class="text-gray-600 mt-2 leading-relaxed">
                    Defining project goals, gathering requirements, and outlining the scope, timeline, and resources needed for development.
                </p>
            </div>
        </div>

        <!-- Design & Development -->
        <div class="flex items-start gap-6">
            <i class="fas fa-laptop-code text-5xl text-blue-900"></i>
            <div>
                <h4 class="text-xl font-semibold text-blue-900">Design & Development</h4>
                <p class="text-gray-600 mt-2 leading-relaxed">
                    Creating system architecture, UI/UX design, and coding the software to meet functional and technical requirements.
                </p>
            </div>
        </div>

        <!-- Testing & Implementation -->
        <div class="flex items-start gap-6">
            <i class="fas fa-cogs text-5xl text-blue-900"></i>
            <div>
                <h4 class="text-xl font-semibold text-blue-900">Testing & Implementation</h4>
                <p class="text-gray-600 mt-2 leading-relaxed">
                    Conducting quality assurance, debugging, and deploying the system to ensure functionality, security, and performance.
                </p>
            </div>
        </div>

        <!-- Maintenance & Support -->
        <div class="flex items-start gap-6">
            <i class="fas fa-tools text-5xl text-blue-900"></i>
            <div>
                <h4 class="text-xl font-semibold text-blue-900">Maintenance & Support</h4>
                <p class="text-gray-600 mt-2 leading-relaxed">
                    Providing updates, troubleshooting, and optimizing the system for long-term efficiency and reliability.
                </p>
            </div>
        </div>
    </div>
</div>
