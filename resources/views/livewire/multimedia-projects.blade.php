<div>
    <h3 class="text-2xl font-bold text-blue-900 mb-4">Multimedia Projects</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @foreach ($projects as $project)
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h4 class="text-xl font-semibold text-blue-900">{{ $project['name'] }}</h4>
                <p class="text-gray-600 mt-2">{{ $project['description'] }}</p>
            </div>
        @endforeach
    </div>
</div>
