<script>
    import Header from '$lib/Header.svelte';
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

<style>
    form {
        display: flex;
        flex-direction: column;
    }
</style>