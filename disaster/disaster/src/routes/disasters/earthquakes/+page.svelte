<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/Weather.jpg';
    let userInput = '';

async function getData(number)
{
    console.log(number);
    const response = await fetch(`http://api.geonet.org.nz/quake?MMI=-1`);
   
    if (response.ok)
    {
        const data = await response.json();
        console.log(data.features[number]);
        console.log(data.features[number].properties.mmi);

        
    }
    else
    {
        console.log("Error Fetching Data")
    }
}

function search()
{
    getData(userInput);
}


</script>

<Header headingTitle="Earthquakes" />

<input
    id="textbox"
    type="text"
    bind:value={userInput}
    placeholder="Please enter an Number"
/>
<br>
<button class="searchbutton" on:click={search}>Click to Search</button>

<Footer year={2024} />

<style>

</style>