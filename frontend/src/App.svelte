<script>
import Router, { link } from 'svelte-spa-router';
import Index from './pages/Index.svelte';
import BathroomLocation from './pages/BathroomLocation.svelte';
import ReviewBathroom from './pages/ReviewBathroom.svelte';
</script>


<h1 id="title" class="text-4xl font-serif font-black mb-3">
  <a href="/" use:link>Rate-a-loo</a>
</h1>
<hr />

<Router routes={{
	'/': Index,
  '/locations/:location': BathroomLocation,
  '/locations/:location/review': ReviewBathroom
}} />

<div class="fixed bottom-5 w-full right-0 p-8 pb-4">
  <input 
  type="search"
  placeholder="Search for a place to poop..."
  class="w-full shadow-lg rounded border p-2">
</div>

<style></style>
