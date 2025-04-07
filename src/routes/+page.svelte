<script>
  import { onMount } from 'svelte';
  import IndexCard from '$lib/indexcard.svelte'; // Import the IndexCard component
  let earthquakeData = {};  // This will hold the data from the child component
  
</script>

<body>
  
  <!-- <div class="warning"></div> to be added  -->
  <section class="card-section">
    <div class="index-card" id="indexCardEarthquake">
      <!-- Use the IndexCard component, bind data to the exported variables -->
      <IndexCard bind:quakeTime={earthquakeData.quakeTime}
                 bind:location={earthquakeData.location}
                 bind:magnitude={earthquakeData.magnitude}
                 bind:depth={earthquakeData.depth}
                 bind:mmi={earthquakeData.mmi}
                 bind:error={earthquakeData.error} />
                 <IndexCard bind:quakeTime={earthquakeData.quakeTime}
                 bind:location={earthquakeData.location}
                 bind:magnitude={earthquakeData.magnitude}
                 bind:depth={earthquakeData.depth}
                 bind:mmi={earthquakeData.mmi}
                 bind:error={earthquakeData.error} />
    </div>
    <div class="index-card" id="indexCard2">other important
      <IndexCard bind:quakeTime={earthquakeData.quakeTime}
                 bind:location={earthquakeData.location}
                 bind:magnitude={earthquakeData.magnitude}
                 bind:depth={earthquakeData.depth}
                 bind:mmi={earthquakeData.mmi}
                 bind:error={earthquakeData.error} />
    </div>
    <div class="index-card" id="indexCard3">Risks: None</div>
    <div class="index-card" id="indexCard4">user add +</div>
    <div class="index-card" id="indexCard5">user add +</div>
    <div class="index-card" id="indexCard6">map</div>

  </section>
  
</body>


<style>
 .card-section{
  display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0.75em;
 }
  .index-card{

  height: 15em;
  border-radius: 30px;
  background: #ececf3;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 1em;
        border-radius: 30px;


  }
  .index-card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  

  #indexCard4{grid-row-start: 3;}
  #indexCard5{grid-row-start: 3;}
  #indexCard6{grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-row-start: 4;}


 
</style>