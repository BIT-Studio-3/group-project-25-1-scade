<script>

  import Header from '$lib/Header.svelte';
  export let data;
  let damages = data.data;
  console.log(damages);

</script>

<body>
  <div class="top-of-body">
    <h2><Header headingTitle="Damage Records" /></h2>

    
    <form method="POST" action="?/report" class="damge-form">
      <label>
          Time
      <input name="time" type="time">
      </label>

      <label>
        Damage
    <input name="details" type="string">
    </label>

    <label>
      Location
    <input name="location" type="string">
    </label>



      <button formaction="?/report">Submit</button>
      </form>

      {#each damages as { damage, location, time}}
      <tr>
        <td>{time}</td>
        <td>{damage}</td>
        <td>{location}</td>
        
      </tr>
    {/each}
</body>

<style>
  p {
    padding: 1.2%;
  }
  h2 {
    padding: 0.9%;
  }

  .top-of-body {
    border-style: solid;
    border-color: grey;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .damge-form{
    width: 100%;

    display: flex;
    align-content: center;
  }
</style>