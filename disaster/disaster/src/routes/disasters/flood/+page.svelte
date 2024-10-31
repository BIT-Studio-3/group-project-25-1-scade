<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import flood from '$lib/flood.jpg'
    import Card from '$lib/Card.svelte'
</script>

<Header headingTitle="Floods" />

<p>Flooding</p>

<div class="imageContainor">
    <Image pic={flood} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
</div>

<Card
   where ={"/disasters/flood/floodInfo"}
   title ={"Floods and your Safety"}
   date = 19/10/2024
   info = "";
></Card>



<style>

</style>