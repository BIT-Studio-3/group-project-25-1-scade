<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import flood from '$lib/flood.jpg';

    const apiKey = "gvzqb8DKRo8iVxK38YHq5Psak0iT09Jq"; // Your API key
    const latitude = '-30.876'; // Example latitude
    const longitude = '160.123'; // Example longitude
    const numberOfDays = 7; // Optional
    const startDate = new Date().toISOString().split('T')[0]; // Today's date in 'yyyy-mm-dd' format
    const datum = 'LAT'; // Optional
    const interval = 60; // Optional

    let tideData = null; // Declare tideData as null initially
    let loading = true; // Loading state

    async function getData() {
        const response = await fetch(`https://api.niwa.co.nz/tides/data?lat=${latitude}&long=${longitude}&numberOfDays=${numberOfDays}&startDate=${startDate}&datum=${datum}&interval=${interval}`, 
        {
            headers: {
                'x-apikey': apiKey
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error: ${response.status} - ${errorText}`);
        }

        tideData = await response.json();
        console.log(tideData);
    }

    // Call getData when the component mounts
    getData();
</script>

<Header headingTitle="Floods" />

<p>Flooding</p>

<div class="imageContainer">
    <Image pic={flood} picname={"cover"} picwidth={"600px"} picheight={"400px"} />
</div>




<style>
    /* Add your styles here */
</style>
