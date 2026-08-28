// ============================================
// PORTAL MANUFATURA ELETRÔNICA NEWS
// Script completo com feeds, APIs e produtos
// ============================================

const feeds = [
    // ===== GERAL - Brasileiras =====
    { source: 'Inovação Tecnológica', url: 'https://www.inovacaotecnologica.com.br/rss.xml', color: '#2a5298', category: 'Geral', region: 'nacional' },
    { source: 'Canaltech', url: 'https://canaltech.com.br/rss/', color: '#1e88e5', category: 'Geral', region: 'nacional' },
    { source: 'Olhar Digital', url: 'https://olhardigital.com.br/feed/', color: '#00bfa5', category: 'Geral', region: 'nacional' },
    { source: 'Tecmundo', url: 'https://www.tecmundo.com.br/rss', color: '#ff6f00', category: 'Geral', region: 'nacional' },
    // ===== GERAL - Internacionais =====
    { source: 'MIT Technology Review', url: 'https://www.technologyreview.com/feed/', color: '#d32f2f', category: 'Geral', region: 'internacional' },
    { source: 'Wired', url: 'https://www.wired.com/feed/rss', color: '#000000', category: 'Geral', region: 'internacional' },
    { source: 'Ars Technica', url: 'https://feeds.arstechnica.com/arstechnica/index', color: '#ff4e00', category: 'Geral', region: 'internacional' },

    // ===== EMBARCADOS - Brasileiras =====
    { source: 'Embarcados', url: 'https://www.embarcados.com.br/feed/', color: '#e67e22', category: 'Embarcados', region: 'nacional' },
    { source: 'Portal Vida de Silício', url: 'https://portal.vidadesilicio.com.br/feed/', color: '#16a085', category: 'Embarcados', region: 'nacional' },
    { source: 'FilipeFlop', url: 'https://www.filipeflop.com/blog/feed/', color: '#e74c3c', category: 'Embarcados', region: 'nacional' },
    // ===== EMBARCADOS - Internacionais =====
    { source: 'Hackaday', url: 'https://hackaday.com/blog/feed/', color: '#f4b400', category: 'Embarcados', region: 'internacional' },
    { source: 'Embedded.com', url: 'https://www.embedded.com/feed/', color: '#005596', category: 'Embarcados', region: 'internacional' },
    { source: 'Adafruit Blog', url: 'https://blog.adafruit.com/feed/', color: '#00a651', category: 'Embarcados', region: 'internacional' },

    // ===== INDÚSTRIA - Brasileiras =====
    { source: 'ABINEE', url: 'https://www.abinee.org.br/feed/', color: '#1e3c72', category: 'Indústria', region: 'nacional' },
    { source: 'Revista Eletrônica', url: 'https://www.revistaeletronica.com.br/feed/', color: '#c0392b', category: 'Indústria', region: 'nacional' },
    { source: 'CIMM', url: 'https://www.cimm.com.br/rss/', color: '#2c3e50', category: 'Indústria', region: 'nacional' },
    // ===== INDÚSTRIA - Internacionais =====
    { source: 'Electronics Weekly', url: 'https://www.electronicsweekly.com/feed/', color: '#27ae60', category: 'Indústria', region: 'internacional' },
    { source: 'Electronics For You', url: 'https://www.electronicsforu.com/feed', color: '#d35400', category: 'Indústria', region: 'internacional' },
    { source: 'SMTnet', url: 'https://www.smtnet.com/rss/news.xml', color: '#8e44ad', category: 'Indústria', region: 'internacional' },

    // ===== PROJETOS - Brasileiras =====
    { source: 'Instituto NCB', url: 'https://www.institutoncb.com.br/feed/', color: '#d32f2f', category: 'Projetos', region: 'nacional' },
    { source: 'Eletrônica Geral', url: 'https://www.eletronicageral.com/feed/', color: '#1976d2', category: 'Projetos', region: 'nacional' },
    // ===== PROJETOS - Internacionais =====
    { source: 'All About Circuits', url: 'https://www.allaboutcircuits.com/rss/', color: '#8e44ad', category: 'Projetos', region: 'internacional' },
    { source: 'Electronic Design', url: 'https://www.electronicdesign.com/rss', color: '#2980b9', category: 'Projetos', region: 'internacional' },
    { source: 'EEWeb', url: 'https://www.eeweb.com/feed/', color: '#00796b', category: 'Projetos', region: 'internacional' },

    // ===== SEMICONDUTORES - Brasileiras =====
    { source: 'Chip Brasil', url: 'https://chipbrasil.com.br/feed/', color: '#5e35b1', category: 'Semicondutores', region: 'nacional' },
    // ===== SEMICONDUTORES - Internacionais =====
    { source: 'EETimes', url: 'https://www.eetimes.com/feed/', color: '#c0392b', category: 'Semicondutores', region: 'internacional' },
    { source: 'IEEE Spectrum', url: 'https://spectrum.ieee.org/feeds/topic/semiconductors.rss', color: '#006699', category: 'Semicondutores', region: 'internacional' },
    { source: 'Semiconductor Engineering', url: 'https://semiengineering.com/feed/', color: '#16a085', category: 'Semicondutores', region: 'internacional' },
    { source: 'AnandTech', url: 'https://www.anandtech.com/rss/', color: '#1a237e', category: 'Semicondutores', region: 'internacional' },

    // ===== AERONÁUTICA - Brasileiras =====
    { source: 'Aero Magazine', url: 'https://aeromagazine.uol.com.br/feed/', color: '#e74c3c', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Cavok Brasil', url: 'https://www.cavok.com.br/feed/', color: '#00695c', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Poder Aéreo', url: 'https://www.poderaereo.com.br/feed/', color: '#1a237e', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Defesa Aérea & Naval', url: 'https://www.defesaaereanaval.com.br/feed/', color: '#b71c1c', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Aeroin', url: 'https://aeroin.net/feed/', color: '#ff6f00', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Aeroflap', url: 'https://www.aeroflap.com.br/feed/', color: '#0277bd', category: 'Aeronáutica', region: 'nacional' },
    // ===== AERONÁUTICA - Internacionais =====
    { source: 'Aviation Week', url: 'https://aviationweek.com/rss.xml', color: '#2c3e50', category: 'Aeronáutica', region: 'internacional' },
    { source: 'FlightGlobal', url: 'https://www.flightglobal.com/rss', color: '#34495e', category: 'Aeronáutica', region: 'internacional' },
    { source: 'AINonline', url: 'https://www.ainonline.com/rss.xml', color: '#5d6d7e', category: 'Aeronáutica', region: 'internacional' },

    // ===== AUTOMOTIVA - Brasileiras =====
    { source: 'Automotive Business', url: 'https://www.automotivebusiness.com.br/feed/', color: '#c62828', category: 'Automotiva', region: 'nacional' },
    { source: 'AutoEsporte', url: 'https://autoesporte.globo.com/rss/feed.xml', color: '#1e88e5', category: 'Automotiva', region: 'nacional' },
    { source: 'Jornal do Carro', url: 'https://jornaldocarro.estadao.com.br/feed/', color: '#f57c00', category: 'Automotiva', region: 'nacional' },
    { source: 'Quatro Rodas', url: 'https://quatrorodas.abril.com.br/feed/', color: '#d32f2f', category: 'Automotiva', region: 'nacional' },
    { source: 'Motor Show', url: 'https://motorshow.com.br/feed/', color: '#1976d2', category: 'Automotiva', region: 'nacional' },
    { source: 'CarBlog', url: 'https://www.car.blog.br/feed/', color: '#f57c00', category: 'Automotiva', region: 'nacional' },
    { source: 'Auto Papo', url: 'https://autopapo.uol.com.br/feed/', color: '#7b1fa2', category: 'Automotiva', region: 'nacional' },
    // ===== AUTOMOTIVA - Internacionais =====
    { source: 'Autoblog', url: 'https://www.autoblog.com/rss.xml', color: '#d32f2f', category: 'Automotiva', region: 'internacional' },
    { source: 'Car and Driver', url: 'https://www.caranddriver.com/rss/all.xml', color: '#1565c0', category: 'Automotiva', region: 'internacional' },
    { source: 'Motor1', url: 'https://www.motor1.com/rss/news/all/', color: '#2e7d32', category: 'Automotiva', region: 'internacional' },
    { source: 'Automotive News', url: 'https://www.autonews.com/rss/feed.xml', color: '#4527a0', category: 'Automotiva', region: 'internacional' },

    // ===== BENS DE CONSUMO - Brasileiras =====
    { source: 'Techtudo', url: 'https://www.techtudo.com.br/rss/', color: '#c4170c', category: 'Bens de Consumo', region: 'nacional' },
    { source: 'Tudocelular', url: 'https://www.tudocelular.com/rss/', color: '#00a651', category: 'Bens de Consumo', region: 'nacional' },
    { source: 'Gizmodo Brasil', url: 'https://gizmodo.uol.com.br/feed/', color: '#00b0f0', category: 'Bens de Consumo', region: 'nacional' },
    { source: 'Tecnoblog', url: 'https://tecnoblog.net/feed/', color: '#e91e63', category: 'Bens de Consumo', region: 'nacional' },
    // ===== BENS DE CONSUMO - Internacionais =====
    { source: 'TechCrunch', url: 'https://techcrunch.com/feed/', color: '#00d26a', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'The Verge', url: 'https://www.theverge.com/rss/index.xml', color: '#fa4b2a', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'CNET', url: 'https://www.cnet.com/rss/news/', color: '#e50914', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'Engadget', url: 'https://www.engadget.com/rss.xml', color: '#7b0099', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'Tom\'s Hardware', url: 'https://www.tomshardware.com/feeds/all', color: '#c7254e', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'Android Central', url: 'https://www.androidcentral.com/feed', color: '#00c853', category: 'Bens de Consumo', region: 'internacional' },
    { source: '9to5Mac', url: 'https://9to5mac.com/feed/', color: '#555555', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'GSM Arena', url: 'https://www.gsmarena.com/rss-news-reviews.php3', color: '#d32f2f', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'TechRadar', url: 'https://www.techradar.com/rss', color: '#ff6600', category: 'Bens de Consumo', region: 'internacional' }
];

let allNews = [];
let activeRegion = 'all';
let isLoading = false;
let visibleDestaques = 10;
let visiblePorCategoria = 6;
const INCREMENTO_DESTAQUES = 10;
const INCREMENTO_CATEGORIA = 6;

// ===== PRODUTOS DE AFILIADOS (exemplo com Amazon Associates) =====
const produtosAfiliados = [
    {
        nome: 'Arduino Uno R3',
        preco: 'R$ 89,90',
        fonte: 'Amazon',
        imagem: 'https://m.media-amazon.com/images/I/61zWlVvzSGL._AC_SL1000_.jpg',
        link: 'https://www.amazon.com.br/dp/B008GRTSV6?tag=SEU_TAG_AQUI'
    },
    {
        nome: 'ESP32 Dev Board',
        preco: 'R$ 45,00',
        fonte: 'Amazon',
        imagem: 'https://m.media-amazon.com/images/I/61fYdUXh1XL._AC_SL1000_.jpg',
        link: 'https://www.amazon.com.br/dp/B07Q576VWZ?tag=SEU_TAG_AQUI'
    },
    {
        nome: 'Smartwatch Xiaomi',
        preco: 'R$ 299,00',
        fonte: 'Amazon',
        imagem: 'https://m.media-amazon.com/images/I/61vNjGrgOML._AC_SL1500_.jpg',
        link: 'https://www.amazon.com.br/dp/B09B3HMZFY?tag=SEU_TAG_AQUI'
    },
    {
        nome: 'Kit Sensores Arduino',
        preco: 'R$ 129,90',
        fonte: 'Amazon',
        imagem: 'https://m.media-amazon.com/images/I/71Xt5MJ5TUL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com.br/dp/B01M30ZW0G?tag=SEU_TAG_AQUI'
    },
    {
        nome: 'Raspberry Pi 4',
        preco: 'R$ 599,00',
        fonte: 'Amazon',
        imagem: 'https://m.media-amazon.com/images/I/71TpQH4yVUL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com.br/dp/B07TD42S27?tag=SEU_TAG_AQUI'
    },
    {
        nome: 'Multímetro Digital',
        preco: 'R$ 79,90',
        fonte: 'Amazon',
        imagem: 'https://m.media-amazon.com/images/I/71bJ3QqQJ7L._AC_SL1500_.jpg',
        link: 'https://www.amazon.com.br/dp/B07W8J4F5H?tag=SEU_TAG_AQUI'
    }
];

function carregarProdutosDesktop() {
    const container = document.getElementById('produtos-grid-desktop');
    container.innerHTML = produtosAfiliados.map(produto => `
        <div class="produto-card-sidebar" onclick="window.open('${produto.link}', '_blank')">
            <div class="produto-imagem-sidebar" style="background-image: url('${produto.imagem}')"></div>
            <div class="produto-info-sidebar">
                <div class="produto-nome-sidebar">${produto.nome}</div>
                <div class="produto-preco-sidebar">${produto.preco}</div>
                <div class="produto-fonte-sidebar">${produto.fonte}</div>
            </div>
            <a class="produto-link-sidebar" href="${produto.link}" target="_blank">Ver →</a>
        </div>
    `).join('');
}

function carregarProdutosMobile() {
    const container = document.getElementById('produtos-grid-mobile');
    container.innerHTML = produtosAfiliados.map(produto => `
        <div class="produto-card" onclick="window.open('${produto.link}', '_blank')">
            <div class="produto-imagem" style="background-image: url('${produto.imagem}')"></div>
            <div class="produto-info">
                <div class="produto-nome">${produto.nome}</div>
                <div class="produto-preco">${produto.preco}</div>
                <div class="produto-fonte">${produto.fonte}</div>
            </div>
            <a class="produto-link" href="${produto.link}" target="_blank">Ver na Loja</a>
        </div>
    `).join('');
}

// ===== FUNÇÕES DE DATA =====
function updateDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = date.toLocaleDateString('pt-BR', options);
}

