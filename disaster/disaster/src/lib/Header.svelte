<script>
    export let headingTitle;
</script>

<header>

    <nav>
        <a href="/">Home</a>
        <a href="/">Current Events</a>
        <a href="/">Recent Events</a>
        <a href="/disasters">Disasters</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
    <h1>{headingTitle}</h1>
</header>

<style>
    nav a {
        color: #f2f2f2;
        text-align: center;
        padding: 3px 10px;
        text-decoration: none;
        font-weight: bold;
        font-size: large;
    }
    nav a:hover {
        background-color: #ddd;
        color: black;
    }
    nav {
        display: flex;
        text-align: center;
        background-color: salmon;
        padding: 2em;
        border: 2px solid rgb(182, 81, 44);
    }
    h1 {
        font-size:xxx-large;
    }
</style>