<script>
import settings from "../../settings.js";
import { push } from 'svelte-spa-router'

async function handleSubmit(e) {
    const data = new FormData(e.target)
    console.log(data)

    let postBody = {
        name: data.get("name"),
        address: data.get("address"),
        lat: 0,
        long: 0
    }

    console.log(postBody)

    let result = await fetch(`${settings.host}/api/locations`, { 
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


<h2 class="font-serif text-2xl font-bold mb-4 mt-4">Add a new bathroom</h2>
<form on:submit|preventDefault={handleSubmit} method="POST" action="#" class="flex flex-col">
    <input class="block p-3 rounded border mb-2" name="name" type="text" placeholder="Name" required />
    <input class="block p-3 rounded border mb-2" name="address" type="text" placeholder="Address" required /> 
    <button type="submit" class="block bg-blue-600 text-white rounded p-3">Add</button>
</form>