// ===== COTAÇÕES (URL CORRIGIDA) =====
async function fetchExchangeRates() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
        
        if (!response.ok) {
            throw new Error('Erro na API');
        }
        
        const data = await response.json();
        
        if (data.USDBRL && data.EURBRL) {
            const usd = data.USDBRL;
            const eur = data.EURBRL;
            
            const usdFormatted = `R$ ${parseFloat(usd.bid).toFixed(2)}`;
            const eurFormatted = `R$ ${parseFloat(eur.bid).toFixed(2)}`;
            
            document.getElementById('usd-value-mobile').textContent = usdFormatted;
            document.getElementById('eur-value-mobile').textContent = eurFormatted;
            document.getElementById('usd-value-inline').textContent = usdFormatted;
            document.getElementById('eur-value-inline').textContent = eurFormatted;
            
            const usdVariation = parseFloat(usd.pctChange);
            const eurVariation = parseFloat(eur.pctChange);
            updateTrendElement('usd-trend-inline', usdVariation);
            updateTrendElement('eur-trend-inline', eurVariation);
            
            const updateTime = new Date().toLocaleTimeString('pt-BR');
            document.getElementById('exchange-update-mobile').textContent = `Atualizado às ${updateTime}`;
            document.getElementById('exchange-update-inline').textContent = `Atualizado às ${updateTime}`;
        }
    } catch (error) {
        console.error('Erro ao buscar cotações:', error);
        document.getElementById('usd-value-mobile').textContent = 'R$ --';
        document.getElementById('eur-value-mobile').textContent = 'R$ --';
        document.getElementById('usd-value-inline').textContent = 'R$ --';
        document.getElementById('eur-value-inline').textContent = 'R$ --';
    }
}

