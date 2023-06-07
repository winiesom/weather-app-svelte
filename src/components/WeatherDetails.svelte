<script>
    import WeatherStore from "../store/WeatherStore.js";
    import Card from "../assets/Card.svelte";
    import Button from  "../assets/Button.svelte";
    
    export let city;

    // Delete a city
    const handleDeleteWeather = (id) => {
        WeatherStore.update(currentData => {
            return currentData.filter(city => city.id !== id)
        })
    }
</script>

<Card>
    <div class="city">
    <h3>{city.name}</h3>

    <div class="details">
        <div class="weather">
            <div>
                <img src={`http://openweathermap.org/img/wn/${city.icon}.png`} alt="Weather Icon" class="weather-icon" /> 
            </div>
            <div class="weather-text">
                {city.weather}
            </div>
        </div>
        <div class="content">
            <div class="description">
                <div>{city.description}</div>
            </div>
            <div class="temperature">
                <div>Temperature: {city.temperature}</div>
            </div>
            <div class="humidity">
                <div>Humidity: {city.humidity}</div>
            </div>
        </div>

    </div>
    <div class="delete">
        <Button type="delete" on:click={() => handleDeleteWeather(city.id)}>Delete</Button>
    </div>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }

    .city {
        cursor: pointer;
        text-transform: capitalize;
    }

    .details {
        margin: 10px auto;
        position: relative;
        font-size: 12px;
    }
    .details:hover {
        opacity: 0.6;
    }

    .weather {
        display: flex;
        flex-direction: row;
        margin: 0;
    }
    .weather-icon {
        height: 25px;
        width: 25px;
        margin-left: -5px;
    }
    .weather-text {
        margin-top: 5px;
        color: #888;
    }

    .content {
        color: #888;
    }
    .description, .temperature {
        margin-bottom: 10px;
    }

    .delete {
        margin-top: 20px;
        text-align:center;
    }


</style>