<script>
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/logoversion2.jpg';
</script>
<section>
    <p>&nbsp;</p><Image pic={homepic} picname={"cover"} picwidth={"200px"} picheight={"50px"}/> 
    <nav>
        <a href="/">Home</a>
        <a href="/current">Events</a>
        <a href="/disasters">Disasters</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
</section>

<style>
    section {
        display: flex;
        align-items: center; /* Center the image and nav vertically */
        background-color: rgb(40, 51, 122);
        padding: 0; /* Remove padding to fit the image */
    }
    nav {
        display: flex;
        align-items: center; /* Center the text vertically */
        background-color: transparent; /* Make the background transparent */
        padding: 0; /* Remove padding */
    }
    nav a {
        color: rgb(255, 255, 255);
        text-align: left; /* Align text to the left */
        padding: 30px 30px; /* Adjust padding as needed */
        text-decoration: none;
        font-weight: bold;
        font-size: large;
        border-radius: 5px;
    }
    nav a:hover {
        color: rgb(255, 255, 255);
        text-decoration: underline;
    }
</style>
