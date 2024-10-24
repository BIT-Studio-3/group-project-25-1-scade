<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import Image from '$lib/Image.svelte';
    import volcano from '$lib/volcano.jpg'
</script>

<Header headingTitle="Volcanic Eruptions" />

<p>Volcanic Eruptions</p>

<div class="imageContainor">
    <Image pic={volcano} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
</div>

<Footer year={2024} />

<style>

</style>