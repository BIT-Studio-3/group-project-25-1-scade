<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import earthquake from '$lib/earthquake.jpg';
</script>

<Header headingTitle="Earthquakes" />

<p>Earthquakes</p>

<div class="imageContainor">
    <Image pic={earthquake} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
</div>

<Footer year={2024} />

<style>

</style>