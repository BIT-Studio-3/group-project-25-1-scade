<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import flood from '$lib/flood.jpg';

    const apiKey = "gvzqb8DKRo8iVxK38YHq5Psak0iT09Jq"; 
    let tideData = null; 
    let error = ''; 
    let userIndex = ''; // For user input
    let selectedTime = ''; // Variable to store selected time
    let selectedValue = ''; // Variable to store selected value

    async function getData() {
        error = ''; // Reset error message

        const response = await fetch(`https://api.niwa.co.nz/tides/data?lat=-45.8788&long=170.5028`, {
            headers: {
                'x-apikey': apiKey
            }
        });

        if (response.ok) {
            const data = await response.json();
            tideData = data.values; // Adjust based on actual response structure
        } else {
            error = "Failed to fetch tide data.";
            console.error("Error:", response.statusText);
        }
    }

    function fetchTideData() {
        if (tideData && userIndex !== '' && userIndex >= 0 && userIndex < tideData.length && userIndex != 0) {
            selectedTime = new Date(tideData[userIndex-1].time).toUTCString(); // Store time
            selectedValue = tideData[userIndex-1].value; // Store value
            error = ''; // Reset error
        } else if (userIndex !== '') {
            error = "Invalid index. Please enter a valid number.";
            selectedTime = '';
            selectedValue = ''; 
        }
    }

    // Call getData when the component mounts
    getData();
</script>

<Header headingTitle="Floods" />

<p>Flooding</p>

<div class="imageContainer">
    <Image pic={flood} picname={"cover"} picwidth={"600px"} picheight={"400px"} />
</div>

<h3>Search for a specific tide data index:</h3>
<input
    type="number"
    bind:value={userIndex}
    placeholder="Enter Tide Index Number"
/>
<br>
<button class="searchbutton" on:click={fetchTideData}>Get Tide Data</button>

{#if selectedTime && selectedValue}
    <p>Selected Time: {selectedTime}</p>
    <p>Selected Value: {selectedValue} meters</p>
{:else if error}
    <p class="error">{error}</p>
{/if}

<style>
    .searchbutton {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
    }

    .error {
        color: red;
    }

    
</style>
