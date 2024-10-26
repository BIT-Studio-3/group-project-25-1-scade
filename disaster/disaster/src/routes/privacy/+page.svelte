<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';

</script>

<Header headingTitle="Privacy Policy" />

<article class = "privacyPolicy">
    
        <h2 id = "date">Effective Date: 25 October 2024</h2>

        <article class = "content">
            <h3>
                Introduction
            </h3>
            <p>
                This Privacy Policy outlines how thedisaster.org collects, uses, and protects your information when you visit our website thedisasters.com.
                <!-- make website into link later on -->
            </p>
      

        </article>

        <article class = "Information" >
            <h3> Information We Collect</h3>
            <section class = "information"></section>
            <h4>We may collect the following types of information:</h4>
            <ul>
                <li>Personal Information:</li>
                <ul>
                    <li>
                        Information that identifies you personally, such as your name, email address, and location, when you voluntarily provide it (e.g., signing up for newsletters or alerts).
                    </li>
                    </ul>
                
                    <li>Non-Personal Information:</li>
                <ul>
                    <li>Data that does not identify you personally, such as browser type, device information, and website usage statistics collected through cookies and analytics tools.</li>

                </ul>
                </ul>      
        </article>

        <article class = "content" >
            <h3> How We Use Your Information</h3>
            <p>
                We may use the information we collect for the following purposes:
                To provide and maintain our services, including real-time weather updates and disaster alerts.
                To communicate with you, including responding to inquiries and sending relevant information.
                To improve our website and services based on user feedback and analytics.
            </p>
        </article>
        <article class = "content" >
            <h3> Cookies and Tracking Technologies</h3>
            <p>
                We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
            </p>
        </article>
        <article class = "content" >
            <h3>Data Sharing and Disclosure</h3>
            <p>
                We do not sell, rent, or lease your personal information to third parties. We may share your information with:
                Service providers who assist us in operating our website and conducting our business (e.g., hosting, analytics).
                Law enforcement or regulatory authorities if required by law.
           </p>
        </article>
        <article class = "content" >
            <h3>Data Security</h3>
            <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.

           </p>
        </article>
        <article class = "content" >
            <h3>Your Rights</h3>
            <p>
                You have the right to:
                Access your personal information.
                Request corrections to your information.
                Opt out of receiving promotional communications.
           </p>
        </article>
        <article class = "content" >
            <h3>Changes to This Privacy Policy</h3>
            <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with a new effective date.
           </p>
        </article>
</article>

<details>
    <summary class ="contact">Contact us</summary>
   
    <address>
        <a href="thedisatsers@gmail.com">thedisatsers@gmail.com</a><br>
        <a href="tel 022 222 2222">022 222 2222</a>
      </address>

  </details>

<Footer year={2024} />

<style>

    .contact{
      color: #2980b9;
      font-size: larger;
      cursor: pointer;
    }
    #date{
      
    }
    .privacyPolicy {
        max-width: 800px; 
        padding: 20px;
        border-radius: 8px; 
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);    
    }
    h2, h3 {
        color: #1c272f;
        margin-bottom: 15px; 
    }
    p {
        line-height: 1.6;
        margin: 10px 0; 
    }
    ul {
        line-height: 1.6;
        margin: 10px 0;  
    }
  


    
  


</style>