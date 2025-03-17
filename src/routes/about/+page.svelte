<script>
  import Header from "$lib/Header.svelte";
  import Image from "$lib/Image.svelte";
  import homepic from "$lib/Weather.jpg";
</script>

<Header headingTitle="About Page" />

<h2>About Us:</h2>
<h3>Our Mission</h3>
<p>
  To Give weather related information to various disaster response groups, to
  help them remain informed about what is happening at all times.
</p>
<h3>Who We Are</h3>
<p>
  We are a bunch of people working hard to bring you a working disaster API to
  help those who are helping others.
</p>
<h3>What We Do</h3>
<p>We do be trying to make weather do the thing. Science Yo!</p>

<div id="group">
  <h3>Our Members:</h3>

  <div class="members">
    <div class="imageContainer">
      <Image
        pic={homepic}
        picname={"cover"}
        picheight={"300px"}
        picwidth={"250px"}
      />
    </div>
    <div class="name"><p>Zandar</p></div>
  </div>

  <div class="members">
    <div class="imageContainer">
      <Image
        pic={homepic}
        picname={"cover"}
        picheight={"300px"}
        picwidth={"250px"}
      />
    </div>
    <div class="name"><p>Aston</p></div>
  </div>

  <div class="members">
    <div class="imageContainer">
      <Image
        pic={homepic}
        picname={"cover"}
        picheight={"300px"}
        picwidth={"250px"}
      />
    </div>
    <div class="name"><p>Hazel</p></div>
  </div>

  <div class="members">
    <div class="imageContainer">
      <Image
        pic={homepic}
        picname={"cover"}
        picheight={"300px"}
        picwidth={"250px"}
      />
    </div>
    <div class="name"><p>Saskia</p></div>
  </div>

  <div class="members">
    <div class="imageContainer">
      <Image
        pic={homepic}
        picname={"cover"}
        picheight={"300px"}
        picwidth={"250px"}
      />
    </div>
    <div class="name"><p>Joanne</p></div>
  </div>
</div>
<br />
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

  <label for="message">Your message / Feedback</label>
  <textarea name="message" id="message" required></textarea>

  <input type="submit" value="Submit" />
</form>
<style>
  .members {
    display: inline-block;
    width: 150px;
    height: 200px;
    text-align: center;
    margin-right: 100px;
    margin-left: 100px;
  }
  .name {
    display: block;
    text-align: center;
    padding-left: 100px;
  }

  .imageContainer {
    width: 100%;
    display: block;
    padding-right: 100px;
    padding-left: 10px;
  }
  *{
    margin: 10px;
  }
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
    background-color: rgb(40, 51, 122);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background-color: rgb(57, 72, 167);
  }

  input:invalid:required,
  textarea:invalid:required {
    background-color: ivory;
    border: none;
    outline: 2px solid rgb(40, 51, 122);
    border-radius: 5px;
  }

  @media screen and (max-width: 600px) {
    input[type="submit"] {
      width: 100%;
      margin-top: 0;
    }
  }
</style>
