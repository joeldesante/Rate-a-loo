<script>

    export let group;
    export let name;
</script>
<label class="block cursor-pointer text-center">
    <input class="peer" type="checkbox" name={ group } id={ name } hidden>
    <p 
        class="
            rounded-full border border-white 
            text-white text-xs whitespace-nowrap
            p-1 pl-1 pr-1
            peer-checked:bg-white peer-checked:text-orange-500">{ name }</p>
</label>