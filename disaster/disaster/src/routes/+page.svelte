<script>
    import Header from '$lib/Header.svelte';
    import Card from '$lib/Card.svelte';
    import Image from '$lib/Image.svelte';
    import Footer from '$lib/Footer.svelte'
    import homepic from '$lib/Weather.jpg';
    let currentTime = new Date();

</script>

<body>
    <div class="top-of-body">
        <h1><Header headingTitle="Current Events" /></h1>
        <p>{currentTime}</p>
        <div class="card-container">
            <Card where="/disasters/earthquake" title="Earthquakes" date={currentTime} info="More about the Earthquakes" /> 
            <Card where="/disasters/fire" title="Fires" date={currentTime} info="More about the fires" />
            <Card where="/disasters/eruption" title="Eruptions" date={currentTime} info="More about the eruptions" />
            <Card where="/disasters/flood" title="Floods" date={currentTime} info="More about the floods" />
        </div>
    </div>
    <p></p>
    <div class="bottom-of-body">
        <h1>Recent Events</h1>
        <div class="card-container">
            <Card where="/disasters/earthquake" title="Earthquakes" date="18/10/24" info="More about the Earthquakes" /> 
            <Card where="/disasters/fire" title="Fires" date="18/10/24" info="More about the fires" />
            <Card where="/disasters/eruption" title="Eruptions" date="18/10/24" info="More about the eruptions" />
            <Card where="/disasters/flood" title="Floods" date="18/10/24" info="More about the floods" />
        </div>
        <div class="imageContainor">
            <Image pic={homepic} picname={"cover"} picwidth={"800px"} picheight={"400px"}/> 
        </div>
    </div>
</body> 
<style>
    p{
        padding: 0.2%;
    }
    h1{
        padding: 0.2%;
    }
    .top-of-body{
        border-style: solid;
        border-color: grey;
    }

    .bottom-of-body{
        border-style: solid;
        border-color: grey;
    }

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
        justify-content: right;
        padding: 2%;
    }
</style>