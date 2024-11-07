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
      The primary causes of volcanic activity include tectonic plate movements, magma formation, and the release of gases. When tectonic plates collide, pull apart, or slide against each other, magma can rise to the surface, resulting in volcanic eruptions. Additionally, hot spots beneath the Earth's crust can lead to the formation of volcanoes independent of plate boundaries.
    </p>
    
  
    <h2>Impacts of Volcanoes</h2>
    <p>
      Volcanic eruptions can have significant impacts on the environment and human populations. These impacts can include:
  </p>
  <ul>
    <li>Destruction of infrastructure and property due to lava flows and pyroclastic flows.</li>
    <li>Health hazards from ashfall, which can cause respiratory issues and contaminate water supplies.</li>
    <li>Climate effects, such as temporary cooling due to ash and gases released into the atmosphere.</li>
    <li>Long-term changes in land use and agricultural productivity in affected areas.</li>
</ul>


    <h2>Management of Volcanoes</h2>
    <p>Effective management of volcanic risks involves monitoring, preparedness, and response strategies. Key measures include:</p>
    <ul>
      <li>Implementing early warning systems to alert communities of potential eruptions.</li>
      <li>Conducting research and monitoring activities to understand volcanic behavior.</li>
      <li>Developing emergency response plans and evacuation routes for at-risk populations.</li>
      <li>Engaging communities in education and preparedness programs to enhance resilience.</li>
  </ul>
  <p> Collaboration between government agencies, scientists, and local communities is essential to mitigate the risks associated with volcanic activity.</p>
    
  </section>
  
  <style>
     
      .container{
        margin: 1rem;
        line-height: 1.6;
      }
     
  </style>
  
