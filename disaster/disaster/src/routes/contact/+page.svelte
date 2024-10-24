<!--Contact page-->
<script>
    import Header from '$lib/Header.svelte';
</script>

<Header headingTitle="Contact us!" />

<form action="">
  <label for="email"
    >Email
    <input type="email" id="email" placeholder="Your email.." required />
  </label>

  <label for="First name">
    First Name
    <input type="text" id="fname" placeholder="Your name.." required />
  </label>

  <label for="Last name">
    Last Name
    <input type="text" id="lname" placeholder="Your  last name.." required />
  </label>

  <label for="region">Region</label>
  <select>
    <option value="auckland">Auckland</option>
    <option value="Bay of Plenty">Bay of Plenty</option>
    <option value="northland">Northland</option>
    <option value="Waikato">Waikato</option>
    <option value="Canterbury">Canterbury</option>
    <option value=" Gisborne">Gisborne</option>
    <option value="Hawke's Bay">Hawke's Bay</option>
    <option value="Manawatū-Whanganui">Manawatū-Whanganui</option>
    <option value="Marlborough">Marlborough</option>
    <option value="Nelson">Nelson</option>
    <option value="Otago">Otago</option>
    <option value="Southland">Southland</option>
    <option value="Taranaki">Taranaki</option>
    <option value="Tasman">Tasman</option>
    <option value="Wellington">Wellington</option>
    <option value="West Coast">West Coat</option>
  </select>

  <label for="message">Your message</label>
  <textarea name="message" id="message" required></textarea>

  <input type="submit" value="Submit" />
</form>


<style>
  form {
    display: flex;
    flex-direction: column;
    padding: 12px;
  }

  input[type="text"],
  input[type="email"],
  textarea,
  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }
  input[type="submit"] {
    background-color: salmon;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background-color: salmon;
  }

  input:invalid:required,
  textarea:invalid:required {
    background-color: ivory;
    border: none;
    outline: 2px solid red;
    border-radius: 5px;
  }

  @media screen and (max-width: 600px) {
   
    input[type="submit"] {
      width: 100%;
      margin-top: 0;
    }
  }
</style>
