# Lesson 12 — Working with APIs (OpenWeatherMap)

This folder provides two helpful things:

1. openweather-example.js — a Node.js example showing how to call the OpenWeatherMap Current Weather API. It expects your API key in the OPENWEATHER_API_KEY environment variable. Example:

   OPENWEATHER_API_KEY=your_key node exercises/lesson-12/openweather-example.js London

2. weather-dashboard/ — a small static frontend you can open locally (or serve) that lets you paste your OpenWeatherMap API key into the UI and query city weather.

How to run the dashboard locally
- You can open exercises/lesson-12/weather-dashboard/index.html directly in some browsers, but due to CORS and security it's recommended to serve it with a simple local server. From the repo folder run:
  - python -m http.server 8000
  - or: npx serve exercises/lesson-12/weather-dashboard
- Then open http://localhost:8000/exercises/lesson-12/weather-dashboard/index.html (adjust port as needed)

Security note
- Do NOT commit your API key to a public repository. The dashboard stores your key in localStorage for convenience — that keeps it out of the repo but the value will remain in the browser.

