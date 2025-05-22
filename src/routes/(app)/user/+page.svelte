<script>
  function logout() {
    // Redirect to logout route on the server
    window.location.href = "/";
  }
</script>

<div class="container">
    <p>User Options:</p>
    <button on:click={logout}>
    Log out
    </button>
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
