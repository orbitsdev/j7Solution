<div class=" mx-auto my-16 ">
    <h2 class="text-4xl font-bold text-blue-900 text-center mb-6">Our Projects</h2>

    <!-- Swiper Container with Adjusted Height -->
    <div class="swiper mySwiper  h-[700px] mx-auto"> <!-- Set fixed height -->
        <div class="swiper-wrapper">
            <!-- Project 1 -->
            <div class="swiper-slide relative">
                <img src="https://picsum.photos/1200/600?random=1"
                    class="w-full h-full object-cover rounded-lg shadow-lg"
                    alt="Project 1">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h3 class="text-white text-lg font-bold">HOMI Hotel Management System</h3>
                </div>
            </div>
            <!-- Project 2 -->
            <div class="swiper-slide relative">
                <img src="https://picsum.photos/1200/600?random=2"
                    class="w-full h-full object-cover rounded-lg shadow-lg"
                    alt="Project 2">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h3 class="text-white text-lg font-bold">SKSU Search Archiving System</h3>
                </div>
            </div>
            <!-- Project 3 -->
            <div class="swiper-slide relative">
                <img src="https://picsum.photos/1200/600?random=3"
                    class="w-full h-full object-cover rounded-lg shadow-lg"
                    alt="Project 3">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h3 class="text-white text-lg font-bold">Avante App Online Market System</h3>
                </div>
            </div>
            <!-- Project 4 -->
            <div class="swiper-slide relative">
                <img src="https://picsum.photos/1200/600?random=4"
                    class="w-full h-full object-cover rounded-lg shadow-lg"
                    alt="Project 4">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h3 class="text-white text-lg font-bold">Goat Bin Animal Tagging System</h3>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        {{-- <div class="swiper-pagination"></div> --}}
    </div>

    <!-- View All Projects Button -->
    <div class="text-center mt-6">
        <button class="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-700">View All Projects</button>
    </div>
</div>
