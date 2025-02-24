<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import volcano from '$lib/volcano.jpg'
    import Card from '$lib/Card.svelte';
    let userInput;
    let activity = "";
    let acc = "";
    let name = "";
    let level = "";
    let location = "";

    let error = "";

    async function getData(number) {
        const response = await fetch(`https://api.geonet.org.nz/volcano/val`);

        if (response.ok) {
            const data = await response.json();
            console.log(data.features[number]);

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

    function search() {
        getData(userInput);
    }
</script>

<Header headingTitle="Volcanic Eruptions" />
<section class="main-content">
    <div>
        <div class="float">
            <Card
                where="/disasters/eruption/eruptionInfo"
                title="What are Volcanoes?"
                date="19/10/2024"
                info="Volcanoes are..."
            />
            <Card
                where="/"
                title="Event"
                date="19/10/2024"
                info="Recent fire event in 'Location' at 'time', placeholder for now"
            />
        </div>
    </div>

    <div class="imageContainor">
        <Image pic={volcano} picname="cover" picwidth="600px" picheight="400px" />
        <br />
    </div>
</section>

<section class="input-section">
    <h4>
        Please Keep in mind that this data is recent, only in the past 2-3 days.
        The lower the number input the more recent the event was. <br>For example,
        1 is the most recent. 2 is the 2nd most recent etc, etc.
    </h4>
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
    .imageContainor {
        width: 600px;
        height: 400px;
    }

    .searchbutton {
        padding: 10px 20px;
        margin-top: 10px;
        cursor: pointer;
    }

    h4 {
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 1.5;
    }

    input[type="number"] {
        padding: 8px;
        margin: 10px 0;
        width: 200px;
        text-align: center;
    }


</style>
