<script>
    import Sidebar from "../../lib/Sidebar.svelte";
</script>

<div>
    <Sidebar />
    <main>
        <slot />
    </main>
</div>

<style>
    div {
        display: flex;
        padding-top: 5px;
    }
    :global(*){
        font-family:monospace
    }
</style>