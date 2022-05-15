<script>
import settings from '../../settings.js';

    import { onMount } from 'svelte';
    import { link } from 'svelte-spa-router';
    export let locationId;
    export let locationName;
    export let score = "?";
    export let address;

    let image = "#"

    onMount(async () => {
        const request = await fetch(`${settings.host}/api/locations/${locationId}/images`);
        const images = await request.json();
        console.log(images[0].image)
        image = images[0].image || "#";
    })
</script>

<div>
    <a href="/locations/{locationId}" use:link>
        <div class="bg-gray-200 rounded">
            <img src={ image } class="object-cover h-40 w-full rounded">
        </div>
    </a>
    <div class="flex flex-space mt-2 justify-center items-center">
        <div class="grow">
            <h3 class="font-bold font-serif text-xl">{ locationName }</h3>
            <p class="font-black text-sm text-blue-700">{ score }% THRONE-O-SCORE</p>
        </div>
        <div class="flex-none">
            <a 
                href={encodeURI(`maps:daddr=${locationName}, ${address}`)}
                class="font-black bg-blue-600 p-5 pt-3 pb-3 inline-block rounded text-white">
                Navigate
            </a>
        </div>
    </div>
</div>