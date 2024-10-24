<div>
    <aside>
        <a href="disasters/earthquake">Earthquake</a>
        <a href="disasters/eruption">Eruption</a>
        <a href="disasters/fire">Fire</a>
        <a href="disasters/flood">Flood</a>
    </aside>
    <main>
        <slot />
    </main>
</div>

<style>
    div {
        display: flex;
        padding-top: 5px;
    }
    aside {
        margin-right: 1em;
        background-color: skyblue;
        text-align: center;
        padding-left: 0.5em;
        padding-right: 0.5em;
        border: 2px solid rgb(90, 140, 160);
        border-radius: 5px;
    }
    aside a {
        display: block;
        color:rgb(34, 86, 199);
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        font-size: large;
        margin: 0.7em 0;
        border-radius: 5px;
    }
    aside a:hover {
        color: red;
        background-color: #ddd;
    }
</style>