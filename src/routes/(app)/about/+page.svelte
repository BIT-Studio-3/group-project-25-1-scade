<script>
  import Header from "$lib/Header.svelte";
  import Image from "$lib/Image.svelte";
  
  let name = "";
  let email = "";
  let message = "";
</script>

<div class="container">
  <Header headingTitle="About" />

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

  <form method = "POST">
    <label for="name">Your Name</label><br />
    <input id="name" name="name" type="text" bind:value={name} required /><br />

    <label for="email">Your Email</label><br />
    <input id="email" name="email" type="email" bind:value={email} required /><br />

    <label for="message">Message</label><br />
    <textarea id="message" name="message" bind:value={message} required></textarea><br />

    <button type="submit">Submit</button>
  </form>

</div>

<style>
  .container {
    max-width: 700px;
    margin: 0 auto;
    padding: 2rem;
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
