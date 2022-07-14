<script>
    import { onMount } from "svelte";
    import { link } from "svelte-spa-router";
    import settings from "../../settings.js";

    export let params = {};
    
    let loading = true;
    let error = null;
    let location = {};
    let reviews = [];
    onMount(async () => {
        let locationRequest = await fetch(`${settings.host}/locations/${params.location}`);
        let reviewsRequest = await fetch(`${settings.host}/locations/${params.location}/reviews`);
        
        if(locationRequest.ok === false) {
            error = "failed to load location data.";
            loading = false;
            return;
        }

        if(reviewsRequest.ok === false) {
            error = "failed to load reviews";
            loading = false;
            return;
        }

        location = await locationRequest.json();
        reviews = await reviewsRequest.json();
        loading = false;
    });
</script>

<div class="flex justify-between items-center mt-6 mb-2 p-4 pt-0 pb-0">
    <p class="font-bold text-2xl">Rate-a-loo</p>
    <a href="/" use:link class="p-2 pl-4 pr-4 bg-blue-500 text-white font-medium rounded">Back</a>
</div>

{#if loading === false}
    {#if error === null}
        <hr class="border mt-2 mb-4">
        <div class="p-4 pt-2">
            <img src="{ settings.host }/locations/{ params.location }/coverImage" class="w-full h-56 mb-4 object-cover bg-gray-200 rounded" />
            <p class="font-bold text-2xl">{ location.name }</p>
            <p class="font-bold text-md">
                {#if location.score !== null}
                    Average Score: <span class="text-blue-500 font-bold">{ location.score }%</span>
                {:else}
                    No Reviews Yet
                {/if}
            </p>
            <p class="text-sm text-gray-400 mb-1">{ location.address }</p>
            <div class="mt-2">
                <a 
                    href={encodeURI(`maps:daddr=${location.name}, ${location.address}`)}
                    class="font-black bg-blue-500 p-2 pl-4 pr-4 mr-1 inline-block rounded text-white">
                    Navigate
                </a>
                <a href="/locations/{params.location}/review" use:link class="p-2 pl-4 pr-4 bg-blue-500 text-white font-black inline-block rounded">Leave a Review</a>

            </div>
            
            <p class="text-2xl font-semibold mt-8 mb-4">Reviews</p>
            {#each reviews as review}
                {#if review.image !== null}
                    <img src="{settings.host}/blobs/{review.image}" alt="Reviewed bathroom" class="w-full h-56 mb-4 object-cover bg-gray-200 rounded">
                {/if}
                <p class="mt-2 font-medium">"{ review.details }"</p>
                <p class="font-bold">Score: <span class="text-blue-500 font-bold">{ review.score }%</span></p>
                <hr class="border m-2 mb-4" />
            {/each}
        </div>
    {:else}
        <p class="text-red-800">{ error }</p>
    {/if}
{:else}
    <p>Content is loading...</p>
{/if}