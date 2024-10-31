<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import flood from '$lib/flood.jpg'

    const apiKey = "gvzqb8DKRo8iVxK38YHq5Psak0iT09Jq"

async function getData()
{
    const response = await fetch(`https://api.niwa.co.nz/tides/data`, 
        {
        headers: {
            'x-apikey': apiKey
        
        }});

    tideData = await response.json();


}


getData();


</script>

<Header headingTitle="Floods" />

<p>Flooding</p>

<div class="imageContainor">
    <Image pic={flood} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
</div>


<style>

</style>