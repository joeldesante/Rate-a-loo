<script>
    import { link, push } from "svelte-spa-router"; 
    import { nanoid } from "nanoid";
    import settings from "../../settings.js";

    export let params = {};

    async function handleSubmit(e) {

        const data = new FormData(e.target)
        const file = data.get("image");
        
        // POST the image blob...
        let resourceURI = null;
        if (file.size > 0) {
            const imageResponse = await fetch(
                `${settings.host}/blobs`,
                {
                    method: "POST",
                    body: file
                }
            );
            const data = await imageResponse.json();
            resourceURI = data.resourceURI;
        }

        const reviewResponse = await fetch(
            `${settings.host}/locations/${params.location}/reviews`,
            {
                method: "POST",
                body: JSON.stringify({
                    score: data.get("score"),
                    details: data.get("details"),
                    image: resourceURI
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );



        if(reviewResponse.ok) {
            console.log("Submitted");
            push(`/locations/${params.location}/`);
        }
    }
</script>


<div class="flex justify-between items-center mt-6 mb-2 p-4 pt-0 pb-0">
    <p class="font-bold text-2xl">Leave a Review</p>
    <a href="/locations/{params.location}/" use:link class="p-2 pl-4 pr-4 bg-blue-500 text-white font-medium rounded">Back</a>
</div>
<div class="p-4">
    <form on:submit|preventDefault={handleSubmit}>
        <input class="block p-2 pl-4 pr-4 rounded border mb-2 w-full" type="file" name="image" id="image" accept="image/png, image/jpeg, image/webp, image/gif">
        <input class="block p-2 pl-4 pr-4 rounded border mb-2 w-full" name="score" type="number" placeholder="Score (out of 100)" max="100" min="0" required />
        <textarea class="block p-2 pl-4 pr-4 rounded border mb-2 w-full" name="details" placeholder="Thoughts?"></textarea>
        <button type="submit" class="block bg-blue-500 text-white rounded p-2 pl-4 pr-4">Submit Review</button>
    </form>
</div>