function updateTrendElement(elementId, variation) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (variation >= 0) {
        el.textContent = `▲ ${Math.abs(variation).toFixed(2)}%`;
        el.className = 'exchange-trend positive';
    } else {
        el.textContent = `▼ ${Math.abs(variation).toFixed(2)}%`;
        el.className = 'exchange-trend negative';
    }
}

// ===== CLIMA =====
async function fetchWeather() {
    try {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    await fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
                },
                async () => {
                    await fetchWeatherByCoords(-23.5505, -46.6333);
                }
            );
        } else {
            await fetchWeatherByCoords(-23.5505, -46.6333);
        }
    } catch (error) {
        console.error('Erro ao buscar clima:', error);
    }
}

async function fetchWeatherByCoords(lat, lon) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=5`);
        const data = await response.json();
        
        const temp = Math.round(data.current.temperature_2m);
        const weatherCode = data.current.weather_code;
        
        document.getElementById('header-temp').textContent = `${temp}°C`;
        document.getElementById('weather-temp').textContent = `${temp}°C`;
        document.getElementById('weather-desc').textContent = getWeatherDescription(weatherCode);
        document.getElementById('weather-icon').textContent = getWeatherEmoji(weatherCode);
        document.getElementById('sidebar-weather-temp').textContent = `${temp}°C`;
        document.getElementById('sidebar-weather-icon').textContent = getWeatherEmoji(weatherCode);
        
        try {
            const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?latitude=${lat}&longitude=${lon}&count=1&language=pt&format=json`);
            const geoData = await geoResponse.json();
            if (geoData.results && geoData.results.length > 0) {
                const locationName = geoData.results[0].name;
                document.getElementById('weather-location').textContent = `📍 ${locationName}`;
                document.getElementById('header-location').textContent = locationName;
                document.getElementById('sidebar-weather-location').textContent = `📍 ${locationName}`;
            }
        } catch (e) {
            document.getElementById('weather-location').textContent = `📍 ${lat.toFixed(2)}, ${lon.toFixed(2)}`;
        }
        
        const forecastContainer = document.getElementById('weather-forecast');
        forecastContainer.innerHTML = '';
        const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        
        for (let i = 0; i < data.daily.time.length; i++) {
            const date = new Date(data.daily.time[i]);
            const dayName = dias[date.getDay()];
            const icon = getWeatherEmoji(data.daily.weather_code[i]);
            const tempMax = Math.round(data.daily.temperature_2m_max[i]);
            const tempMin = Math.round(data.daily.temperature_2m_min[i]);
            
            forecastContainer.innerHTML += `
                <div class="forecast-item">
                    <span class="forecast-day">${dayName}</span>
                    <span class="forecast-icon">${icon}</span>
                    <span class="forecast-temp">${tempMax}° / ${tempMin}°</span>
                </div>
            `;
        }
    } catch (error) {
        console.error('Erro ao buscar clima:', error);
        document.getElementById('weather-temp').textContent = '--°C';
        document.getElementById('weather-desc').textContent = 'Indisponível';
    }
}

