<script>
  import { onMount } from 'svelte';
  import '@arcgis/core/assets/esri/themes/light/main.css';

  export let data;
  let disasters = data.data.features;

  let mapContainer;

  onMount(async () => {
    if (typeof window === 'undefined') return; // SSR guard

    const [MapView, WebMap] = await Promise.all([
      import('@arcgis/core/views/MapView'),
      import('@arcgis/core/WebMap')
    ]);

    const view = new MapView.default({
      container: mapContainer,
      map: new WebMap.default({
        basemap: 'streets-vector',
      }),
      center: [-90.1928, 38.6226],
      zoom: 15,
    });

    return () => view.destroy(); // cleanup
  });
</script>

<div class="dashboard-container">
  <!-- Sidebar with disaster cards -->
  <aside class="sidebar">
    <h2>Disaster Feed</h2>
    <div class="card-list">
      {#each disasters as disaster}
        <div class="disaster-card">
          <h3>{disaster.properties.locality}</h3>
          <p><strong>Time:</strong> {disaster.properties.time}</p>
          <p><strong>Magnitude:</strong> <span class="magnitude">{disaster.properties.magnitude}</span></p>
        </div>
      {/each}
    </div>
  </aside>

  <!-- Map area -->
  <main class="map-area">
    <div class="view" bind:this={mapContainer}></div>
  </main>
</div>

<style>

  .map-area {
    flex: 1;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    padding: 0;
    height: 100%;
  }

  .view {
      height: 90%;
      width: 100%;
    }

  /* Layout container */
  .dashboard-container {
    display: flex;
    height: 100vh;
    background: #f4f7f9;
    font-family: 'Segoe UI', sans-serif;
  }

  /* Sidebar */
  .sidebar {
    width: 30%;
    min-width: 280px;
    background: #ffffff;
    border-right: 1px solid #dcdcdc;
    padding: 1.5rem;
    overflow-y: auto;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  }

  .sidebar h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1d3557;
  }

  .card-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .disaster-card {
    background: #ececf3;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: 0.2s ease-in-out;
  }

  .disaster-card:hover {
    transform: translateY(-3px);
    background: #e4e4ef;
  }

  .magnitude {
    color: #e63946;
    font-weight: bold;
  }

  /* Map section */
  .map-area {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .map-placeholder {
    width: 100%;
    height: 90%;
    border-radius: 15px;
    background-color: #a8dadc;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1d3557;
    font-size: 1.5rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
</style>
