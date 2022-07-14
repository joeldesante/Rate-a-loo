<script>
    import settings from "../../../settings.js";
    export let id;
    export let name;
    export let address;
    export let score;
</script>

<div class="flex rounded overflow-hidden shadow cursor-pointer bg-white">
    <div>
        <img class="h-20 w-20 bg-gray-200 rounded-sm object-cover text-center text-gray-600 font-sans" src="{ settings.host }/locations/{ id }/coverImage" alt="Bathroom" />
    </div>
    <div class="flex grow p-1 pl-2 pr-2 justify-between flex-col">
        <h4 class="font-medium">{ name }</h4>
        <p class="text-xs text-gray-400">{ address }</p>
        <p class="text-xs font-bold text-gray-400">
            {#if score != null}
                Score {score}%
            {:else}
                No Reviews Yet
            {/if}
        </p>
    </div>
    <div class="flex justify-between flex-col p-1 pr-4">
        <p class="text-sm"></p>
        <p class="text-sm font-medium"><!--5km--></p>
    </div>
</div>