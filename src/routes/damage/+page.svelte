<script>
  import { onMount } from 'svelte';
  import Header from '$lib/Header.svelte';
  import Card from '$lib/Card.svelte';
  import Maincard from '$lib/Maincard.svelte';
  import Image from '$lib/Image.svelte';
  import Footer from '$lib/Footer.svelte';
  import earthquakeCard from '$lib/Maincard.svelte';

  let damages = [
    { damage: 'This and that is damaged', location: '123 Paper St'},
    { damage: 'that is damaged and this is not', location: '321 Paper St'}

  ];
</script>

<body>
  <div class="top-of-body">
    <h2><Header headingTitle="Damage Records" /></h2>
   
  
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
  
</style>