<script>
    import WeatherStore from  "../store/WeatherStore.js";
    import { createEventDispatcher } from 'svelte';
    import Button from '../assets/Button.svelte';

    let dispatch = createEventDispatcher();
    let cityName = { name: "" };
    let errors = "";
    let valid = false;

    let newCity = ""

    const appId = "e5bf3314efaa390b4b8da3566cd4d990";

    const getCityWeather = () => {
        return `http://api.openweathermap.org/data/2.5/weather?q=${cityName.name}&appid=${appId}&units=metric`
    }

    const handleSubmit = async () => {
        valid = true;

        if (cityName.name === "") {
            valid = false;
            errors = "City name cannot be empty";
        } else {
            errors = "";
            try {
                const res = await fetch(getCityWeather());

                if (res.status === 404) {
                    errors = "Invalid city name"
                }
                const data = await res.json();
                newCity = data;
            } catch (error) {
                console.log(error, 'erryr')
            }
        }

        if (valid) {
            let city = {
                ...cityName, 
                weather: newCity.weather[0].main, 
                icon: newCity.weather[0].icon, 
                description: newCity.weather[0].description, 
                temperature: newCity.main.temp, 
                humidity: newCity.main.humidity, 
                id: Math.random(),
                datetime: Date.now()
            };

            // save data to store
            WeatherStore.update(currentData => {
                return [city, ...currentData];
            })
            dispatch('add');
        }
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div class="form-field">
        <div>
            <label for="city">Enter a city:</label>
            <input type="text" id="city" bind:value={cityName.name} />
        </div>
        <Button>Add City</Button>
    </div>
    <div class="error">{ errors }</div>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .form-field {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    label {
        margin-bottom: 5px;
        color: #777;
    }

    input {
        outline: none;
        font-size: 14px;
        color: #777;
    }

    .error {
        text-align: left;
        color: red;
        font-size: 11px;
    }

</style>