<!--FireInfo-->
<script>
  import Header from "$lib/Header.svelte";
  import Image from "$lib/Image.svelte";
  
  let wildfire = "/images/wildfire.jpg";
</script>

<Header headingTitle="What are wildfires ?" />

<div class="imageContainor">
  <Image
    pic={wildfire}
    picname={"cover"}
    picwidth={"500px"}
    picheight={"300px"}
  />
</div>
<section>
  <h2>Introduction to Wildfires</h2>
  <p>
    Wildfires are unplanned and uncontrolled fires that typically occur in
    wilderness areas. They are a natural phenomenon that can be caused by
    lightning, volcanic activity, or human activities such as arson or
    negligence. Wildfires can spread rapidly and affect large areas, destroying
    homes, forests, and wildlife habitats. In this introductory page, we will
    explore the causes, impacts, and management of wildfires.
  </p>

  <h2>Causes of Wildfires</h2>
  <p>
    Wildfires can be ignited by natural causes such as lightning strikes, which
    are responsible for around 10% of wildfires in the United States. However,
    the majority of wildfires are caused by human activities, including:
  </p>
  <ul>
    <li><strong>Arson :</strong> fires set by individuals</li>
    <li>
      <strong>Negligence </strong>:Fires caused by carelessness, such as leaving
      a campfire unattended or discarding cigarette butts
    </li>
    <li>
      <strong>Accidents</strong>Fires resulting from industrial operations or
      vehicle accidents
    </li>
  </ul>

  <h2>Impacts of Wildfires</h2>
  <p>The impacts of wildfires can be far-reaching and severe, including:</p>
  <ul>
    <li>Destruction of homes and infrastructure</li>
    <li>Loss of human and animal lives</li>
    <li>Damage to ecosystems and wildlife habitats</li>
    <li>
      Air pollution, which can affect both human health and the environment
    </li>
    <li>
      Economic losses, including the cost of firefighting and the impact on
      tourism and agriculture
    </li>
  </ul>

  <h2>Management of Wildfires</h2>
  <p>
    To minimize the risks and impacts of wildfires, various management
    strategies are employed, such as:
  </p>
  <ul>
    <li>
      <strong>Prevention:</strong>Public education campaigns, fire bans during
      dry seasons, and regulations on fire-prone activities
    </li>
    <li>
      <strong>Detection:</strong>Early warning systems and monitoring of
      high-risk areas using satellites and remote sensing technology
    </li>
    <li>
      <strong>Suppression:</strong>Firefighting techniques, including the use of
      water, fire retardant chemicals, and controlled backburning to create
      firebreaks
    </li>
    <li>
      <strong>Rehabilitation:</strong>Restoration of ecosystems and wildlife
      habitats affected by wildfires
    </li>
  </ul>

  <p>
    In conclusion, wildfires are a significant natural hazard that can cause
    widespread damage and destruction. By understanding their causes, impacts,
    and management strategies, we can better prepare and respond to wildfire
    events.
  </p>
</section>

<style>
    section{
        margin: 2em;
    }
    
</style>
