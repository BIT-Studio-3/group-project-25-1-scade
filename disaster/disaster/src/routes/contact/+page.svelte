
<!--Contact page-->
<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte'

function myAlert(){
  alert("Hi your message has been sent")
}


</script>

<Header headingTitle="Contact us!" />

<form action="">
  <label for="email">Email
    <input type="email" id="email" placeholder="Your email.." required>
</label>

    <label for="First name"> First Name
        <input type="text" id="fname" placeholder="Your name.." required>
    </label>

    <label for="Last name"> Last Name
        <input type="text" id="lname" placeholder="Your  last name.." required>
    </label>

   
    <label for="message">Your message</label>
    <textarea name="message" id="message" required></textarea>

    <input type="submit" value = "Submit" >
</form>

<Footer year={2024} />

<style>
   form {
        display: flex;
        flex-direction: column;
        padding: 12px;
    } 
    
    input[type=text],input[type = email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=submit] {
  background-color:salmon;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: salmon;
}

</style>