<script>
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/logo.jpg';
</script>
<section>
    <Image pic={homepic} picname={"cover"} picwidth={"80px"} picheight={"80px"}/> 
    <nav>
        <a href="/">Home</a>
        <a href="/current">Current Events</a>
        <a href="/recent">Recent Events</a>
        <a href="/disasters">Disasters</a>
        <a href="/about">About</a>
        <a href="/contact">Contact and Feedback</a>
    </nav>
</section>

<style>
    section {
        display: flex;
        align-items: center; /* Center the image and nav vertically */
        background-color: salmon;
        padding: 0; /* Remove padding to fit the image */
        border: 3px solid rgb(182, 81, 44);
        border-radius: 5px;
    }
    nav {
        display: flex;
        align-items: center; /* Center the text vertically */
        background-color: transparent; /* Make the background transparent */
        padding: 0; /* Remove padding */
    }
    nav a {
        color: rgb(150, 64, 32);
        text-align: left; /* Align text to the left */
        padding: 30px 30px; /* Adjust padding as needed */
        text-decoration: none;
        font-weight: bold;
        font-size: large;
        border-radius: 5px;
    }
    nav a:hover {
        background-color: #ddd;
        color: rgb(34, 86, 199);
    }
</style>