function getWeatherDescription(code) {
    const descriptions = {
        0: 'Céu limpo', 1: 'Parcialmente nublado', 2: 'Parcialmente nublado',
        3: 'Nublado', 45: 'Nevoeiro', 48: 'Nevoeiro com geada',
        51: 'Garoa leve', 53: 'Garoa', 55: 'Garoa intensa',
        61: 'Chuva fraca', 63: 'Chuva', 65: 'Chuva forte',
        71: 'Neve fraca', 73: 'Neve', 75: 'Neve forte',
        80: 'Pancadas de chuva', 81: 'Pancadas fortes', 82: 'Pancadas violentas',
        95: 'Trovoada', 96: 'Trovoada com granizo', 99: 'Trovoada forte'
    };
    return descriptions[code] || 'Tempo variável';
}

function getWeatherEmoji(code) {
    if (code === 0) return '☀️';
    if (code <= 2) return '🌤️';
    if (code === 3) return '☁️';
    if (code <= 48) return '🌫️';
    if (code <= 55) return '🌧️';
    if (code <= 65) return '🌧️';
    if (code <= 75) return '🌨️';
    if (code <= 82) return '⛈️';
    if (code <= 99) return '⛈️';
    return '🌡️';
}

// ===== AÇÕES =====
async function fetchStocks() {
    try {
        const stocksList = document.getElementById('stocks-list');
        stocksList.innerHTML = '<div class="forecast-loading">Carregando ações...</div>';
        
        const response = await fetch('https://brapi.dev/api/quote/PETR4,VALE3,ITUB4,BBDC4,ABEV3,MGLU3');
        
        if (!response.ok) {
            throw new Error('Erro na API Brapi');
        }
        
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            let stocksHtml = '';
            
            data.results.forEach(stock => {
                const price = stock.regularMarketPrice;
                const change = stock.regularMarketChange;
                const changePercent = stock.regularMarketChangePercent;
                const symbol = stock.symbol;
                const name = stock.longName || stock.shortName || symbol;
                
                const changeClass = change >= 0 ? 'positive' : 'negative';
                const changeSign = change >= 0 ? '+' : '';
                
                stocksHtml += `
                    <div class="stock-item">
                        <div>
                            <span class="stock-symbol">${symbol}</span>
                            <span class="stock-name">${name}</span>
                        </div>
                        <div style="text-align: right;">
                            <span class="stock-price">R$ ${price.toFixed(2)}</span>
                            <span class="stock-change ${changeClass}">${changeSign}${changePercent.toFixed(2)}%</span>
                        </div>
                    </div>
                `;
            });
            
            stocksList.innerHTML = stocksHtml;
        } else {
            throw new Error('Sem dados');
        }
    } catch (error) {
        console.error('Erro ao buscar ações:', error);
        document.getElementById('stocks-list').innerHTML = '<div class="forecast-loading">Ações indisponíveis no momento.</div>';
    }
}

