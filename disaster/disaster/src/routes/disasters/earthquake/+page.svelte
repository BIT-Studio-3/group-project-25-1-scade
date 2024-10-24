<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import Image from '$lib/Image.svelte';
    import earthquake from '$lib/earthquake.jpg';
    let userInput = '';
    let error = '';


async function getData(number)
{
    console.log(number);
    const response = await fetch(`http://api.geonet.org.nz/quake?MMI=-1`);
   
   
    if (response.ok) {
        const data = await response.json();
        const feature = data.features[number];

        if (feature === undefined) {
            error = "There was an error fetching your data, maybe the number input is invalid?";
            console.log("Error Fetching Data");
        } else {
            const mmi = feature.properties.mmi;
        }
    }
}

function search()
{
    getData(userInput);
}


</script>

<Header headingTitle="Earthquakes" />

<p>Earthquakes</p>

<div class="imageContainor">
    <Image pic={earthquake} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
</div>


<Header headingTitle="Earthquakes" />


<h3>Search for former Earthquakes</h3>
<input
    id="textbox"
    type="number"
    bind:value={userInput}
    placeholder="Please enter a Number"
/>
<br>
<button class="searchbutton" on:click={search}>Click to Search</button>
<p class="error">{error}</p>

<Footer year={2024} />

<style>
    #textbox{
        padding:10px
    }
    
    .searchbutton{
        margin-top: 10px;
    }
    
    .error{
        color: red;
    }
</style>
    