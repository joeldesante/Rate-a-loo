<script>
    import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
    import storage from "../firebase.js";
    import { nanoid } from "nanoid";
    import settings from "../../settings.js";

    export let params = {};

    async function handleSubmit(e) {

        const data = new FormData(e.target)
        const file = data.get("image");

        // Create a ref
        const storageRef = ref(storage, nanoid());

        // Upload Image
        const result = await uploadBytes(storageRef, file);
        const imageLocation = await getDownloadURL(storageRef);

        console.log(imageLocation)
        console.log('Uploaded a blob or file!', result);

        // -- Now to publish the review
        let postBody = {
            rating: data.get("score"),
            details: data.get("details"),
            image: imageLocation,
            location: params.location
        }

        console.log(postBody)

        let postResult = await fetch(`${settings.host}/api/ratings`, { 
            method: "POST", 
            body: JSON.stringify(postBody),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
        })

        if(postResult.ok) {
            console.log("Submitted");
            push("/");
        }

    }
</script>

<main>
    <h2 class="font-serif text-2xl font-bold mb-4 mt-4">Leave a review</h2>
    <form on:submit|preventDefault={handleSubmit}>
        <input class="block p-3 rounded border mb-2 w-full" type="file" name="image" id="image" accept="image/png, image/jpeg, image/webp, image/gif">
        <input class="block p-3 rounded border mb-2 w-full" name="score" type="number" placeholder="Score (out of 100)" max="100" min="0" required />
        <textarea class="block p-3 rounded border mb-2 w-full" name="details" placeholder="Thoughts?"></textarea>
        <button type="submit" class="block bg-blue-600 text-white rounded p-3">Submit Review</button>
    </form>
</main>