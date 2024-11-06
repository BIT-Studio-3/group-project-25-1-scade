<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import volcano from '$lib/volcano.jpg'

    let userInput;
    let activity = "";
    let acc = "";
    let name = "";
    let level = "";
    let location = "";

    let error = "";

    async function getData(number)
{

    const response = await fetch(`https://api.geonet.org.nz/volcano/val`);
   
   
    if (response.ok) {
        const data = await response.json();
        console.log(data.features[number])


        const feature = data.features[number];



        if (feature === undefined) {
            error = "There was an error fetching your data, maybe the number input is invalid?";
            console.log("Error Fetching Data");
            activity = "";
            acc = "";
            name = "";
            level = "";

        } else {
            error = "";
            activity = feature.properties.activity;
            acc = feature.properties.acc;
            name = feature.properties.volcanoTitle;
            level = feature.properties.level;
            location = feature.geometry.coordinates;

            console.log("Activity:", activity);
            console.log("ACC:", acc);
            console.log("Name:", name);
            console.log("Level:", level);
            console.log("Location:", location);


        }
    }
}

function search()
{
    getData(userInput);
}


</script>

<Header headingTitle="Volcanic Eruptions" />

<p>Volcanic Eruptions</p>

<div class="imageContainor">
    <Image pic={volcano} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
</div>

<section>
    <input
    id="textbox"
    type="number"
    bind:value={userInput}
    placeholder="Please enter a Number"
    min="0"
/>

<button class="searchbutton" on:click={search}>Click to Search</button>

<div class="volcanospecifics">
    <p>
        {#if name && location && acc && activity}
            Name: {name}<br>
            Longitude: {location[0]}, Latitude: {location[1]} <br>
            Level: {level} <br>
            ACC: {acc}  <br>
            Activity: {activity}
        {/if}

    </p>            
</div>






</section>




<style>

</style>


<!--<script> 
    let userInput = '';
    let error = '';c

    let quakeTime = "";
    let location = "";
    let magnitude = "";
    let depth = "";
    let mmi = "";

async function getData(number)
{

    const response = await fetch(`http://api.geonet.org.nz/quake?MMI=-1`);
   
   
    if (response.ok) {
        const data = await response.json();
        const feature = data.features[number];

        if (feature === undefined) {
            error = "There was an error fetching your data, maybe the number input is invalid?";
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

function search()
{
    getData(userInput);
}


</script>

<Header headingTitle  = "Earthquakes"/>

<p>Earthquakes</p>

<div class="imageContainor">
    <Image pic={earthquake} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>
</div>

<section>
    <h3>Search for former Earthquakes:</h3>
    <h4>Please Keep in mind that these earthquakes are only in the past 2-3 days. <br>The lower the number input the more recent the quake was. For example, 1 is the most recent 2, is the 2nd most recent etc, etc.</h4>
    <input
    id="textbox"
    type="number"
    bind:value={userInput}
    placeholder="Please enter a Number"
    min="0"
    />
    <br>
    <button class="searchbutton" on:click={search}>Click to Search</button>
    <div class="earthquakeSpecifics">
        <p>
            {#if quakeTime && location && magnitude && mmi}
            Time: {quakeTime}<br>
            Location: {location}* <br>
            Magnitude: {magnitude} <br>
            Depth: {depth} Kilometers <br>
            MMI: {mmi}
            {/if}
        </p>            
    </div>
</section>
<p class="error">{error}</p>



<Card
   where ={"/disasters/earthquake/quakeInfo"}
   title ={"What is an earthquake ?"}
   date = 19/10/2024
   info = "An earthquake is a sudden and intense shaking of the ground caused by the movement..."
></Card>

<style>
#textbox{
    padding: 10px;
}

.searchbutton{
    margin-top: 10px;
}

.error{
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

-->