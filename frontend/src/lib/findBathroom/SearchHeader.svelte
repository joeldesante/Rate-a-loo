<script>
import { link } from "svelte-spa-router";
import SearchBar from "../SearchBar.svelte";

</script>
<div 
    class="bg-orange-600 p-4 flex items-center outline-0"
>
    <div class="grow">
        <SearchBar />
    </div>
    <a 
        href="/"
        class="text-white p-1 ml-2 font-medium"
        use:link
    >Exit</a>
</div>