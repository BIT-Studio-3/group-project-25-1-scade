
<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte'

</script>

<Header headingTitle="Contact us!" />

<form action="">
    <label for="name">Name
        <input type="text" id="name">
    </label>
    <label for="email">Email
        <input type="email" id="email">
    </label>
    <label for="message">Your message</label>
    <textarea name="message" id="meddage"></textarea>
</form>

<Footer year={2024} />

<style>
    form {
        display: flex;
        flex-direction: column;
    }
</style>