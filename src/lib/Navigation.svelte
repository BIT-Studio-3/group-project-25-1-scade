<script>
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/logoversion2.jpg';
</script>
<section>
    <p>&nbsp;</p><Image pic={homepic} picname={"cover"} picwidth={"200px"} picheight={"50px"}/> 
    <nav>
        <a href="/">Home</a>
        <a href="/current">Current Events</a>
        <a href="/recent">Recent Events</a>
           <!-- Dropdown menu for Disasters -->
           <div class="dropdown">
            <a href="/disasters" class="dropbtn">Disasters</a>
            <div class="dropdown-content">
                <a href="/disasters/earthquake">Earthquake</a>
                <a href="/disasters/eruption">Eruption</a>
                <a href="/disasters/fire">Fire</a>
                <a href="/disasters/flood">Flood</a>
            </div>
        </div>

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
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropbtn {
        background-color: transparent;
        color: rgb(150, 64, 32);
        padding: 30px 30px;
        font-weight: bold;
        font-size: large;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }

    .dropbtn:hover {
        background-color: #ddd;
        color: rgb(34, 86, 199);
    }
    
    /* Dropdown content */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        z-index: 1;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }

    .dropdown-content a {
        color: rgb(150, 64, 32);
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        font-size: medium;
    }

    .dropdown-content a:hover {
        background-color: #ddd;
        color: rgb(34, 86, 199);
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>
