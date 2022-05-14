<script>
    import Bathroom from "../lib/Bathroom.svelte";
    import { onMount } from "svelte";
    //import { params } from 'svelte-spa-router'

    export let params = {};

    let bathroom = {};

    onMount(async () => {
        let request = await fetch(`http://0.0.0.0:3030/api/locations/${params.location}`);
        if(request.ok) {
            bathroom = await request.json();
        }
    })
</script>

<main>
    <h1>Bathroom Location</h1>
    <Bathroom 
        locationId={bathroom.rowid}
        locationName={bathroom.name} 
        score=80
        address={bathroom.address}
    />
</main>