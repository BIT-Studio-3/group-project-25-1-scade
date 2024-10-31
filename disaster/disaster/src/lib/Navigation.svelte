<script>
    import Image from '$lib/Image.svelte';
    import homepic from '$lib/logo.jpg';
</script>
<section>
    <Image pic={homepic} picname={"cover"} picwidth={"40px"} picheight={"40px"}/> 
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
    section{
        display: flex;
        background-color: salmon;
        padding: 2em;
        border: 2px solid rgb(182, 81, 44);
        border-radius: 5px;
        
    }
    nav a {
        color: rgb(150, 64, 32);
        text-align: center;
        padding: 3px 10px;
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