<script>
    export let data;
</script>

<div class="container">
    <div class="title">
        <h1>SCADE</h1>
    </div>

    <div class="right">
        <form method="POST" action="?/login">
            <h2>Login</h2>
            username<input name="username" type="username" required>
            password<input name="password" type="password" required>
            <button formaction="?/login">login</button>
        </form>
    </div>
</div>



<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container {
        display: flex;
        width: 100%;
        height: 100vh;
        flex-wrap: wrap;
    }
    .title {
        background-color: rgb(40, 51, 122);
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }
    .right {
        flex: 1;
        background-color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    form {
        width: 100%;
        max-width: 400px;
        padding: 20px;
        background-color: white;
        border: 3px solid #20538c;
        display:flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
    }
    form input {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
    }
    form button {
        width: 100%;
        padding: 10px;
        background-color: rgb(40, 51, 122);
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
    }
    form button:hover {
        background-color: rgb(30, 41, 92);
    }

    h1 {
        color: white;
        font-family: "Times New Roman", Times, serif;
        font-weight: lighter;
        font-size: 5rem;
        margin: 0;
    }



    /* Mobile phone Design */
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }

      .title h1 {
        font-size: 3rem;
      }

      .right {
        flex: none;
        width: 100%;
        padding: 15px;
      }

      .login-box {
        max-width: 350px;
        margin: 0 auto;
      }

      .title {
        flex: none;
        width: 100%;
        padding: 20px;
        order: -1;
      }
    }
</style>