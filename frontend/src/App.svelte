<script>
import Router, { link } from 'svelte-spa-router';
import Index from './pages/Index.svelte';
import BathroomLocation from './pages/BathroomLocation.svelte';
import ReviewBathroom from './pages/ReviewBathroom.svelte';
import AddBathroom from './pages/AddBathroom.svelte';
</script>


<div>
  <h1 id="title" class="text-4xl font-serif font-black mb-3">
    <a href="/" use:link>Rate-a-loo</a>
  </h1>
  <a href="/add" use:link>Add a bathroom</a>  
</div>
<hr />

<Router routes={{
	'/': Index,
  '/locations/:location': BathroomLocation,
  '/locations/:location/review': ReviewBathroom,
  '/add': AddBathroom
}} />

<style></style>
