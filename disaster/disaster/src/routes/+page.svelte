<script>
    import Header from '$lib/Header.svelte';
    import Card from '$lib/Card.svelte';
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/Weather.jpg';
    
</script>


<Header headingTitle="Current Events" />
<Card where="/disasters/flood" title="Dunedin Floods" date="18/10/24" info="About the floods" />

<h1>Recent Events</h1>

<div class="imageContainor">
    <Image pic={homepic} picname={"cover"} picwidth={"800px"} picheight={"400px"}/>
</div>

<style>
    .imageContainor {
        display: flex;
        justify-content: center;
    }
</style>