// exercises/lesson-12/weather-dashboard/app.js
// Simple frontend that fetches from OpenWeatherMap.
// It stores the API key in localStorage so you don't need to edit files.

const apiKeyInput = document.getElementById('apiKeyInput');
const saveKeyBtn = document.getElementById('saveKey');
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const resultEl = document.getElementById('result');

// Load saved key
const SAVED_KEY = localStorage.getItem('OPENWEATHER_API_KEY') || '';
apiKeyInput.value = SAVED_KEY;

saveKeyBtn.addEventListener('click', () => {
  const key = apiKeyInput.value.trim();
  if (!key) return alert('Please paste your OpenWeatherMap API key.');
  localStorage.setItem('OPENWEATHER_API_KEY', key);
  alert('API key saved to localStorage.');
});

searchBtn.addEventListener('click', () => {
  const key = localStorage.getItem('OPENWEATHER_API_KEY') || apiKeyInput.value.trim();
  if (!key) return alert('No API key found — paste it above and click Save key.');
  const city = cityInput.value.trim();
  if (!city) return alert('Enter a city name.');
  fetchWeather(city, key);
});

async function fetchWeather(city, apiKey) {
  resultEl.innerHTML = 'Loading...';
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const data = await res.json();
    renderWeather(data);
  } catch (err) {
    resultEl.innerHTML = `<strong>Error:</strong> ${err.message}`;
  }
}

function renderWeather(data) {
  resultEl.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>${data.weather[0].main}</strong> — ${data.weather[0].description}</p>
    <p>Temperature: <strong>${data.main.temp} °C</strong></p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p><small>Data from OpenWeatherMap</small></p>
  `;
}
