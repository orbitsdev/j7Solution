<div class="container mx-auto py-16 px-6 lg:px-20 bg-white">
    <!-- Title Section (Full Width) -->
    <div class="mb-8">
        <h3 class="text-blue-600 text-lg font-semibold tracking-wide">OUR SERVICES</h3>
        <h2 class="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            System Development
        </h2>
    </div>

    <!-- Two-Column Grid for Image & Content -->
    <div class="grid md:grid-cols-2 gap-10">
        <!-- Left - Image -->
        <div>
            <img src="{{ asset('images/bg2.png') }}" alt="System Development" class="rounded-lg shadow-md w-full">
        </div>

        <!-- Right - Description with Blue Box -->
        <div class="">
            <p class="text-gray-700 leading-relaxed">
                We specialize in custom software development and system solutions tailored to streamline
                operations, enhance efficiency, and drive business growth. From web and mobile applications
                to enterprise systems and automation, we deliver innovative, scalable, and secure technology
                solutions that empower businesses to thrive in the digital era.
            </p>

            <!-- Blue Box Highlight -->
            <div class="bg-gradient-to-r from-blue-900 to-blue-500 text-white p-6 mt-6 rounded-lg shadow-lg">
                <p class="text-2xl md:text-3xl font-semibold">
                    We focus on the problem, the question, and the solution. And we always think ahead.
                </p>
            </div>

        </div>
    </div>

    <!-- Grid for Four Services (Below Image & Description) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <!-- Planning -->
        <div class="text-center p-6 bg-gray-100 rounded-lg shadow-md">
            <i class="fas fa-tasks text-4xl text-blue-900"></i>
            <h4 class="text-lg font-semibold text-blue-900 mt-2">Planning</h4>
            <p class="text-gray-600 text-sm mt-2">
                Defining project goals, gathering requirements, and outlining the scope, timeline, and resources needed for development.
            </p>
        </div>

        <!-- Design & Development -->
        <div class="text-center p-6 bg-gray-100 rounded-lg shadow-md">
            <i class="fas fa-laptop-code text-4xl text-blue-900"></i>
            <h4 class="text-lg font-semibold text-blue-900 mt-2">Design & Development</h4>
            <p class="text-gray-600 text-sm mt-2">
                Creating system architecture, UI/UX design, and coding the software to meet functional and technical requirements.
            </p>
        </div>

        <!-- Testing & Implementation -->
        <div class="text-center p-6 bg-gray-100 rounded-lg shadow-md">
            <i class="fas fa-cogs text-4xl text-blue-900"></i>
            <h4 class="text-lg font-semibold text-blue-900 mt-2">Testing & Implementation</h4>
            <p class="text-gray-600 text-sm mt-2">
                Conducting quality assurance, debugging, and deploying the system to ensure functionality, security, and performance.
            </p>
        </div>

        <!-- Maintenance & Support -->
        <div class="text-center p-6 bg-gray-100 rounded-lg shadow-md">
            <i class="fas fa-tools text-4xl text-blue-900"></i>
            <h4 class="text-lg font-semibold text-blue-900 mt-2">Maintenance & Support</h4>
            <p class="text-gray-600 text-sm mt-2">
                Providing updates, troubleshooting, and optimizing the system for long-term efficiency and reliability.
            </p>
        </div>
    </div>
</div>
