<script>
  import Header from "$lib/Header.svelte";
  import Image from "$lib/Image.svelte";
  import flood from "$lib/flood.jpg";
  import fire from "$lib/fire.jpg";
  import earthquake from "$lib/earthquake.jpg";
  import volcano from "$lib/volcano.jpg";

  let homepic = "/images/Weather.jpg";
</script>

<Header headingTitle="References" />

<p>Logo made by us</p>

<p>
  Home page image: Makao Investments
  (https://makao.co.nz/thoughts/in-the-eye-of-the-storm-with-cat-bonds/) Sourced
  on the 25/10/24
</p>
<Image pic={homepic} picname={"cover"} picwidth={"40px"} picheight={"20px"} />

<p>
  Earthquake page image: Britannica
  (https://www.britannica.com/topic/Nepal-earthquake-of-2015) Sourced on the
  25/10/24
</p>
<Image
  pic={earthquake}
  picname={"earthquake"}
  picwidth={"40px"}
  picheight={"20px"}
/>

<p>
  Eruption page image: SCIAM
  (https://www.scientificamerican.com/article/scientists-inch-toward-better-volcanic-eruption-forecasting1/)
  Sourced on the 25/10/24
</p>
<Image pic={volcano} picname={"volcano"} picwidth={"40px"} picheight={"20px"} />

<p>
  Fire page image: Smithsonian
  (https://www.smithsonianmag.com/science-nature/future-fire-qa-180969005/)
  Sourced on the 25/10/24
</p>
<Image pic={fire} picname={"fire"} picwidth={"40px"} picheight={"20px"} />

<p>
  Flood page image: RNZ
  (https://www.rnz.co.nz/news/national/530189/dunedin-city-council-provides-skips-for-flood-hit-neighbourhoods)
  Sourced on the 25/10/24
</p>
<Image pic={flood} picname={"flood"} picwidth={"40px"} picheight={"20px"} />

<p>Info sourced from NZ API's, listed below:</p>
<ul>
  <li>https://api.geonet.org.nz/</li>
</ul>

<style>
</style>
