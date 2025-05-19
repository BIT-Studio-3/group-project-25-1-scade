<svelte:head>
    <title>Damage Records Database</title>
</svelte:head>
<script>
  import { onMount } from 'svelte';
  import Header from '$lib/Header.svelte';

  let damages = [];
  let time = '';
  let damage = '';
  let location = '';
  let error = '';

  // Fetch damage records from the API
  async function fetchDamages() {
    const res = await fetch('/damage');
    damages = await res.json();
  }

  // Submit a new damage report via the API
  async function submitDamage() {
    const res = await fetch('/damage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ time, damage, location })
    });

    if (res.status === 201) {
      await fetchDamages();
      time = '';
      damage = '';
      location = '';
      error = '';
    } else {
      const data = await res.json();
      error = data.message || data.error;
    }
  }

  // On page load, fetch the damage records
  onMount(fetchDamages);
</script>

<div class="top-of-body">
  <h2><Header headingTitle="Damage Records" /></h2>

  <div class="center-table">
    <form on:submit|preventDefault={submitDamage}>
      <label>
        Time
        <input bind:value={time} type="time" required />
      </label>

      <label>
        Damage
        <input bind:value={damage} type="text" required />
      </label>

      <label>
        Location
        <input bind:value={location} type="text" required />
      </label>

      <button type="submit">Submit</button>
      {#if error}
        <p style="color:red">{error}</p>
      {/if}
    </form>

    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Damage</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {#each damages as { damage, location, time }}
          <tr>
            <td>{time}</td>
            <td>{damage}</td>
            <td>{location}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
