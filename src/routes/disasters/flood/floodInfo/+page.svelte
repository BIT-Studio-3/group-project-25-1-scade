<script>
    import Header from '$lib/Header.svelte';
    import Image from '$lib/Image.svelte';

    let flood = "/images/flood.jpg";
    
</script>


<Header headingTitle="Floods and your Safety" />

    <Image pic={flood} picname={"cover"} picwidth={"600px"} picheight={"400px"}/>

<h2 id = "keyPoints">Key Points</h2>

<section class = "content">
<ul>
    <li>Floods, big or small, can have devastating effects on your home,your family and the general public. You can take steps to reduce the harm caused by flooding.</li>
    <li>Learn what to inform the public on how to prepare for a flood, stay safe during a flood, and protect health after returning home from a flood</li>
</ul>

<h2>Prepare for a flood</h2>


<h3>Flood Safety Tips</h3>

<p>
Before a Flood:
<ul>
    <li>Create an emergency kit with essentials (water, food, medications, flashlight).
    </li>
    <li>Make a family communication plan that includes meeting points.
    </li>
    <li>Know your evacuation routes and nearest shelters.
    </li>
    </ul>

During a Flood:

<ul>
    <li>Follow evacuation orders promptly.</li>
    <li> Do not wait for the last minute.</li>
    <li>Move to higher ground; avoid walking or driving through flooded areas.</li>
    <li>Stay tuned to local news or weather channels for updates.
    </li>
</ul>
After a Flood:

<ul>
    <li>Avoid floodwaters; they may be contaminated or deeper than they appear.
    </li>
    <li>Return home only when authorities say it is safe.
    </li>
    <li>Document damage for insurance claims. 
    </li>
</ul>


<p> 

</p>

<h2>Keeping community safe after a flood</h2>

<p>
    Floodwater and standing water can be dangerous and can make the community vulnerable to infectious diseases, chemical hazards, and injuries. Know how to protect yourself and your loved ones from the risks brought by floodwater.
</p>




</section>



<style>

    #keyPoints{
        color: rgb(57, 110, 255);
    }

    .content{
        background-color: #ffff;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 2em;
    }
    p{
        line-height: 1.8;
    }
    li{
        line-height: 1.6;
    }
    h2{
        font-size: x-large;
    }

</style>