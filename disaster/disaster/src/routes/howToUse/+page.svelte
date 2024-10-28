<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';

</script>


<article class = "container">
    <Header headingTitle="How to use our website" />
    <div class = "info">
      <h2> Explore Current and Recent Events</h2>
      <p>Stay informed by checking the latest and warnings issued for your region in either the Current events or Recent Events Pages.</p>
      <h2>Prepare Response and Recovery</h2>
      <p>Visit our Home Page to find information on natural disaster preparedness, response, and recovery.</p>
      <h2>Learn About Natural Disasters</h2>
      <p>Visit the Disasters page to understand various natural disasters that can affect New Zealand, including earthquakes, floods, fires and more.</p>
      <h2>About us</h2>
      <p>Find out more about us on the About us Page</p>
      <h2>Getting in contact</h2>
      <p>Contact us on the Contact Page </p>

</div>







</article>





<Footer year={2024} />

<style>
    .container{
        max-width: fit-content;
        background-color: #ffff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgb(255, 7, 7); 
        
    }


</style>