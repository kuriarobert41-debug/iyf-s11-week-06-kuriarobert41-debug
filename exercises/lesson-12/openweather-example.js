// exercises/lesson-12/openweather-example.js
// Example of calling OpenWeatherMap API from Node.js.
// This script expects the API key to be available as the OPENWEATHER_API_KEY environment variable.

const API_KEY = process.env.OPENWEATHER_API_KEY;
if (!API_KEY) {
  console.error('ERROR: set OPENWEATHER_API_KEY in your environment to run this example.\nExample: OPENWEATHER_API_KEY=your_key node openweather-example.js');
  process.exit(1);
}

const city = process.argv[2] || 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

// Node 18+ has global fetch. If you run an older Node, install node-fetch and uncomment the require below.
// const fetch = require('node-fetch');

(async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
    const data = await res.json();
    console.log(`Weather for ${data.name}, ${data.sys.country}:`);
    console.log(`  ${data.weather[0].main} — ${data.weather[0].description}`);
    console.log(`  Temperature: ${data.main.temp} °C`);
  } catch (err) {
    console.error('Fetch error:', err.message);
  }
})();
