const apiKey = '49a3c6f98b02b2afaef6a8b91d7b1b14';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const cityName = document.getElementById('cityInput').value;

    if (!cityName) {
        alert('Please enter a city name');
        return;
    }

    fetch(`${apiUrl}?q=${cityName}&units=metric&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temperature').innerText = data.main.temp;
            document.getElementById('weatherDesc').innerText = data.weather[0].description;
            document.getElementById('humidity').innerText = data.main.humidity;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });
}
