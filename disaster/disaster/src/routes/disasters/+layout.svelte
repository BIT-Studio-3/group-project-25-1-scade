<div>
    <aside>
        <a href="disasters/fire">Fire</a>
        <a href="disasters/earthquakes">Earthquakes</a>
    </aside>
    <main>
        <slot />
    </main>
</div>

<style>
    div {
        display: flex;
    }
    aside {
        padding: 1em;
        margin-right: 1em;
        background-color: salmon;
        display: flex;
        text-align: center;
        padding: 2em;
        border: 2px solid rgb(182, 81, 44);
    }
    aside a {
        color: #f2f2f2;
        text-align: center;
        padding: 3px 10px;
        text-decoration: none;
        font-weight: bold;
        font-size: large;
    }
    aside a:hover {
        background-color: #ddd;
        color: black;
    }
</style>