<script>
  import { onMount } from 'svelte';
  import Header from '$lib/Header.svelte';


  let damages = [
    { damage: 'This and that is damaged', location: '123 Paper St'},
    { damage: 'that is damaged and this is not', location: '321 Paper St'},
    { damage: 'This and that is damaged', location: '123 Paper St'},
    { damage: 'that is damaged and this is not', location: '321 Paper St'},
    { damage: 'This and that is damaged', location: '123 Paper St'},
    { damage: 'that is damaged and this is not', location: '321 Paper St'},
    { damage: 'This and that is damaged', location: '123 Paper St', time: '17/5/25 12:15'},
    { damage: 'that is damaged and this is not', location: '321 Paper St',time: '17/5/25 13:05'}
  ];
</script>

<body>
  <div class="top-of-body">
    <h2><Header headingTitle="Damage Records" /></h2>

    <form method="POST" action="?/report">
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

    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Damage</th>
          <th>Location</th>
          
        </tr>
        <tr>
          <td>Input 1</td>
          <td>Input 2</td>
          <td>Input 3</td>
          
        </tr>
      </thead>
      <tbody>
        {#each damages as { damage, location, time}}
          <tr>
            <td>{time}</td>
            <td>{damage}</td>
            <td>{location}</td>
            
          </tr>
        {/each}
      </tbody>
    </table>
  
  </div>
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
  
</style>