document.getElementById('getWeatherButton').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    if (!city) return alert('Please enter a city name!');

    const response = await fetch(`/api/v1/weather?city=${city}`);
    
    if (!response.ok) {
        const weatherDataDiv = document.getElementById('weather-data');
        weatherDataDiv.innerHTML = '<p>Could not fetch weather data</p>';
        return;
    }

    const data = await response.json();
    const weatherDataDiv = document.getElementById('weather-data');
    const { name, main, weather } = data;

    weatherDataDiv.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Weather: ${weather[0].description}</p>
    `;
});