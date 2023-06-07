import { writable } from "svelte/store";

const WeatherStore = writable([
    {
        id: 1,
        name: "korea",
        icon: "01d",
        weather: "clear",
        description: "clear sky",
        temperature: "24.08",
        humidity: "37",
        datetime: "28-05-2023 08:42am"
    }
]);

export default WeatherStore;