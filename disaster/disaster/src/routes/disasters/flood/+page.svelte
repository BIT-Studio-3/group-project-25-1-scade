<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import flood from '$lib/flood.jpg'
</script>

<Header headingTitle="Floods" />

<p>Flooding</p>

<div class="imageContainor">
    <Image pic={flood} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
</div>
<a href="/disasters/flood/floodInfo">Floods and your safety</a>


<style>

</style>