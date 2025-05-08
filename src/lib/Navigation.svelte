<script>
    import Image from '$lib/Image.svelte';
    let homepic = "/images/logoversion2.jpg";

    let isMenuOpen = false;
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>
<section>
    <nav>
        <div class="hamburger" on:click={toggleMenu}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>

        <h1><a href="/" id="logo">SCADE</a></h1>

        <div class="menu" class:open={isMenuOpen}>
            <a href="/">Home</a>
            <a href="/current">Events</a>
            <a href="/recent">Recent Events</a>
            <a href="/disasters">Disasters</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    </nav>
</section>

<style>
    section {
        display: flex;
        align-items: center; 
        background-color: rgb(40, 51, 122);
        padding: 0; 
        flex-direction: row;
    }
    nav {
        display: flex;
        align-items: center;
        background-color: transparent; 
        padding: 0; 
        flex-wrap: wrap;
    }
    nav .menu a {
        color: rgb(255, 255, 255);
        text-align: left; 
        padding: 30px 30px; 
        text-decoration: none;
        font-weight: bold;
        font-size: large;
        border-radius: 5px;
    }
    nav .menu a:hover {
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

    .hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
        padding: 20px;
    }

    .bar {
        height: 3px;
        width: 25px;
        background-color: white;
        margin: 4px 0;
    }

    .menu {
        display: none;
        flex-direction: column;
    }

    .menu.open {
        display: flex;
    }

    @media (min-width: 769px) {
        .menu {
            display: flex;
            flex-direction: row;
        }

        .hamburger {
            display: none;
        }
    }
    
    @media (max-width: 768px) {
        nav {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }

        h1 {
            width: 100%;
            text-align: center;
            margin: 0;
            padding: 15px 0;
        }

        .hamburger {
            display: flex;
            position: absolute;
            left: 15px;
            top: 1px;
            z-index: 10;
        }

        .menu:not(.open) {
            display: none;
        }

        .menu.open {
            display: flex;
            flex-direction: column;
            width: 100%;
            text-align: center;
        }

        #logo {
            flex:none;
        }
    }
</style>
