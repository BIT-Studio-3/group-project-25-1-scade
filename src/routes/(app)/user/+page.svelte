<svelte:head>
    <title>About</title>
</svelte:head>
<script>
    
</script>
<div class="container">
  <h1>Settings </h1>
  <!--form method="POST" action="?/ChangeProfilePicture"></form>
  <form method="POST" action="?/roles"></form>
  <form method="POST" action="?/logout"></form>-->

  <form method="POST" action="?/logout">
    <button formacation="?/logout">logout</button>
  </form>
  
  
<img src="/images/profilepicture.png" alt="Profile Picture" />


</div>

<style>
  .container {
    max-width: 50%;
    margin: 0 auto;
    padding: 25%;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  p {
    margin-bottom: 20px;
    line-height: 1.6;
  }

  form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 100%;
    gap: 10px;
  }

  input,
  textarea {
    margin-bottom: 12px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    font-size: 1rem;
  }

  textarea {
    min-height: 120px;
  }

  button {
    width: fit-content;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 4px;
    border: none;
    background-color: #007ACC;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #005fa3;
  }
</style>
