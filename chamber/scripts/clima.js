const apiKey = " 1e5f9a2af76d27360ce58621f8cd549c "; 
const lat = "-1.6657379890742887,"; 
const lon = "-78.65613227132728"; 
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;


async function getWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (!response.ok) throw new Error("Error fetching weather data");

        const data = await response.json();

       
        const temperature = Math.round(data.main.temp); 
        const weatherDescription = data.weather[0].description;
        const weatherIcon = data.weather[0].icon;

       
        document.getElementById("current-weather").innerHTML = `
            <p><strong>Now</strong></p>
            <p>${temperature}°F - ${weatherDescription}</p>
            <img src="https://openweathermap.org/img/wn/${weatherIcon}@4x.png" alt="Weather icon">
        `;
    } catch (error) {
        console.error("Error retrieving current weather data:", error);
    }
}


async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error("Error fetching weather forecast");

        const data = await response.json();
        const forecastContainer = document.getElementById("weather-forecast");


   
        const forecastDays = new Map();
        
        for (let i = 0; i < data.list.length; i++) {
            const dayData = data.list[i];
            const date = new Date(dayData.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });

            if (!forecastDays.has(date)) {
                forecastDays.set(date, {
                    temp: Math.round(dayData.main.temp), 
                    icon: dayData.weather[0].icon,
                    description: dayData.weather[0].description
                });
            }

            if (forecastDays.size === 3) break; 
        }

       
        forecastDays.forEach((value, key) => {
            forecastContainer.innerHTML += `
                <div class="forecast-item">
                    <p><strong>${key}</strong></p>
                    <img src="https://openweathermap.org/img/wn/${value.icon}@2x.png" alt="Weather icon">
                    <p>${value.temp}°F - ${value.description}</p>
                </div>
            `;
        });

    } catch (error) {
        console.error("Error retrieving weather forecast:", error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    getWeather();
    getForecast();
});
