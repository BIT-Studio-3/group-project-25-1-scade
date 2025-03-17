<script>
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/logoversion2.jpg';
</script>
<section>
    <h1><a href="/" id="logo">SCADE</a></h1>
    <nav>
        <a href="/">Home</a>
        <a href="/current">Current Events</a>
        <a href="/recent">Recent Events</a>
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

    #logo {
        font-family:'Times New Roman', Times, serif;
        color: #f9f9f9;
        text-decoration: none;
        font-size: larger;
        padding: 15px;
        font-weight: lighter;
    }
</style>
