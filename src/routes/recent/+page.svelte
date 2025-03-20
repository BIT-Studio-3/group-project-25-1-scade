<script>
  import { onMount } from 'svelte';
  import Header from '$lib/Header.svelte';
  import Card from '$lib/Card.svelte';
  import Maincard from '$lib/Maincard.svelte';
  import Image from '$lib/Image.svelte';
  import Footer from '$lib/Footer.svelte';
  import earthquakeCard from '$lib/Maincard.svelte';

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

<body>
  <div class="top-of-body">
    <h2><Header headingTitle="Recent Events" /></h2>
    <p>{currentTime}</p>
    <div class="recent-events">
      <Maincard class="earthquakeCard" where="/disasters/earthquake" title="Earthquakes" date="18/10/24" info="More about the Earthquakes"location={location}>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Magnitude:</strong> {magnitude}</p>
        <p><strong>Depth:</strong> {depth} km</p>
        <p><strong>MMI:</strong> {mmi}</p>
        <p><strong>Time:</strong> {quakeTime}</p>  
      </Maincard> 
      <Maincard where="/disasters/fire" title="Fires" date="18/10/24" info="More about the fires" />
      <Maincard where="/disasters/eruption" title="Eruptions" date="18/10/24" info="More about the eruptions" />
      <Maincard where="/disasters/flood" title="Floods" date="18/10/24" info="More about the floods">
        <p>testtestest</p>
      </Maincard>
    </div>

    
  </div>
</body>

<style>
  p {
    padding: 1.2%;
  }
  h2 {
    padding: 0.9%;
  }
  h1 {
    padding: 0.2%;
  }
  .top-of-body {
    border-style: solid;
    border-color: grey;
  }
  .bottom-of-body {
    border-style: solid;
    border-color: grey;
  }
  .current-events, .recent-events {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    padding: 10px;
  }
  .earthquake-card {
    width: 300px;
  }
  .quake-info {
    margin-top: 20px;
  }
  .imageContainor {
    display: flex;
    justify-content: right;
    padding: 2%;
  }
</style>