<!--Earthquake info -->
<script>
  import Header from "$lib/Header.svelte";
  import Image from "$lib/Image.svelte";
  import faults from "$lib/faults.jpg";
  import quake from "$lib/quakes.jpg";
</script>

<Header headingTitle="What is an earthquake ?"></Header>

<div>
  <Image
    pic={quake}
    picname={"Earthquake damaged a roa"}
    picwidth={"500px"}
    picheight={"300px"}
  />
</div>

<section>
  <p>
    An earthquake is a sudden and intense shaking of the ground caused by the
    movement of tectonic plates beneath the Earth’s surface. These movements
    release energy that travels through the Earth in the form of seismic waves,
    resulting in the shaking that we associate with earthquakes. Understanding
    earthquakes is crucial not only for scientific inquiry but also for public
    safety and disaster preparedness.
  </p>
</section>

<Image
  id="plates"
  pic={faults}
  picname={" Different types of faults that cause earthquakes"}
  picwidth={"500px"}
  picheight={"300px"}
/>
<section>
  <h2>The science behind Earthquakes</h2>
  <h3>Tectonic Plates</h3>
  <p>
    The Earth's outer shell, or lithosphere, is divided into large pieces known
    as tectonic plates. These plates float on the semi-fluid asthenosphere below
    and are in constant motion, albeit very slowly. Earthquakes primarily occur
    at the boundaries of these plates, where they may collide, pull apart, or
    slide past one another.
  </p>
  <h3>Types of Plate Boundaries</h3>
  <ol>
    <li>
      <strong>Convergent Boundaries:</strong>At these boundaries, two plates
      collide. One plate may be forced below the other in a process known as
      subduction. This often leads to powerful earthquakes and the formation of
      mountain ranges and ocean trenches.
    </li>
    <li>
      <strong>Divergent Boundaries:</strong>Here, plates move apart from each
      other. This movement can create new crust as magma rises to the surface,
      often resulting in moderate earthquakes.
    </li>
    <li>
      <strong>Transform Boundaries:</strong>At transform boundaries, plates
      slide horizontally past one another. The friction between the plates can
      cause stress to build up until it is released in the form of an
      earthquake.
    </li>
  </ol>
  <h3>Measuring Earthquakes</h3>
     <p>The strength and magnitude of an earthquake are measured using instruments called seismometers. The most commonly referenced scale for measuring earthquakes is the Richter scale, which quantifies the amount of energy released. More recently, the Moment Magnitude Scale (Mw) has gained popularity due to its ability to provide a more accurate measurement of larger earthquakes.</p>
  <h3>Effects of Earthquakes</h3>
  <p>The impacts of an earthquake can vary widely depending on its magnitude, depth, and the geology of the area. Common effects include:</p>
<ul>
    <li><strong>Ground Shaking:</strong>The primary effect, which can cause buildings and infrastructure to collapse.</li>
    <li><strong>Surface Rupture:</strong>The ground can crack or shift, causing damage to roads and utilities.</li>
    <li><strong>Aftershocks: </strong>Smaller tremors that occur after the main event can continue for days, weeks, or even months.</li>
    <li><strong>Tsunamis:</strong>Underwater earthquakes can trigger massive sea waves, leading to devastation in coastal areas.</li>
</ul>
<p>Earthquakes are natural phenomena that remind us of the dynamic processes shaping our planet. By understanding their causes, effects, and how to prepare for them, we can reduce the risks associated with these powerful events. As technology and research continue to advance, our ability to predict and respond to earthquakes improves, enhancing safety and resilience in earthquake-prone regions.</p>
</section>

<style>
</style>
