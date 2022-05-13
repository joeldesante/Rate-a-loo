<script>
import NearbyBathrooms from "../lib/NearbyBathrooms.svelte";

</script>
<main>
    <NearbyBathrooms />
    <div class="h-12"></div>

    <div class="fixed bottom-5 w-full right-0 p-8 pb-4">
        <input 
        type="search"
        placeholder="Search for a place to poop..."
        class="w-full shadow-lg rounded border p-2">
    </div>
</main>