<script>
  import Navigation from "$lib/Navigation.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<div class="page-container">
  <Navigation />
  
  <slot />
  
  <Footer />
</div>

<style>
  :global(*){
    font-family:Arial, Helvetica, sans-serif;
    margin: 0px;
  }

  .page-container {
    display:flex;
    flex-direction:column;
    min-height: 100vh;
  }

  .page-container > *:not(Footer) {
    flex: 1;
  }


</style>
