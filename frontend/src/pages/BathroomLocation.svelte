<script>
    import Bathroom from "../lib/Bathroom.svelte";
    import { onMount } from "svelte";
    import settings from "../../settings.js";
    import { link } from "svelte-spa-router";

    export let params = {};

    let bathroom = {};

    onMount(async () => {
        let request = await fetch(`${settings.host}/api/locations/${params.location}`);
        if(request.ok) {
            bathroom = await request.json();
        }
    })
</script>

<main class="pt-4">
    <Bathroom 
        locationId={bathroom.rowid}
        locationName={bathroom.name} 
        score={bathroom.score}
        address={bathroom.address}
    />

    <section class="mt-2">
        <h4 class="font-bold">Address</h4>
        <p>{ bathroom.address }</p>
    </section>

    <a href="/locations/{params.location}/review" use:link class="underline mt-4 text-lg text-blue-500">Leave a review</a>
</main>