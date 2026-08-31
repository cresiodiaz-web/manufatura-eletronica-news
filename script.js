// Atualize a função fetchWeatherByCoords para usar forecast-item
async function fetchWeather() {
    try {
        let lat = -23.5505, lon = -46.6333;
        if (navigator.geolocation) {
            try {
                const pos = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
                });
                lat = pos.coords.latitude;
                lon = pos.coords.longitude;
            } catch(e) {}
        }
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=5`);
        const data = await res.json();
        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weather_code;
        const emoji = getWeatherEmoji(code);
        
        if ($('header-temp')) $('header-temp').textContent = `${temp}°C`;
        if ($('header-weather-icon')) $('header-weather-icon').textContent = emoji;
        if ($('weather-temp')) $('weather-temp').textContent = `${temp}°C`;
        if ($('weather-icon')) $('weather-icon').textContent = emoji;
        if ($('weather-desc')) $('weather-desc').textContent = getWeatherDesc(code);
        if ($('sidebar-weather-temp')) $('sidebar-weather-temp').textContent = `${temp}°C`;
        if ($('sidebar-weather-icon')) $('sidebar-weather-icon').textContent = emoji;
        
        try {
            const g = await fetch(`https://geocoding-api.open-meteo.com/v1/search?latitude=${lat}&longitude=${lon}&count=1&language=pt&format=json`);
            const gd = await g.json();
            if (gd.results && gd.results[0]) {
                const loc = gd.results[0].name;
                if ($('header-location')) $('header-location').textContent = loc;
                if ($('weather-location')) $('weather-location').textContent = `📍 ${loc}`;
                if ($('sidebar-weather-location')) $('sidebar-weather-location').textContent = `📍 ${loc}`;
            }
        } catch(e) {}
        
        const fc = $('weather-forecast');
        if (fc) {
            fc.innerHTML = '';
            const dias = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
            for (let i = 0; i < data.daily.time.length && i < 5; i++) {
                const d = new Date(data.daily.time[i]);
                fc.innerHTML += `<div class="forecast-item"><span>${dias[d.getDay()]}</span><br><span>${getWeatherEmoji(data.daily.weather_code[i])}</span><br><span>${Math.round(data.daily.temperature_2m_max[i])}°/${Math.round(data.daily.temperature_2m_min[i])}°</span></div>`;
            }
        }
    } catch(e) {}
}
