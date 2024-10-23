<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/Weather.jpg';
</script>

<Header headingTitle="About Page" />

<h2>About Us:</h2>
<h3>Our Mission</h3>
<p>To Give weather related information to various disaster response groups, to help them remain informed about what is happening at all times.</p>
<h3>Who We Are</h3>
<p>We are a bunch of people working hard to bring you a working disaster API to help those who are helping others.</p>
<h3>What We Do</h3>
<p>We do be trying to make weather do the thing. Science Yo!</p>


<div id="group">
    <h3>Our Members:</h3>

    <div class="members">
        <div class="imageContainer">
            <Image pic={homepic} picname={"cover"} picheight={"300px"} picwidth={"250px"} />
        </div>
        <div class="name"><br /> <p>Zandar</p></div>
    </div>
    
    <div class="members">
        <div class="imageContainer">
            <Image pic={homepic} picname={"cover"} picheight={"300px"} picwidth={"250px"} />
        </div>
        <div class="name"><br /> <p>Aston</p></div>
    </div>
    
    <div class="members">
        <div class="imageContainer">
            <Image pic={homepic} picname={"cover"} picheight={"300px"} picwidth={"250px"} />
        </div>
        <div class="name"><br /> <p>Hazel</p></div>
    </div>
    
    <div class="members">
        <div class="imageContainer">
            <Image pic={homepic} picname={"cover"} picheight={"300px"} picwidth={"250px"} />
        </div>
        <div class="name"><br /> <p>Saskia</p></div>
    </div>
    
    <div class="members">
        <div class="imageContainer">
            <Image pic={homepic} picname={"cover"} picheight={"300px"} picwidth={"250px"} />
        </div>
        <div class="name"><br /> <p>Joanne</p></div>
    </div>
</div>
<br>
<Footer year={2024} />

<style>

.members {
display: inline-block;
width: 150px;
height: 200px;
vertical-align: top;
text-align:center;
margin-right: 100px; 
margin-left: 100px; 

}
.name {
    display: block; 
    text-align: center; 
    padding-left: 100px; 
}

.imageContainer {
    width: 100%;
    display: block;
    padding-right: 100px;
    padding-left: 10px;
}
</style>