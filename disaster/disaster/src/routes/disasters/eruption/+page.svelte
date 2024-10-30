<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import volcano from '$lib/volcano.jpg'
</script>

<Header headingTitle="Volcanic Eruptions" />

<p>Volcanic Eruptions</p>

<div class="imageContainor">
    <Image pic={volcano} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
</div>

<style>

</style>