// ===== MENU HAMBÚRGUER =====
document.getElementById('hamburger-btn').addEventListener('click', () => {
    document.getElementById('sidebar-mobile').classList.add('active');
    document.getElementById('sidebar-overlay').classList.add('active');
});
document.getElementById('close-sidebar').addEventListener('click', () => {
    document.getElementById('sidebar-mobile').classList.remove('active');
    document.getElementById('sidebar-overlay').classList.remove('active');
});
document.getElementById('sidebar-overlay').addEventListener('click', () => {
    document.getElementById('sidebar-mobile').classList.remove('active');
    document.getElementById('sidebar-overlay').classList.remove('active');
});

// ===== BUSCA =====
document.getElementById('search-btn').addEventListener('click', () => {
    document.getElementById('search-overlay').classList.add('active');
    document.getElementById('search-input').focus();
});
document.getElementById('close-search').addEventListener('click', () => {
    document.getElementById('search-overlay').classList.remove('active');
    document.getElementById('search-input').value = '';
    document.getElementById('search-results').innerHTML = '';
});
document.getElementById('search-input').addEventListener('input', debounce((e) => {
    const query = e.target.value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    if (query.length < 3) { resultsContainer.innerHTML = ''; return; }
    const results = allNews.filter(news => 
        news.title.toLowerCase().includes(query) ||
        news.description.toLowerCase().includes(query) ||
        news.source.toLowerCase().includes(query)
    ).slice(0, 20);
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="color:white;text-align:center;padding:1rem;">Nenhum resultado.</p>';
        return;
    }
    resultsContainer.innerHTML = results.map(news => `
        <div class="search-result-item" onclick="window.open('${news.link}', '_blank')">
            <h3 style="margin:0 0 0.5rem 0;color:#1e3c72;">${news.title}</h3>
            <p style="margin:0;font-size:0.9rem;color:#666;">${news.source} - ${news.category}</p>
        </div>
    `).join('');
}, 300));

