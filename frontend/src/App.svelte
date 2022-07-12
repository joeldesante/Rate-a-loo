<script>
import Router, { pop, link } from 'svelte-spa-router';
import Index from './pages/Index.svelte';
import BathroomLocation from './pages/BathroomLocation.svelte';
import ReviewBathroom from './pages/ReviewBathroom.svelte';
import AddBathroom from './pages/AddBathroom.svelte';
import FindBathroom from './pages/FindBathroom.svelte';
</script>

<!--<div>
  <h1 id="title" class="text-4xl font-serif font-black mb-3">
    <a href="/" use:link>Rate-a-loo</a>
  </h1>
  <a on:click={() => { pop() }} class="m-1 p-2 rounded bg-gray-300 mt-4 cursor-pointer">Back</a>
  <a href="/add" class="m-1 p-2 rounded bg-gray-300 mt-4" use:link>Add a bathroom</a>  
</div>
<hr />
-->

<Router routes={{
  '/': Index,
	'/find': FindBathroom,
  '/locations/:location': BathroomLocation,
  '/locations/:location/review': ReviewBathroom,
  '/add': AddBathroom
}} />

<style></style>
