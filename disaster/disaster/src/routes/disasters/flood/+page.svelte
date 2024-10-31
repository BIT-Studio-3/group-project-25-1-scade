<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import flood from '$lib/flood.jpg'
    import Card from '$lib/Card.svelte'
</script>

<Header headingTitle="Floods" />



<div>
<div class="float">
<Card
   where ={"/disasters/flood/floodInfo"}
   title ={"Floods and your Safety"}
   date = 19/10/2024
   info = "Learn what to inform the public on how to prepare for a flood";
></Card>
<Card
        where ={"/"}
        title ={"Event"}
        date = 19/10/2024
        info = "Recent flood event in 'Location' at 'time', placeholder for now" ></Card>
    </div>
    <div class="imageContainer">
        <Image pic={flood} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
    </div>
</div>


<style>
    .imageContainer{
        float: left;
    }
    .float {
        float: left;
    }

</style>