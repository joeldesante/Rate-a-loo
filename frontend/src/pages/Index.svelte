<script>
import TogglePill from "../lib/TogglePill.svelte";
import FilterTile from "../lib/index/FilterTile.svelte";
import SearchBar from "../lib/SearchBar.svelte";

</script>
<main>
<div class="bg-orange-600 p-4">
    <SearchBar />
    <div class="grid grid-flow-col gap-2 overflow-x-scroll items-center mt-4">
        <TogglePill group="searchFilter" name="Top Rated" />
        <TogglePill group="searchFilter" name="Free Access" />
        <TogglePill group="searchFilter" name="Baby Friendly" />
    </div>
</div>
<div class="m-4 pb-4 grid grid-flow-col gap-4 overflow-x-scroll snap-x snap-mandatory rounded-sm">
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
</div>
</main>