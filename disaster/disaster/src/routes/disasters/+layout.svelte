<div>
    <aside>
        <a href="disasters/fire">Fire</a>
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
        background-color: skyblue;
        display: flex;
        text-align: center;
        padding: 2em;
        border: 2px solid rgb(90, 140, 160);
        border-radius: 5px;
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