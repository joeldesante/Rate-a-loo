<script>
import SearchListing from "../lib/findBathroom/SearchListing.svelte";
import SearchHeader from "../lib/findBathroom/SearchHeader.svelte";

let resultCount = 232;

setInterval(() => {
    resultCount++;
}, 1000);

</script>

<main>
    <SearchHeader />
    <p class="text-sm font-medium text-gray-400 ml-4 mt-2">Found <span class="text-orange-600">{ resultCount }</span> results.</p>
    <section class="p-4 grid gap-2">
        <SearchListing />
        <SearchListing />
        <SearchListing />
        <SearchListing />
    </section>
</main>