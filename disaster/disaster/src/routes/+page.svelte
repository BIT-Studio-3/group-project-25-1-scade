<script>
    import Header from '$lib/Header.svelte';
    import Card from '$lib/Card.svelte';
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/Weather.jpg';
    let currentTime = new Date();

</script>


<Header headingTitle="Current Events" />

<p>{currentTime}</p>
<div class="card-container">
    <Card where="/disasters/earthquake" title="Earthquakes" date="18/10/24" info="More about the Earthquakes" /> 
    <Card where="/disasters/fire" title="Fires" date="18/10/24" info="More about the fires" />
    <Card where="/disasters/eruption" title="Eruptions" date="18/10/24" info="More about the eruptions" />
    <Card where="/disasters/flood" title="Floods" date="18/10/24" info="More about the floods" />
</div>


<h1>Recent Events</h1>

<div class="imageContainor">
    <Image pic={homepic} picname={"cover"} picwidth={"800px"} picheight={"400px"}/> 
</div>

<style>
    .card-container{
    display: flex;
    flex-wrap: wrap; /* Allows wrapping if there are too many cards */    
    }

    .card-container .card {
    flex: 1; /* Adjusts the cards to share available space */
    margin: 10px; /* Adds space between cards */
    min-width: 200px; /* Minimum width for cards */
    }
    .imageContainor {
        display: flex;
        justify-content: center;
    }
</style>