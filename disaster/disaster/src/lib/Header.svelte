<script>
    export let headingTitle;
</script>

<header>

    <nav>
        <a href="/">Home</a>
        <a href="/">Current Events</a>
        <a href="/">Recent Events</a>
        <div class="dropdown">
            <a class="dropbtn">Disasters
                <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
                <a href="/disasters/fire">Fire</a>
                <a href="/disasters/flood">Flood</a>
            </div>
        </div>
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
    .dropdown {
        position:relative;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: salmon;
        min-width: 160px;
        z-index: 1;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropdown-content a {
        color: #f2f2f2;
        text-decoration: none;
        display: block;
        text-align: left;
        padding: 10px;
    }
    .dropdown-content a:hover {
        background-color: #ddd;
    }
    .dropdown .dropbtn {
        border: none;
        outline: none;
        color: #f2f2f2;
        margin: 0;
    }
</style>