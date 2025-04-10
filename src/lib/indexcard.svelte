<script>
  import { onMount } from 'svelte';

  // Variables for earthquake data
  export let quakeTime = "";
  export let location = "";
  export let magnitude = "";
  export let depth = "";
  export let mmi = "";
  export let error = "";

  async function getData() {
      const response = await fetch(`http://api.geonet.org.nz/quake?MMI=-1`);

      if (response.ok) {
        const data = await response.json();
        const feature = data.features[0]; // First earthquake entry
        if (feature) {
          quakeTime = feature.properties.time;
          location = feature.properties.locality;
          magnitude = feature.properties.magnitude;
          depth = feature.properties.depth;
          mmi = feature.properties.mmi;
        } else {
          error = "No earthquake data available.";
        }
      } else {
        error = "Failed to fetch earthquake data.";
      }
  }

  // Call the function when the component mounts
  onMount(getData);
</script>

<!-- HTML for the earthquake card section -->
<div class="indexCardEarthquake">
  {#if error}
    <p>{error}</p>
  {:else}
    <h2><b>Latest Earthquake</b></h2>
    <p><strong>Location:</strong> {location}</p>
    <p><strong>Magnitude:</strong> {magnitude}</p>
    <p><strong>Depth:</strong> {depth} km</p>
    <p><strong>MMI:</strong> {mmi}</p>
    <p><strong>Time:</strong> {quakeTime}</p>
  {/if}
</div>


<style>
  
</style>
