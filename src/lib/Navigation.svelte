<script>
    import Image from '$lib/Image.svelte';
    let homepic = "/images/logoversion2.jpg";

    let isMenuOpen = false;
</script>
<section>
    <h1><a href="/" id="logo">SCADE</a></h1>
    <nav class={isMenuOpen ? 'open' : ''}>
        <a href="/">Home</a>
        <a href="/current">Events</a>
        <a href="/recent">Recent Events</a>
        <a href="/disasters">Disasters</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>

    <div id="hamburger" on:click={() => isMobileMenuOpen = !isMobileMenuOpen}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
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
    nav a {
        color: rgb(255, 255, 255);
        text-align: left; 
        padding: 30px 30px; 
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

    #hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
        justify-content: space-around;
        height: 25px;
        width: 30px;
    }

    #hamburger .bar {
        height: 4px;
        width: 30px;
        background-color: white;
        border-radius: 10px;
    }

    @media (max-width: 970px) {
        section {
            flex-direction: column; 
            align-items: flex-start; 
        }
        
        nav {
            width: 100%; 
            justify-content: center; 
            display: none;
            flex-direction: column;
        }

        nav.open {
            display: flex;
        }
        
        nav a {
            padding: 10px 15px; 
            font-size: medium; 
            width: 100%;
            text-align: center;
        }

        #hamburger {
            display: flex;
        }
    }
</style>
