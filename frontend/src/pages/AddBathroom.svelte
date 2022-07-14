<script>
import settings from "../../settings.js";
import { push, link } from 'svelte-spa-router'

async function handleSubmit(e) {
    const data = new FormData(e.target)

    let postBody = {
        name: data.get("name"),
        address: data.get("address")
    }

    let result = await fetch(`${settings.host}/locations`, { 
        method: "POST", 
        body: JSON.stringify(postBody),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
    })

    if(result.ok) {
        console.log("Submitted");
    }

    push("/");

}
</script>


<div class="flex justify-between items-center mt-6 mb-2 p-4 pt-0 pb-0">
    <p class="font-bold text-2xl">Add a New Bathroom</p>
    <a href="/" use:link class="p-2 pl-4 pr-4 bg-blue-500 text-white font-medium rounded">Back</a>
</div>

<div class="p-4">
    <form on:submit|preventDefault={handleSubmit} method="POST" action="#" class="flex flex-col">
        <input class="block p-2 pl-4 pr-4 rounded border mb-2" name="name" type="text" placeholder="Name" required />
        <input class="block p-2 pl-4 pr-4 rounded border mb-2" name="address" type="text" placeholder="Address" required /> 
        <button type="submit" class="block bg-blue-500 text-white rounded p-2 pl-4 pr-4">Add</button>
    </form>
</div>
