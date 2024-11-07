<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import volcano from '$lib/volcano.jpg'
    
</script>
<Header headingTitle = "What are volcanoes" />

<div class="imageContainor">
    <Image
      pic={volcano}
      picname={"cover"}
      picwidth={"500px"}
      picheight={"300px"}
    />
  </div>

  <section  class = "container">

    <h2>Introduction to Volcanoes</h2>
    <p>
      Volcanoes are geological formations that occur when molten rock, gases, and other materials escape from beneath the Earth's surface. This phenomenon can lead to the formation of mountains, islands, and various geological features. Understanding volcanoes is crucial for assessing risks to human life, property, and the environment.
  </p>
  
    <h2>Causes of Volcanoes</h2>
    <p>
    
    </p>
    
  
    <h2>Impacts of Volcanoes</h2>

    <h2>Management of Volcanoes</h2>
    
  </section>
  
  <style>
     
      .container{
        margin: 1rem;
      }
     
  </style>
  
