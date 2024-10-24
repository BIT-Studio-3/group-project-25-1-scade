<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/Weather.jpg';

async function getData()
{
    const response = await fetch(``);
   
    if (response.ok)
    {
        const data = await response.json();
        console.log(data);
        
    }
    else
    {
        console.log("Error Fetching Data")
    }
}



</script>

<Header headingTitle="Earthquakes" />



<Footer year={2024} />

<style>

</style>