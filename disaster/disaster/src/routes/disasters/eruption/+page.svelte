<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import volcano from '$lib/volcano.jpg'

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

<p>Volcanic Eruptions</p>

<div class="imageContainor">
    <Image pic={volcano} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
</div>

<style>


 
</style>