// ===== FILTROS DE REGIÃO =====
document.querySelectorAll('.region-btn, .region-btn-mobile').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.region-btn, .region-btn-mobile').forEach(b => b.classList.remove('active'));
        const region = btn.dataset.region;
        document.querySelectorAll(`.region-btn[data-region="${region}"], .region-btn-mobile[data-region="${region}"]`).forEach(b => b.classList.add('active'));
        activeRegion = region;
        visibleDestaques = 10;
        visiblePorCategoria = 6;
        renderAllSections();
    });
});

// ===== NAVEGAÇÃO POR ÂNCORAS =====
document.querySelectorAll('.filter-btn, .filter-btn-mobile').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.category;
        if (target === 'destaques') {
            document.getElementById('destaques').scrollIntoView({ behavior: 'smooth' });
        } else {
            const el = document.getElementById(`cat-${target}`);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        document.getElementById('sidebar-mobile').classList.remove('active');
        document.getElementById('sidebar-overlay').classList.remove('active');
    });
});

// ===== PRIORIZAR BRASILEIROS =====
function priorizarBrasileiros(noticias) {
    const brasileiras = noticias.filter(n => n.region === 'nacional');
    const internacionais = noticias.filter(n => n.region === 'internacional');
    
    const resultado = [];
    let i = 0, j = 0;
    
    while (i < brasileiras.length || j < internacionais.length) {
        for (let k = 0; k < 4 && i < brasileiras.length; k++, i++) {
            resultado.push(brasileiras[i]);
        }
        for (let k = 0; k < 2 && j < internacionais.length; k++, j++) {
            resultado.push(internacionais[j]);
        }
    }
    
    return resultado;
}

