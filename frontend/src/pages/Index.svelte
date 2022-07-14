<script>
//import TogglePill from "../lib/TogglePill.svelte";
//import FilterTile from "../lib/index/FilterTile.svelte";
//import SearchBar from "../lib/SearchBar.svelte";
import settings from "../../settings.js";
import SearchListing from "../lib/findBathroom/SearchListing.svelte";
import { link } from "svelte-spa-router";
import { onMount } from "svelte";

let locations = [];
onMount(async () => {
    let request = await fetch(`${settings.host}/locations`);
    if(request.ok) {
        locations = await request.json();
    }
});

</script>
<main>
    <div class="flex justify-between items-center mt-6 mb-2 p-4 pt-0 pb-0">
        <p class="font-bold text-2xl">Rate-a-loo</p>
        <a href="/add" use:link class="p-2 pl-4 pr-4 bg-blue-500 text-white font-medium rounded">Add a Bathroom</a>
    </div>
<!--<div class="bg-orange-600 p-4">
    <SearchBar />
    <div class="grid grid-flow-col gap-2 overflow-x-scroll items-center mt-4">
        <TogglePill group="searchFilter" name="Top Rated" />
        <TogglePill group="searchFilter" name="Free Access" />
        <TogglePill group="searchFilter" name="Baby Friendly" />
        <TogglePill group="searchFilter" name="Unisex" />
    </div>
</div>-->
<!--<div class="m-4 pb-4 grid grid-flow-col gap-4 overflow-x-scroll snap-x snap-mandatory rounded-sm">
    <div class="snap-start">
        <FilterTile tag="Top Rated" />
    </div>
    <div class="snap-start">
        <FilterTile tag="Baby Friendly" />
    </div>
    <div class="snap-start">
        <FilterTile tag="Free Access" />
    </div>
    <div class="snap-start">
        <FilterTile tag="Unisex" />
    </div>
</div>-->
<section>
    <section class="p-4 grid gap-2">
        {#each locations as location}
            <a href="/locations/{ location.id }" use:link>
                <SearchListing id={location.id} name={location.name} address={location.address} score={location.score} />
            </a>
        {/each}
    </section>
</section>

</main>