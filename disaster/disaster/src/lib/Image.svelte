<script>
    export let pic;
    export let picname;
    export let picwidth;
    export let picheight;
</script>

<div>
    <img src={pic} alt={picname} width={picwidth} height={picheight}>
</div>

<style>
    /* div {
        text-align: center;
        margin-right: 10px;
    } */
     div {
      margin-left: 2em;
     }
</style>