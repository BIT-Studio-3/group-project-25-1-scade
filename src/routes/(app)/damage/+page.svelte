<svelte:head>
    <title>Damage Database</title>
</svelte:head>
<script>
  export let data;
  let damageRecords = data.damageRecords;

  let showForm = false;




      showForm = false;


  // Toggle form visibility
  function toggleForm() {
    showForm = !showForm;
  }

</script>

<div class="container">
  <h2>Damage Records</h2>

  <!-- Button to open the form -->
  <button class="add-btn" on:click={toggleForm}>Add New Damage Report</button>

  <!-- Damage Records Table -->
  <div class="table-container">
    <table class="damage-table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Damage</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {#each damageRecords as record}
          <tr>
            <td>{record.time}</td>
            <td>{record.damage}</td>
            <td>{record.location}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- Popup Form -->
  {#if showForm}
    <div class="popup-overlay">
      <div class="popup">
        <h3>Add New Damage Report</h3>
        <form method="POST" action="?/submit">
          Time<input name="time" type="time" required>
          Damage<input name="damage" type="text" placeholder="Describe the damage" required>
          Location<input name="location" type="text" placeholder="Enter the location" required>
          <button formaction="?/addDamage">Submit</button>
          <button type="button" class="close-btn" on:click={toggleForm}>Close</button>
        </form>
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    color: #333;
  }

  .add-btn {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: block;
    margin: 20px auto;
    font-size: 1rem;
    transition: background-color 0.3s;
  }

  .add-btn:hover {
    background-color: #45a049;
  }

  .table-container {
    margin-top: 20px;
    overflow-x: auto;
  }

  .damage-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .damage-table th, .damage-table td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
  }

  .damage-table th {
    background-color: #f9f9f9;
    color: #333;
  }

  .damage-table tr:nth-child(even) {
    background-color: #f7f7f7;
  }

  .damage-table tr:hover {
    background-color: #f1f1f1;
  }

  /* Popup Style */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .popup {
    background: white;
    padding: 30px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .popup h3 {
    text-align: center;
    color: #333;
  }

  .form label {
    font-size: 1rem;
    margin-bottom: 8px;
    display: block;
    color: #5f6368;
  }

  .form input {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
  }

  .form input:focus {
    border-color: #4CAF50;
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
    font-size: 1.1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .submit-btn:hover {
    background-color: #45a049;
  }

  .close-btn {
    margin-top: 10px;
    background-color: #f44336;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
  }

  .close-btn:hover {
    background-color: #f32f1f;
  }

  .error {
    color: #ff3b30;
    font-size: 1rem;
    text-align: center;
    margin-top: 10px;
  }
</style>