// ===== GET DESTAQUES =====
function getDestaquesPriorizados() {
    let filteredNews = allNews;
    if (activeRegion !== 'all') {
        filteredNews = allNews.filter(item => item.region === activeRegion);
    }
    
    const prioritarias = filteredNews.filter(n => n.category === 'Automotiva' || n.category === 'Aeronáutica');
    const outras = filteredNews.filter(n => n.category !== 'Automotiva' && n.category !== 'Aeronáutica');
    
    const prioritariasPriorizadas = priorizarBrasileiros(prioritarias);
    const outrasPriorizadas = priorizarBrasileiros(outras);
    
    return [...prioritariasPriorizadas, ...outrasPriorizadas];
}

// ===== LOAD MORE =====
function loadMoreNews(tipo) {
    if (tipo === 'destaques') {
        visibleDestaques += INCREMENTO_DESTAQUES;
        renderDestaques(getDestaquesPriorizados());
    }
}
window.loadMoreNews = loadMoreNews;

// ===== BUSCA DE FEEDS =====
async function fetchFeed(feed) {
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === 'ok') {
            return data.items.map(item => ({
                source: feed.source,
                color: feed.color,
                category: feed.category,
                region: feed.region,
                title: item.title,
                link: item.link,
                description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
                image: item.enclosure?.link || item.thumbnail || '',
                pubDate: new Date(item.pubDate),
                pubDateFormatted: new Date(item.pubDate).toLocaleDateString('pt-BR')
            }));
        }
        return [];
    } catch (error) {
        console.error(`Erro ao buscar ${feed.source}:`, error);
        return [];
    }
}

async function loadAllFeeds() {
    if (isLoading) return;
    isLoading = true;
    document.getElementById('destaques-grid').innerHTML = '<div class="loading">Carregando destaques...</div>';
    try {
        const allPromises = feeds.map(feed => fetchFeed(feed));
        const results = await Promise.all(allPromises);
        allNews = results.flat();
        allNews.sort((a, b) => b.pubDate - a.pubDate);
        updateStats();
        updateSourcesList();
        renderAllSections();
    } catch (error) {
        console.error('Erro ao carregar feeds:', error);
        document.getElementById('destaques-grid').innerHTML = '<div class="loading">Erro ao carregar.</div>';
    } finally {
        isLoading = false;
    }
}

// ===== RENDERIZAÇÃO =====
function renderAllSections() {
    let filteredNews = allNews;
    if (activeRegion !== 'all') {
        filteredNews = allNews.filter(item => item.region === activeRegion);
    }

    const destaques = getDestaquesPriorizados();
    renderDestaques(destaques);

    const categorias = ['Aeronáutica', 'Automotiva', 'Semicondutores', 'Indústria', 'Embarcados', 'Projetos', 'Bens de Consumo', 'Geral'];
    const container = document.getElementById('categorias-container');
    container.innerHTML = '';
    
    categorias.forEach(cat => {
        const catNews = filteredNews.filter(n => n.category === cat);
        const catNewsPriorizado = priorizarBrasileiros(catNews);
        const catNewsLimited = catNewsPriorizado.slice(0, visiblePorCategoria);
        
        if (catNewsLimited.length > 0) {
            const section = document.createElement('section');
            section.className = 'categoria-bloco';
            section.id = `cat-${cat}`;
            
            const title = document.createElement('h2');
            title.className = 'section-title';
            title.textContent = cat;
            section.appendChild(title);
            
            const grid = document.createElement('div');
            grid.className = 'categoria-grid';
            grid.innerHTML = catNewsLimited.map(news => createCardHTML(news)).join('');
            section.appendChild(grid);
            
            if (catNewsPriorizado.length > visiblePorCategoria) {
                const btnVerMais = document.createElement('button');
                btnVerMais.className = 'ver-mais-btn';
                btnVerMais.textContent = 'Ver Mais Notícias';
                btnVerMais.onclick = () => {
                    visiblePorCategoria += INCREMENTO_CATEGORIA;
                    renderAllSections();
                };
                section.appendChild(btnVerMais);
            }
            
            container.appendChild(section);
        }
    });
}

