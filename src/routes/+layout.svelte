<script>
  import Navigation from "$lib/Navigation.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<Navigation />

<slot />

<Footer />

<style>
    :global(*){
        font-family:Arial, Helvetica, sans-serif;
        margin: 0px;
    }


</style>
