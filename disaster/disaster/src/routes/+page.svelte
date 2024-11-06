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
          <Maincard where="/disasters/earthquake" title="Earthquakes" date={formattedDate} info="More about the Earthquakes" />
          <Maincard where="/disasters/fire" title="Fires" date={formattedDate} info="More about the fires" />
          <Maincard where="/disasters/eruption" title="Eruptions" date={formattedDate} info="More about the eruptions" />
          <Maincard where="/disasters/flood" title="Floods" date={formattedDate} info="More about the floods" />
      </div>
  </div>
  <p></p>
  <div class="bottom-of-body">
      <h1>&numsp;Recent Events</h1>
      <div class="recent-events">
          <Maincard where="/disasters/earthquake" title="Earthquakes" date="18/10/24" info="More about the Earthquakes" />
          <Maincard where="/disasters/fire" title="Fires" date="18/10/24" info="More about the fires" />
          <Maincard where="/disasters/eruption" title="Eruptions" date="18/10/24" info="More about the eruptions" />
          <Maincard where="/disasters/flood" title="Floods" date="18/10/24" info="More about the floods" />
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

.current-events, .recent-events {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;  /* Distribute cards evenly */
  gap: 20px;                      /* Gap between cards */
  padding: 10px;
}

/* Ensure each card in the row has the same size */
.current-events > .Maincard, .recent-events > .Maincard {
  flex: 1 1 20%;                /* Allow the card to grow and shrink */
  min-width: 250px;             /* Minimum width to prevent squashing */
  max-width: 300px;            /* Maximum width for consistency */
  height: 300px;               /* Fixed height for uniformity */
  display: flex;
  flex-direction: column;      /* Stack card content vertically */
  justify-content: space-between;  /* Space out the content */
  padding: 10px;
  box-sizing: border-box;
}

/* Optional: Add any specific card styling to make it look good */
.Maincard {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
}

.imageContainor {
  display: flex;
  justify-content: right;
  padding: 2%;
}

</style>
