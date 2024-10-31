<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import Card from '$lib/Card.svelte'
    import fire from '$lib/fire.jpg';
</script>

<Header headingTitle="Fires" />

<p>Fires</p>

<div>
    <div class="block">
        <Image pic={fire} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
    </div>

    <div class="block">
        <Card
        where ={"/disasters/fire/fireInfo"}
        title ={"What are Wildfires ?"}
        date = 19/10/2024
        info = "Wildfires are unplanned and uncontrolled fires that typically occur in wilderness areas..."
        ></Card>
    </div>
</div>



<style>
    .block {
        display: inline-block;
    }
</style>