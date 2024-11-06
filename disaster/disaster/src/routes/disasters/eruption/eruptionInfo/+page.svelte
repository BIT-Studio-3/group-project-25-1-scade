<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';
    import flood from '$lib/volcano.jpg'
    
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
