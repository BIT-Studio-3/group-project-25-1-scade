<script>
  import Header from "$lib/Header.svelte";
  import Image from "$lib/Image.svelte";
  let email = "";
  let message = "";
</script>

<Header headingTitle="About" />

<p> 
Scade stands for <b>System for Climate Alerts, Disasters, and Emergencies</b>.<br>
Our mission is to build a sustainable weather API platform. <br>
The lack of a pre-existing system within the New Zealand government inspired us to develop this application. <br>
</p>
<p>
  This website is designed for the use of New Zealand emergency responders. <br>
  Scade may also be applicable to relevant responders such as council members.
</p>

<p>If you wish to contact us, please use the contact form below.</p>
<form method="POST">
	<label>
		Your Email
		<input name="email" type="email">
	</label>
  <br>
	<label>
		Your Message
		<textarea name="message" bind:value={message} placeholder="Enter your message here..."></textarea>
	</label>
	<button>Submit</button>
</form>

<style>
  p {
  margin-bottom: 20px;
}
  form{
    margin-bottom: 20px;
    display: flexbox;
  }
  .email{
    margin-bottom: 20px;
  }
  .message{
    margin-bottom: 20px;
  }
  
</style>
