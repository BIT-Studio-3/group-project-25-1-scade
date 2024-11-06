<script>
  import Header from "$lib/Header.svelte";
  import Image from "$lib/Image.svelte";
  import earthquake from "$lib/earthquake.jpg";
  import homepic from "$lib/Weather.jpg";
  import Card from "$lib/Card.svelte";

  let userInput = "";
  let error = "";

  let quakeTime = "";
  let location = "";
  let magnitude = "";
  let depth = "";
  let mmi = "";

  async function getData(number) {
    const response = await fetch(`http://api.geonet.org.nz/quake?MMI=-1`);

    if (response.ok) {
      const data = await response.json();
      const feature = data.features[number];

      if (feature === undefined) {
        error =
          "There was an error fetching your data, maybe the number input is invalid?";
        console.log("Error Fetching Data");
        quakeTime = "";
        location = "";
        mmi = "";
        magnitude = "";
      } else {
        error = "";
        quakeTime = feature.properties.time;
        location = feature.properties.locality;
        depth = feature.properties.depth;
        magnitude = feature.properties.magnitude;
        mmi = feature.properties.mmi;
      }
    }
  }

  function search() {
    getData(userInput);
  }
</script>
<Header headingTitle="Earthquakes" />
<section>
  <div class="imageContainer">
    <Image
    pic={earthquake}
    picname={"cover"}
    picwidth={"600px"}
    picheight={"400px"}
    />
  </div>
  
  <aside>
    <h3>Search for former Earthquakes:</h3>
    <h4>
      Please Keep in mind that these earthquakes are only in the past 2-3 days. <br
      />The lower the number input the more recent the quake was. For example, 1
      is the most recent 2, is the 2nd most recent etc, etc.
    </h4>
    <input
    id="textbox"
    type="number"
    bind:value={userInput}
    placeholder="Please enter a Number"
    min="0"
    />
    <br />
    <button class="searchbutton" on:click={search}>Click to Search</button>
    <div class="earthquakeSpecifics">
      <p>
        {#if quakeTime && location && magnitude && mmi}
        {quakeTime}<br />
        <strong>Location:</strong>{location}* <br />
        Magnitude: {magnitude} <br />
        Depth: {depth} Kilometers <br />
        MMI: {mmi}
        {/if}
      </p>
      <p class="error">{error}</p>
    </div>
  </aside>
  
  
</section>
  <Card
  where={"/disasters/earthquake/quakeInfo"}
  title={"What is an earthquake ?"}
  date="19/10/2024"
  info="An earthquake is a sudden and intense shaking of the ground caused by the movement..."
  ></Card>
  
<style>
  @media only screen and (max-width:866px){
 section{
  flex-direction: column;
 }
  }
  section{
    display:flex;
    
  }
  #textbox {
    padding: 10px;
  }

  aside{
    padding: 0.5em;
  }
  .earthquakeSpecifics {
    transition: 0.3s;
    width: fit-content;
    padding: 1em;
    margin: 2em;
  }

  .earthquakeSpecifics:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  p {
    padding-left: 0.7em;
  }
  #textbox {
    padding: 10px;
  }

  .searchbutton {
    margin-top: 10px;
  }

  .error {
    color: red;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    -webkit-appearance: none;
    appearance: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
