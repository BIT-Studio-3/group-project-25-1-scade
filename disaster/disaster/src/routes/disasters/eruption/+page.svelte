<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import volcano from '$lib/volcano.jpg'
    import Card from '$lib/Card.svelte';

    let searchInput = "";
    let errorMessage = "No volcanoes found matching your search."
    let filteredVolcanoes = [];


    async function getData(e){
        const response = await fetch(`http://api.geonet.org.nz/volcano/val`);

        if (response.ok) {
          const fetched = await response.json();
          console.log(fetched.features);
          volcano = fetched;
      } 
      else {
         
      }
    }
</script>

<Header headingTitle="Volcanic Eruptions" />

<div>
    <div class="float">
        <Card
        where ={"/disasters/eruption/eruptionInfo"}
        title ={"What are Volcanoes?"}
        date = 19/10/2024
        info = "Volcanoes are "
        ></Card>
        <Card
        where ={"/"}
        title ={"Event"}
        date = 19/10/2024
        info = "Recent fire event in 'Location' at 'time', placeholder for now"
        ></Card>
    </div>
</div>



<div class="imageContainor">
    <Image pic={volcano} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
</div>

<style>


 
</style>