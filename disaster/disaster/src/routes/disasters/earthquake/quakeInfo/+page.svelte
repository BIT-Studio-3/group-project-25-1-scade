<!--Earthquake info -->
<script>
 import Header from "$lib/Header.svelte";
 import Image from "$lib/Image.svelte";
 import faults from "$lib/faults.jpg";
 import quake from "$lib/quake.jpg"
</script>

<Header  headingTitle= "What is an earthquake ?"></Header>

<div>
<Image 
    pic={quake}
    picname={"Earthquake damaged a roa"}
    picwidth={"500px"}
    picheight={"300px"}
    />
</div>
<Image
pic={faults}
    picname={" Different types of faults that cause earthquakes"}
    picwidth={"500px"}
    picheight={"300px"} 
/>

<style>

</style>