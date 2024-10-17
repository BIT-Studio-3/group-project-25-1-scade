<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte'
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/Weather.jpg';
    
</script>


<Header headingTitle="Home Page" />


<p>This is the home page of our emergency weather alert application.</p>

<div class="imageContainor">
    <Image pic={homepic} picname={"cover"} picwidth={"800px"} picheight={"400px"}/>
</div>


<Footer year={2024} />

<style>
    .imageContainor {
        display: flex;
        justify-content: center;
    }
</style>