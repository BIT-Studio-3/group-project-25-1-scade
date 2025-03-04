<script>
  import { onMount } from 'svelte';
  import Header from '$lib/Header.svelte';
  import Card from '$lib/Card.svelte';
  import Maincard from '$lib/Maincard.svelte';
  import Image from '$lib/Image.svelte';
  import Footer from '$lib/Footer.svelte';
  import homepic from '$lib/Weather.jpg';
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
  <!--current warning-->
  <section class="card-section">
    <div class="index-row1">
      <div class="index-row1-left-side">
        <Card title="most important" class="index-card1" id="index-card1"/>
      </div>
      <div class="index-row1-right-side">
        <Card title="other important" id="indexCard2"/>
        <Card title ="risks" id="indexCard3"/>
      </div>
    </div>
    <div class="index-row2">
      <Card title ="user add" class="index-card" id="indexCard4"/>
      <Card title ="user add" class="index-card" id="indexCard5"/>
    </div>
    <div class="index-row3">
      <Card title ="map" class="indexCard6" id="indexCard6"/>
    </div>
  </section>

  <!-- <div class="top-of-body">
    <h2><Header headingTitle="Current Events" /></h2>
    <p>{currentTime}</p>
    <div class="current-events">
      <Maincard class="earthquake-card" where="/disasters/earthquake" title="Earthquakes" date={formattedDate} info="More about the Earthquakes" />
      <Maincard where="/disasters/fire" title="Fires" date={formattedDate} info="More about the fires" />
      <Maincard where="/disasters/eruption" title="Eruptions" date={formattedDate} info="More about the eruptions" />
      <Maincard where="/disasters/flood" title="Floods" date={formattedDate} info="More about the floods" />
    </div>
  </div>

  <p></p>

  <div class="bottom-of-body">
    <h1>&numsp;Recent Events</h1>
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

    
  </div> -->
</body>

<style>

  .index-row1{
    display: flex;
    flex-direction: row;

  }
  .index-row2{
    display: flex;
    flex-direction: row;

  }
  .index-row3{
    display: flex;
    flex-direction: row;
    width:100%
  }

  .index-row1-left-side{
    width:50%; 
    padding-right: 1em;
  }
  .index-card1{
    max-height: 100em;
  }
  .index-row1-right-side{
    width:50%; 
    flex-direction: column;

  }



  /* p {
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
  } */

</style>