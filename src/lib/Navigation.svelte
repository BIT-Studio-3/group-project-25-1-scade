<script>
    import Image from '$lib/Image.svelte';

    let homepic = "/images/logoversion2.jpg";
</script>
<section>
    <h1><a href="/" id="logo">SCADE</a></h1>
    <nav>
        <a href="/">Home</a>
        <a href="/current">Events</a>
        <a href="/recent">Recent Events</a>
        <a href="/disasters">Disasters</a>

        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
</section>

<style>
    section {
        display: flex;
        align-items: center; 
        background-color: rgb(40, 51, 122);
        padding: 0; /* Remove padding to fit the image */
        flex-direction: row;
    }
    nav {
        display: flex;
        align-items: center; /* Center the text vertically */
        background-color: transparent; /* Make the background transparent */
        padding: 0; /* Remove padding */
        flex-wrap: wrap;
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
        background-color: rgb(13, 33, 55);
    }

    #logo {
        font-family:'Times New Roman', Times, serif;
        color: #f9f9f9;
        text-decoration: none;
        font-size: larger;
        padding: 15px;
        font-weight: lighter;
        flex: 1;
    }

    @media (max-width: 970px) {
        section {
            flex-direction: column; 
            align-items: flex-start; 
        }
        
        nav {
            width: 100%; 
            justify-content: center; 
        }
        
        nav a {
            padding: 10px 15px; 
            font-size: medium; 
            width: 100%;
            text-align: center;
        }
    }
</style>
