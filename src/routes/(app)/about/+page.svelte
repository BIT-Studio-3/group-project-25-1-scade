<svelte:head>
    <title>About</title>
</svelte:head>

<div class="container">
  <h1>About </h1>

  <p>
    Scade stands for <strong>System for Climate Alerts, Disasters, and Emergencies</strong>.<br />
    Our mission is to build a sustainable weather API platform. <br />
    The lack of a pre-existing system within the New Zealand government inspired us to develop this application.
  </p>

  <p>
    This website is designed for the use of New Zealand emergency responders. <br />
    Scade may also be applicable to relevant responders such as council members.
  </p>

  <p>If you wish to contact us, please use the contact form below.</p>

  <form method="POST" action="?/login">
    Name<input name="name" type="name" required> 
    Email<input name="email" type="email" required> 
    Type your message here<textarea name="message" required rows="5" cols="30"></textarea>
    <button formaction="?/submit">Submit</button>
  </form>

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
