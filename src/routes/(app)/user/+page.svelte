<script>
  function logout() {
    // Redirect to logout route on the server
    window.location.href = "/";
  }
</script>

<div class="container">
  <h1>Settings</h1>
  <p>User Options:</p>
  
  <div class="button-list">
    <button>Change Profile Picture</button>
    <button>My roles</button>
    <button>Change Password</button>
    <button on:click={logout}>Log Out</button>
  </div>
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

  .button-list {
    display: flex;
    margin-left: left;
    flex-direction:column;
    gap: 15px; /* Spacing between buttons */
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
