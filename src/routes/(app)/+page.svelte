<svelte:head>
    <title>Home</title>
</svelte:head>

<script>
  export let data;
  console.log(data);
  let disasters = data.data.features;
  console.log(disasters);

</script>

<body>
  <div class="card-section">
    {#each disasters as disaster}
    <div class="index-card">
      <h2>{disaster.properties.locality}</h2>
      <h3>{disaster.properties.time}</h3>
      <h3>{disaster.properties.magnitude}</h3>
    </div>
    {/each}
    </div>
</body>


<style>
 .card-section{
  display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0.75em;
 }
  .index-card{

  height: 15em;
  border-radius: 30px;
  background: #ececf3;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 1em;
        border-radius: 30px;


  }
  .index-card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  

  #indexCard4{grid-row-start: 3;}
  #indexCard5{grid-row-start: 3;}
  #indexCard6{grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-row-start: 4;}


 
</style>