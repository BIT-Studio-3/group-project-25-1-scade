<script>
    import Header from '$lib/Header.svelte';
    import Card from '$lib/Card.svelte';
    import Maincard from '$lib/Maincard.svelte';
    import Image from '$lib/Image.svelte';
    import Footer from '$lib/Footer.svelte'
    import homepic from '$lib/Weather.jpg';
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    let day = String(currentTime.getDate()).padStart(2, '0');
    let month = String(currentTime.getMonth() + 1).padStart(2, '0'); 
    let year = currentTime.getFullYear(); 
    let formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);
</script>

<body>
    <div class="top-of-body">
        <h1><Header headingTitle="Current Events" /></h1>
        <p>{currentTime}</p>
        <div class="current-events">
            <Maincard where="/disasters/earthquake" title="Earthquakes" date={formattedDate} info="More about the Earthquakes" /> <!--Current event cards will need to be designed so they update their title, description, and link based on current disaster or alert.-->
            <Maincard where="/disasters/fire" title="Fires" date={formattedDate} info="More about the fires" />
            <Maincard where="/disasters/eruption" title="Eruptions" date={formattedDate} info="More about the eruptions" />
            <Maincard where="/disasters/flood" title="Floods" date={formattedDate} info="More about the floods" />
        </div>
    </div>
    <p></p>
    <div class="bottom-of-body">
        <h1>&numsp;Recent Events</h1>
        <div class="recent-events">
            <Maincard where="/disasters/earthquake" title="Earthquakes" date="18/10/24" info="More about the Earthquakes" />  <!-- Date and description will be pulled by most recent alert-->
            <Maincard where="/disasters/fire" title="Fires" date="18/10/24" info="More about the fires" />      <!-- Date and description will be pulled by most recent alert-->
            <Maincard where="/disasters/eruption" title="Eruptions" date="18/10/24" info="More about the eruptions" />  <!-- Date and description will be pulled by most recent alert-->
            <Maincard where="/disasters/flood" title="Floods" date="18/10/24" info="More about the floods" />       <!-- Date and description will be pulled by most recent alert-->
        </div>
    </div>
    
</body>

<style>
  p {
    padding: 0.2%;
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

    .current-events {
    display: flex;
    flex-wrap: wrap; 
    padding: 10px; 
    gap: 50px; 
    }

    .recent-events {
    display: flex;
    flex-wrap: wrap; 
    padding: 10px; 
    gap: 50px
    }

  .imageContainor {
    display: flex;
    justify-content: right;
    padding: 2%;
  }
</style>
