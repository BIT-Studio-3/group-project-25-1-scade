<script>
  function logout() {
    // Redirect to logout route on the server
    window.location.href = "/";
  }
</script>

<div class="container">
  <h1>Settings</h1>

  <div class="content-wrapper">
    <div class="button-list">
      <button>Change Profile Picture</button>
      <button>My roles</button>
      <button>Change Password</button>
      <button>Notification Preferences</button>
      <button on:click={logout}>Log Out</button>
    </div>

    <img src="/images/profilepicture.png" alt="User Profile" class="profile-pic" />
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

  .content-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px; /* Space between buttons and image */
  }

  .button-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .profile-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccc;
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
