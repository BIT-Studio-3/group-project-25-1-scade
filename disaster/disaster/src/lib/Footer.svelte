<script>
    //for year
    export let year = 2024;
</script>

<div class = "footerStyle">

    <p>
        &copy; The information provided is for your personal use in accordance with The Disasters Service website {year}
    </p>
    <nav>
        <a href="/">Accessibility</a>
        <a href="/howToUse">How to Use</a>
        <a href="/">SiteMap</a>
        <a href="/">Privacy Policy</a>
    </nav>
<!-- 
    <button id = "feedback">
    feedback
    </button> -->
</div>


<style>

 

    .footerStyle{   
        border-radius: 5px;
        background-color: skyblue;
        padding : 2em;
        font-weight: bold;
        font-size: large;
        line-height: 1.5;
        text-align: center;
        display : flex;
        flex-direction: column;
        min-height: 1vh;
        margin-top: auto;
    
        /* position: fixed;
        left: 0;
        bottom: 0;
        width: 100%; */
    }
    nav a{
        padding: 20px;
        text-decoration: none;
        color:black;
        flex: 1;
    }
    nav a:hover{
        text-decoration: underline;
        color: red;
        background-color: #dddd;
        border-radius: 5px;

    }
    
    /* #feedback{
        
    } */

    

</style>