function renderDestaques(destaques) {
    const grid = document.getElementById('destaques-grid');
    const btnVerMais = document.getElementById('ver-mais-destaques');
    
    if (destaques.length === 0) {
        grid.innerHTML = '<div class="loading">Nenhuma notícia encontrada.</div>';
        btnVerMais.style.display = 'none';
        return;
    }
    
    const limited = destaques.slice(0, visibleDestaques);
    grid.innerHTML = limited.map(news => createCardHTML(news)).join('');
    
    if (destaques.length > visibleDestaques) {
        btnVerMais.style.display = 'block';
    } else {
        btnVerMais.style.display = 'none';
    }
}

function createCardHTML(news) {
    const regionBadge = news.region === 'nacional' 
        ? '<span class="card-region region-nacional">🇧🇷 Nacional</span>'
        : '<span class="card-region region-internacional">🌍 Internacional</span>';
    let imageHtml = '';
    if (news.image) {
        imageHtml = `<div class="card-image" style="background-image: url('${news.image}')"><span class="card-category">${news.category}</span></div>`;
    } else {
        const gradients = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        ];
        const grad = gradients[Math.floor(Math.random() * gradients.length)];
        imageHtml = `<div class="card-image" style="background-image: ${grad}"><span class="card-category">${news.category}</span></div>`;
    }
    return `
        <article class="card" onclick="window.open('${news.link}', '_blank')">
            ${imageHtml}
            <div class="card-content">
                <div class="card-source-row">
                    <span class="card-source" style="color:${news.color}">${news.source}</span>
                    ${regionBadge}
                </div>
                <h2>${news.title}</h2>
                <p>${news.description}</p>
                <div class="card-footer">
                    <span>📅 ${news.pubDateFormatted}</span>
                    <span>🔗 Ler mais</span>
                </div>
            </div>
        </article>
    `;
}

// ===== ESTATÍSTICAS =====
function updateStats() {
    document.getElementById('total-news').textContent = allNews.length;
    document.getElementById('total-sources').textContent = new Set(allNews.map(n => n.source)).size;
    document.getElementById('total-news-mobile').textContent = allNews.length;
    document.getElementById('total-sources-mobile').textContent = new Set(allNews.map(n => n.source)).size;
}

function updateSourcesList() {
    const list = document.getElementById('sources-list');
    const activeSources = feeds.filter(f => allNews.some(n => n.source === f.source));
    if (activeSources.length === 0) { list.innerHTML = '<li>Nenhuma fonte ativa</li>'; return; }
    list.innerHTML = activeSources.slice(0, 12).map(f => `
        <li><span class="source-dot" style="background:${f.color}"></span>${f.source}<span style="margin-left:auto;font-size:0.8rem;">${f.region === 'nacional' ? '🇧🇷' : '🌍'}</span></li>
    `).join('');
}

// ===== AUXILIARES =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => { clearTimeout(timeout); func(...args); };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    fetchExchangeRates();
    fetchWeather();
    fetchStocks();
    loadAllFeeds();
    carregarProdutosDesktop();
    carregarProdutosMobile();
    
    setInterval(fetchExchangeRates, 300000);
    setInterval(fetchWeather, 600000);
    setInterval(fetchStocks, 300000);
    setInterval(loadAllFeeds, 1800000);
});
