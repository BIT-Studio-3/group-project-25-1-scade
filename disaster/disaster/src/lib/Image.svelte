<script>
    export let pic;
    export let picname;
</script>

<div>
    <img src={pic} alt={picname}>
</div>

<style>
    div {
        padding: 1em;
        text-align: center;
        max-width: 800px;
    }
    img {
        width: 800px
        
    }
</style>