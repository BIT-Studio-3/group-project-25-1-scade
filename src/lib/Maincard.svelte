<script>
    import {onMount} from 'svelte';
    export let where  ;
    export let title = Empty;
    export let date = 0/0/0;
    export let info = Empty;
    let currentTime = new Date();
  let currentYear = currentTime.getFullYear();
  let day = String(currentTime.getDate()).padStart(2, '0');
  let month = String(currentTime.getMonth() + 1).padStart(2, '0'); 
  let year = currentTime.getFullYear(); 
  let formattedDate = `${day}/${month}/${year}`;
  
  // Earthquake data variables
  let quakeTime = "";
  let location = "";
  let magnitude = "";
  let depth = "";
  let mmi = "";
  let error = "";

  async function getData() {
      const response = await fetch(`http://api.geonet.org.nz/quake?MMI=-1`);

      if (response.ok) {
        const data = await response.json();
        const feature = data.features[0]; // First earthquake entry
        console.log (data);
        if (feature) {
          quakeTime = feature.properties.time;
          location = feature.properties.locality;
          magnitude = feature.properties.magnitude;
          depth = feature.properties.depth;
          mmi = feature.properties.mmi;
          console.log("Earthquake Time: ", quakeTime);
        console.log("Location: ", location);
        console.log("Magnitude: ", magnitude);
        console.log("Depth: ", depth);
        console.log("MMI: ", mmi);
        } else {
          error = "No earthquake data available.";
        }
      } else {
        error = "Failed to fetch earthquake data.";
      }
    }

  // Call the function when the component mounts

    getData();

</script>

<div class="card" >
    <h2><b><a href={where}>{title}</a></b></h2>
    <p>{date}</p>
    <p><strong>Location:</strong> {location}</p>
    <p><strong>Magnitude:</strong> {magnitude}</p>
    <p><strong>Depth:</strong> {depth} km</p>
    <p><strong>MMI:</strong> {mmi}</p>
    <p><strong>Time:</strong> {quakeTime}</p>
</div>



<style>
    h2 {
        background-color: rgb(135, 209, 238);
        padding: 1em;
    }
    p {
        padding-left: 1em;
    }
    .card {
        box-shadow: 0 7px 5px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 3em;
        margin: 1em;
        width: 300px;
        border-color: black;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>