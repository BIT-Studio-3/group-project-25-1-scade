<script>
    export let title; 
</script>

<div class="card" >
    <h2>{title}</h2>
</div>


<style>
    h2 {
        
    }
    p {
        padding-left: 0.7em;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 1em;
        border-radius: 30px;
    }
    
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>