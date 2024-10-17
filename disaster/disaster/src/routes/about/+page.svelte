<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/Weather.jpg';
</script>

<Header headingTitle="About Page" />

<h2>About Us:</h2>
<h3>Our Mission</h3>
<p>To Give weather related information to various disaster response groups</p>
<h3>Who We Are</h3>
<p>We are a bunch of people trying to do something way above our paygrade <br> lol</p>
<h3>What We Do</h3>
<p>We do be trying to make weather. Science Yo!</p>
<h3>Our Members</h3>
<p>Photos here ig</p>

<div id="group">
    <h4>Members</h4>

    <div class="members">
        <div class="imageContainer">
            <Image pic={homepic} picname={"cover"} picheight={"300px"} picwidth={"250px"} />
        </div>
        <div class="name"><br /> Zandar</div>
    </div>
    
    <div class="members">
        <div class="imageContainer">
            <Image pic={homepic} picname={"cover"} picheight={"300px"} picwidth={"250px"} />
        </div>
        <div class="name"><br /> Aston</div>
    </div>
    
    <div class="members">
        <div class="imageContainer">
            <Image pic={homepic} picname={"cover"} picheight={"300px"} picwidth={"250px"} />
        </div>
        <div class="name"><br /> Hazel</div>
    </div>
    
    <div class="members">
        <div class="imageContainer">
            <Image pic={homepic} picname={"cover"} picheight={"300px"} picwidth={"250px"} />
        </div>
        <div class="name"><br /> Saskia</div>
    </div>
    
    <div class="members">
        <div class="imageContainer">
            <Image pic={homepic} picname={"cover"} picheight={"300px"} picwidth={"250px"} />
        </div>
        <div class="name"><br /> Joanne</div>
    </div>
</div>

<Footer year={2024} />

<style>

.members {
display: inline-block;
width: 150px;
height: 200px;
vertical-align: top;
text-align:center;
margin: 100px; 

}
.name {
    display: inline;
}
.imageContainer {
    width: 100%;
    display: block;
    padding-right: 100px;
    padding-left: 10px;
}

</style>