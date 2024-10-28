<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';

</script>

<Header headingTitle="How to use our website" />

<article class = "container">
    <div class = "info">
      <h2> Explore Current and Recent Events</h2>
      <p>Stay informed by checking the latest and warnings issued for your region in either the Current events or Recent Events Pages.</p>
    </div>

      <div class = "info">

          <h2>Prepare Response and Recovery</h2>
          <p>Visit our Home Page to find information on natural disaster preparedness, response, and recovery.</p>
      </div>
      <div class = "info">

          <h2>Learn About Natural Disasters</h2>
          <p>Visit the Disasters page to understand various natural disasters that can affect New Zealand, including earthquakes, floods, fires and more.</p>
      </div>
      <div class = "info">
          <h2>About us</h2>
          <p>Find out more about us on the About us Page</p>

      </div>
      <div class = "info">

          <h2>Getting in contact</h2>
          <p>Contact us on the Contact Page </p>
      </div>









</article>





<Footer year={2024} />

<style>
    .container{
        max-width: fit-content; 
        margin: 10px auto; 
        background-color: #ffff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgb(137, 137, 137); 
        margin-bottom: 20px;
    }

    h2{
        color:rgb(41, 46, 51);
        font-size: 1.5em;
        border-bottom: 5px solid #451c1c;
        
    }
    p{
        line-height: 1.6;
    }

    .info{
      background-color: #ecf0f1;
      margin-bottom: 20px;
      border-radius: 8px;
      padding-left: 10px;
      border: 5px solid#fd7d78a0;

    }


</style>