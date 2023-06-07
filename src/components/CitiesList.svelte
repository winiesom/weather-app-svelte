<script>
    import { fade, scale } from "svelte/transition";
    import WeatherStore from  "../store/WeatherStore.js";
    import WeatherDetails from './WeatherDetails.svelte';


</script>

<div class="cities-list">
    {#each $WeatherStore as city (city.id)}
    <div in:scale out:fade>
        <WeatherDetails {city} />
    </div>
    {/each}
</div>

<style>
    .cities-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }

    @media (min-width: 400px) and (max-width: 600px) {
        .cities-list {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 100px) and (max-width:399px) {
        .cities-list {
            grid-template-columns: 1fr;
        }
    }
</style>