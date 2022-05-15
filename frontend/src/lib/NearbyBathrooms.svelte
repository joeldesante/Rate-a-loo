<script>
    import { onMount } from 'svelte';
    import Bathroom from './Bathroom.svelte';
    import settings from '../../settings.js';

    let nearbyBathrooms = [];
    
    onMount(async () => {
        const response = await fetch(`${settings.host}/api/locations?lat=0&long=0`);
        nearbyBathrooms = await response.json();
        console.log(nearbyBathrooms)
    });
</script>

<section class="mt-3">
    <h2 class="font-serif font-bold text-xl mb-2">Nearby Bathrooms</h2>
    <ul>
        {#each nearbyBathrooms as nearbyBathroom }
            <li class="mb-4">
                <Bathroom 
                    locationId={nearbyBathroom.rowid}
                    locationName={nearbyBathroom.name} 
                    score={nearbyBathroom.score} 
                    address={nearbyBathroom.address}
                />
                <hr class="mt-3" />
            </li>
        {/each}
    </ul>
</section>