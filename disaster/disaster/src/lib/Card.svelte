<script>
    export let where  ;
    export let title = Empty;
    export let date = 0/0/0;
    export let info = Empty;
</script>

<div class="card" >
    <h2><b><a href={where}>{title}</a></b></h2>
    <p>{date}</p>
    <p>{info}</p>
</div>


<style>
    h2 {
        background-color: rgb(135, 209, 238);
        padding: 0.7em;
    }
    p {
        padding-left: 0.7em;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 1em;
        width: 500px;
        margin: 2em;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>