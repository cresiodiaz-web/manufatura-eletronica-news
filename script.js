// ============================================
// PORTAL MANUFATURA ELETRÔNICA NEWS
// 73 Fontes + Layout 9 Cards + Painel Otimizado
// ============================================

const feeds = [
    // GERAL - Brasileiras (9)
    { source: 'Inovação Tecnológica', url: 'https://www.inovacaotecnologica.com.br/rss.xml', color: '#c4170c', category: 'Geral', region: 'nacional' },
    { source: 'Canaltech', url: 'https://canaltech.com.br/rss/', color: '#e53935', category: 'Geral', region: 'nacional' },
    { source: 'Olhar Digital', url: 'https://olhardigital.com.br/feed/', color: '#d32f2f', category: 'Geral', region: 'nacional' },
    { source: 'Tecmundo', url: 'https://www.tecmundo.com.br/rss', color: '#b71c1c', category: 'Geral', region: 'nacional' },
    { source: 'ABStartups', url: 'https://abstartups.com.br/feed/', color: '#c4170c', category: 'Geral', region: 'nacional' },
    { source: 'USP Poli', url: 'https://www.poli.usp.br/feed/', color: '#e53935', category: 'Geral', region: 'nacional' },
    { source: 'UNICAMP FEM', url: 'https://www.fem.unicamp.br/index.php/feed/', color: '#d32f2f', category: 'Geral', region: 'nacional' },
    { source: 'UFMG Engenharia', url: 'https://www.eng.ufmg.br/feed/', color: '#b71c1c', category: 'Geral', region: 'nacional' },
    { source: 'UFRJ COPPE', url: 'https://www.coppe.ufrj.br/rss', color: '#c4170c', category: 'Geral', region: 'nacional' },
    // GERAL - Internacionais (10)
    { source: 'MIT Technology Review', url: 'https://www.technologyreview.com/feed/', color: '#c4170c', category: 'Geral', region: 'internacional' },
    { source: 'Wired', url: 'https://www.wired.com/feed/rss', color: '#e53935', category: 'Geral', region: 'internacional' },
    { source: 'Ars Technica', url: 'https://feeds.arstechnica.com/arstechnica/index', color: '#d32f2f', category: 'Geral', region: 'internacional' },
    { source: 'MIT MechE', url: 'https://meche.mit.edu/rss.xml', color: '#b71c1c', category: 'Geral', region: 'internacional' },
    { source: 'Stanford Engineering', url: 'https://engineering.stanford.edu/rss.xml', color: '#c4170c', category: 'Geral', region: 'internacional' },
    { source: 'UC Berkeley Eng', url: 'https://engineering.berkeley.edu/rss.xml', color: '#e53935', category: 'Geral', region: 'internacional' },
    { source: 'Purdue Engineering', url: 'https://engineering.purdue.edu/rss.xml', color: '#d32f2f', category: 'Geral', region: 'internacional' },
    { source: 'ETH Zurich MechE', url: 'https://mavt.ethz.ch/rss.xml', color: '#b71c1c', category: 'Geral', region: 'internacional' },
    { source: 'Cambridge Engineering', url: 'https://www.eng.cam.ac.uk/rss.xml', color: '#c4170c', category: 'Geral', region: 'internacional' },
    { source: 'Carnegie Mellon Eng', url: 'https://engineering.cmu.edu/rss.xml', color: '#e53935', category: 'Geral', region: 'internacional' },
    // EMBARCADOS (6)
    { source: 'Embarcados', url: 'https://www.embarcados.com.br/feed/', color: '#c4170c', category: 'Embarcados', region: 'nacional' },
    { source: 'Portal Vida de Silício', url: 'https://portal.vidadesilicio.com.br/feed/', color: '#d32f2f', category: 'Embarcados', region: 'nacional' },
    { source: 'FilipeFlop', url: 'https://www.filipeflop.com/blog/feed/', color: '#e53935', category: 'Embarcados', region: 'nacional' },
    { source: 'Hackaday', url: 'https://hackaday.com/blog/feed/', color: '#b71c1c', category: 'Embarcados', region: 'internacional' },
    { source: 'Embedded.com', url: 'https://www.embedded.com/feed/', color: '#c4170c', category: 'Embarcados', region: 'internacional' },
    { source: 'Adafruit Blog', url: 'https://blog.adafruit.com/feed/', color: '#d32f2f', category: 'Embarcados', region: 'internacional' },
    // INDÚSTRIA (10)
    { source: 'ABINEE', url: 'https://www.abinee.org.br/feed/', color: '#c4170c', category: 'Indústria', region: 'nacional' },
    { source: 'ABIMAQ', url: 'https://www.abimaq.org.br/rss', color: '#e53935', category: 'Indústria', region: 'nacional' },
    { source: 'ABDI', url: 'https://www.abdi.com.br/rss', color: '#d32f2f', category: 'Indústria', region: 'nacional' },
    { source: 'BNDES', url: 'https://www.bndes.gov.br/wps/portal/site/home/noticias/rss', color: '#b71c1c', category: 'Indústria', region: 'nacional' },
    { source: 'CNI', url: 'https://noticias.portaldaindustria.com.br/rss/', color: '#c4170c', category: 'Indústria', region: 'nacional' },
    { source: 'Revista Eletrônica', url: 'https://www.revistaeletronica.com.br/feed/', color: '#e53935', category: 'Indústria', region: 'nacional' },
    { source: 'CIMM', url: 'https://www.cimm.com.br/rss/', color: '#d32f2f', category: 'Indústria', region: 'nacional' },
    { source: 'Electronics Weekly', url: 'https://www.electronicsweekly.com/feed/', color: '#b71c1c', category: 'Indústria', region: 'internacional' },
    { source: 'Electronics For You', url: 'https://www.electronicsforu.com/feed', color: '#c4170c', category: 'Indústria', region: 'internacional' },
    { source: 'SMTnet', url: 'https://www.smtnet.com/rss/news.xml', color: '#e53935', category: 'Indústria', region: 'internacional' },
    // PROJETOS (5)
    { source: 'Instituto NCB', url: 'https://www.institutoncb.com.br/feed/', color: '#c4170c', category: 'Projetos', region: 'nacional' },
    { source: 'Eletrônica Geral', url: 'https://www.eletronicageral.com/feed/', color: '#d32f2f', category: 'Projetos', region: 'nacional' },
    { source: 'All About Circuits', url: 'https://www.allaboutcircuits.com/rss/', color: '#e53935', category: 'Projetos', region: 'internacional' },
    { source: 'Electronic Design', url: 'https://www.electronicdesign.com/rss', color: '#b71c1c', category: 'Projetos', region: 'internacional' },
    { source: 'EEWeb', url: 'https://www.eeweb.com/feed/', color: '#c4170c', category: 'Projetos', region: 'internacional' },
    // SEMICONDUTORES (5)
    { source: 'Chip Brasil', url: 'https://chipbrasil.com.br/feed/', color: '#c4170c', category: 'Semicondutores', region: 'nacional' },
    { source: 'EETimes', url: 'https://www.eetimes.com/feed/', color: '#d32f2f', category: 'Semicondutores', region: 'internacional' },
    { source: 'IEEE Spectrum', url: 'https://spectrum.ieee.org/feeds/topic/semiconductors.rss', color: '#e53935', category: 'Semicondutores', region: 'internacional' },
    { source: 'Semiconductor Engineering', url: 'https://semiengineering.com/feed/', color: '#b71c1c', category: 'Semicondutores', region: 'internacional' },
    { source: 'AnandTech', url: 'https://www.anandtech.com/rss/', color: '#c4170c', category: 'Semicondutores', region: 'internacional' },
    // AERONÁUTICA (10)
    { source: 'Aero Magazine', url: 'https://aeromagazine.uol.com.br/feed/', color: '#c4170c', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Cavok Brasil', url: 'https://www.cavok.com.br/feed/', color: '#e53935', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Poder Aéreo', url: 'https://www.poderaereo.com.br/feed/', color: '#d32f2f', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Defesa Aérea & Naval', url: 'https://www.defesaaereanaval.com.br/feed/', color: '#b71c1c', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Aeroin', url: 'https://aeroin.net/feed/', color: '#c4170c', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Aeroflap', url: 'https://www.aeroflap.com.br/feed/', color: '#e53935', category: 'Aeronáutica', region: 'nacional' },
    { source: 'ITA', url: 'https://www.ita.br/rss', color: '#d32f2f', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Aviation Week', url: 'https://aviationweek.com/rss.xml', color: '#b71c1c', category: 'Aeronáutica', region: 'internacional' },
    { source: 'FlightGlobal', url: 'https://www.flightglobal.com/rss', color: '#c4170c', category: 'Aeronáutica', region: 'internacional' },
    { source: 'AINonline', url: 'https://www.ainonline.com/rss.xml', color: '#e53935', category: 'Aeronáutica', region: 'internacional' },
    // AUTOMOTIVA (11)
    { source: 'Automotive Business', url: 'https://www.automotivebusiness.com.br/feed/', color: '#c4170c', category: 'Automotiva', region: 'nacional' },
    { source: 'AutoEsporte', url: 'https://autoesporte.globo.com/rss/feed.xml', color: '#d32f2f', category: 'Automotiva', region: 'nacional' },
    { source: 'Jornal do Carro', url: 'https://jornaldocarro.estadao.com.br/feed/', color: '#e53935', category: 'Automotiva', region: 'nacional' },
    { source: 'Quatro Rodas', url: 'https://quatrorodas.abril.com.br/feed/', color: '#b71c1c', category: 'Automotiva', region: 'nacional' },
    { source: 'Motor Show', url: 'https://motorshow.com.br/feed/', color: '#c4170c', category: 'Automotiva', region: 'nacional' },
    { source: 'CarBlog', url: 'https://www.car.blog.br/feed/', color: '#e53935', category: 'Automotiva', region: 'nacional' },
    { source: 'Auto Papo', url: 'https://autopapo.uol.com.br/feed/', color: '#d32f2f', category: 'Automotiva', region: 'nacional' },
    { source: 'Autoblog', url: 'https://www.autoblog.com/rss.xml', color: '#b71c1c', category: 'Automotiva', region: 'internacional' },
    { source: 'Car and Driver', url: 'https://www.caranddriver.com/rss/all.xml', color: '#c4170c', category: 'Automotiva', region: 'internacional' },
    { source: 'Motor1', url: 'https://www.motor1.com/rss/news/all/', color: '#e53935', category: 'Automotiva', region: 'internacional' },
    { source: 'Automotive News', url: 'https://www.autonews.com/rss/feed.xml', color: '#d32f2f', category: 'Automotiva', region: 'internacional' },
    // BENS DE CONSUMO (13)
    { source: 'Techtudo', url: 'https://www.techtudo.com.br/rss/', color: '#c4170c', category: 'Bens de Consumo', region: 'nacional' },
    { source: 'Tudocelular', url: 'https://www.tudocelular.com/rss/', color: '#e53935', category: 'Bens de Consumo', region: 'nacional' },
    { source: 'Gizmodo Brasil', url: 'https://gizmodo.uol.com.br/feed/', color: '#d32f2f', category: 'Bens de Consumo', region: 'nacional' },
    { source: 'Tecnoblog', url: 'https://tecnoblog.net/feed/', color: '#b71c1c', category: 'Bens de Consumo', region: 'nacional' },
    { source: 'TechCrunch', url: 'https://techcrunch.com/feed/', color: '#c4170c', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'The Verge', url: 'https://www.theverge.com/rss/index.xml', color: '#e53935', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'CNET', url: 'https://www.cnet.com/rss/news/', color: '#d32f2f', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'Engadget', url: 'https://www.engadget.com/rss.xml', color: '#b71c1c', category: 'Bens de Consumo', region: 'internacional' },
    { source: "Tom's Hardware", url: 'https://www.tomshardware.com/feeds/all', color: '#c4170c', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'Android Central', url: 'https://www.androidcentral.com/feed', color: '#e53935', category: 'Bens de Consumo', region: 'internacional' },
    { source: '9to5Mac', url: 'https://9to5mac.com/feed/', color: '#d32f2f', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'GSM Arena', url: 'https://www.gsmarena.com/rss-news-reviews.php3', color: '#b71c1c', category: 'Bens de Consumo', region: 'internacional' },
    { source: 'TechRadar', url: 'https://www.techradar.com/rss', color: '#c4170c', category: 'Bens de Consumo', region: 'internacional' }
];

let allNews = [];
let activeRegion = 'all';
let isLoading = false;
let visibleDestaques = 9;
let visiblePorCategoria = 9;
const MAX_POR_CATEGORIA = 20;

function $(id) { return document.getElementById(id); }

function debounce(fn, wait) {
    let t;
    return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
    };
}

function updateDate() {
    const el = $('current-date');
    if (el) {
        const d = new Date();
        el.textContent = d.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
}

async function fetchExchangeRates() {
    try {
        const res = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
        if (!res.ok) return;
        const data = await res.json();
        if (data.USDBRL && data.EURBRL) {
            const usdFormatted = `R$ ${parseFloat(data.USDBRL.bid).toFixed(2)}`;
            const eurFormatted = `R$ ${parseFloat(data.EURBRL.bid).toFixed(2)}`;
            const t = new Date().toLocaleTimeString('pt-BR');
            const usdVar = parseFloat(data.USDBRL.pctChange);
            const eurVar = parseFloat(data.EURBRL.pctChange);
            
            if ($('usd-value-mobile')) $('usd-value-mobile').textContent = `🇺🇸 Dólar: ${usdFormatted}`;
            if ($('eur-value-mobile')) $('eur-value-mobile').textContent = `🇪🇺 Euro: ${eurFormatted}`;
            if ($('usd-value-inline')) $('usd-value-inline').textContent = usdFormatted;
            if ($('eur-value-inline')) $('eur-value-inline').textContent = eurFormatted;
            if ($('exchange-update-mobile')) $('exchange-update-mobile').textContent = `Atualizado às ${t}`;
            if ($('exchange-update-inline')) $('exchange-update-inline').textContent = `Atualizado às ${t}`;
            
            if ($('usd-trend-inline')) {
                $('usd-trend-inline').textContent = usdVar >= 0 ? `▲ ${Math.abs(usdVar).toFixed(2)}%` : `▼ ${Math.abs(usdVar).toFixed(2)}%`;
                $('usd-trend-inline').className = `exchange-trend ${usdVar >= 0 ? 'positive' : 'negative'}`;
            }
            if ($('eur-trend-inline')) {
                $('eur-trend-inline').textContent = eurVar >= 0 ? `▲ ${Math.abs(eurVar).toFixed(2)}%` : `▼ ${Math.abs(eurVar).toFixed(2)}%`;
                $('eur-trend-inline').className = `exchange-trend ${eurVar >= 0 ? 'positive' : 'negative'}`;
            }
        }
    } catch(e) {}
}

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

function getWeatherDesc(c) {
    const d = {0:'Céu limpo',1:'Parcialmente nublado',2:'Parcialmente nublado',3:'Nublado',45:'Nevoeiro',48:'Nevoeiro',51:'Garoa',53:'Garoa',55:'Garoa',61:'Chuva fraca',63:'Chuva',65:'Chuva forte',80:'Pancadas',95:'Trovoada'};
    return d[c] || 'Variável';
}

function getWeatherEmoji(c) {
    if (c === 0) return '☀️';
    if (c <= 2) return '🌤️';
    if (c === 3) return '☁️';
    if (c <= 48) return '🌫️';
    if (c <= 65) return '🌧️';
    if (c <= 82) return '⛈️';
    return '🌡️';
}

const perguntaEnquete = 'Qual seu nível de experiência com manufatura eletrônica?';
let votosEnquete = { muita: 0, media: 0, nenhuma: 0 };
let jaVotou = false;

function carregarVotos() {
    try {
        const s = localStorage.getItem('votosEnquete');
        if (s) votosEnquete = JSON.parse(s);
        if (localStorage.getItem('jaVotouEnquete') === 'true') jaVotou = true;
    } catch(e) {}
}

function votar() {
    const sel = document.querySelector('input[name="enquete"]:checked');
    if (!sel) { alert('Selecione uma opção!'); return; }
    if (jaVotou) { alert('Você já votou!'); verResultados(); return; }
    votosEnquete[sel.value]++;
    jaVotou = true;
    try {
        localStorage.setItem('votosEnquete', JSON.stringify(votosEnquete));
        localStorage.setItem('jaVotouEnquete', 'true');
    } catch(e) {}
    verResultados();
}

function verResultados() {
    const div = $('enquete-resultados');
    if (!div) return;
    div.style.display = 'block';
    const total = votosEnquete.muita + votosEnquete.media + votosEnquete.nenhuma;
    if (total === 0) { 
        if ($('total-votos')) $('total-votos').textContent = 'Nenhum voto ainda.'; 
        return; 
    }
    if ($('resultado-muita')) $('resultado-muita').textContent = `Muita: ${((votosEnquete.muita/total)*100).toFixed(1)}% (${votosEnquete.muita} votos)`;
    if ($('resultado-media')) $('resultado-media').textContent = `Média: ${((votosEnquete.media/total)*100).toFixed(1)}% (${votosEnquete.media} votos)`;
    if ($('resultado-nenhuma')) $('resultado-nenhuma').textContent = `Nenhuma: ${((votosEnquete.nenhuma/total)*100).toFixed(1)}% (${votosEnquete.nenhuma} votos)`;
    if ($('total-votos')) $('total-votos').textContent = `Total: ${total} votos`;
}

window.votar = votar;
window.verResultados = verResultados;

async function fetchFeed(feed) {
    try {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`);
        const data = await res.json();
        if (data.status === 'ok' && data.items) {
            return data.items.map(item => ({
                source: feed.source,
                color: feed.color,
                category: feed.category,
                region: feed.region,
                title: item.title,
                link: item.link,
                description: item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 120) + '...' : '',
                image: item.enclosure?.link || item.thumbnail || '',
                pubDate: new Date(item.pubDate),
                pubDateFormatted: new Date(item.pubDate).toLocaleDateString('pt-BR')
            }));
        }
        return [];
    } catch(e) { return []; }
}

async function loadAllFeeds() {
    if (isLoading) return;
    isLoading = true;
    const grid = $('destaques-grid');
    if (grid) grid.innerHTML = '<div class="loading">Carregando notícias...</div>';
    
    try {
        const results = await Promise.all(feeds.map(f => fetchFeed(f)));
        allNews = results.flat().sort((a, b) => b.pubDate - a.pubDate);
        renderAllSections();
        renderizarRecomendados();
        updateSourcesList();
        updateStats();
    } catch(e) {
        if (grid) grid.innerHTML = '<div class="loading">Erro ao carregar.</div>';
    } finally {
        isLoading = false;
    }
}

function priorizarBrasileiros(noticias) {
    const br = noticias.filter(n => n.region === 'nacional');
    const int = noticias.filter(n => n.region === 'internacional');
    const r = [];
    let i = 0, j = 0;
    while (i < br.length || j < int.length) {
        for (let k = 0; k < 5 && i < br.length; k++, i++) r.push(br[i]);
        for (let k = 0; k < 1 && j < int.length; k++, j++) r.push(int[j]);
    }
    return r;
}

function getDestaques() {
    let filtered = allNews;
    if (activeRegion !== 'all') filtered = allNews.filter(n => n.region === activeRegion);
    const prioritarias = filtered.filter(n => n.category === 'Automotiva' || n.category === 'Aeronáutica' || n.category === 'Indústria');
    const outras = filtered.filter(n => !['Automotiva','Aeronáutica','Indústria'].includes(n.category));
    return [...priorizarBrasileiros(prioritarias), ...priorizarBrasileiros(outras)];
}

function createCard(news) {
    const badge = news.region === 'nacional' ? '🇧🇷' : '🌍';
    let imgHtml;
    if (news.image) {
        imgHtml = `<div class="card-image" style="background-image:url('${news.image}')"><span class="card-category">${news.category}</span></div>`;
    } else {
        imgHtml = `<div class="card-image" style="background:#e8f4fd;display:flex;align-items:center;justify-content:center;"><span style="font-size:2.5rem;">🔲</span><span class="card-category">${news.category}</span></div>`;
    }
    return `<article class="card" onclick="window.open('${news.link}','_blank')">${imgHtml}<div class="card-content"><div class="card-source-row"><span class="card-source" style="color:#000;">${news.source}</span><span class="card-region">${badge}</span></div><h2>${news.title}</h2><p>${news.description}</p><div class="card-footer"><span>📅 ${news.pubDateFormatted}</span><span>🔗</span></div></div></article>`;
}

function renderDestaques() {
    const grid = $('destaques-grid');
    if (!grid) return;
    const destaques = getDestaques().slice(0, visibleDestaques);
    if (destaques.length === 0) {
        grid.innerHTML = '<div class="loading">Nenhuma notícia.</div>';
        return;
    }
    grid.innerHTML = destaques.map(n => createCard(n)).join('');
    const btn = $('ver-mais-destaques');
    if (btn) btn.style.display = getDestaques().length > visibleDestaques ? 'block' : 'none';
}

function renderAllSections() {
    renderDestaques();
    
    let filtered = allNews;
    if (activeRegion !== 'all') filtered = allNews.filter(n => n.region === activeRegion);
    
    const categorias = ['Aeronáutica','Automotiva','Semicondutores','Indústria','Embarcados','Projetos','Bens de Consumo','Geral'];
    const container = $('categorias-container');
    if (!container) return;
    container.innerHTML = '';
    
    categorias.forEach(cat => {
        const catNews = priorizarBrasileiros(filtered.filter(n => n.category === cat));
        const limited = catNews.slice(0, visiblePorCategoria);
        if (limited.length > 0) {
            const section = document.createElement('section');
            section.className = 'categoria-bloco';
            section.id = `cat-${cat}`;
            section.innerHTML = `<h2 class="section-title">${cat}</h2>`;
            const grid = document.createElement('div');
            grid.className = 'categoria-grid';
            grid.innerHTML = limited.map(n => createCard(n)).join('');
            section.appendChild(grid);
            
            if (catNews.length > visiblePorCategoria) {
                const btn = document.createElement('button');
                btn.className = 'ver-mais-btn';
                btn.textContent = `Ver Mais ${cat}`;
                btn.onclick = () => {
                    visiblePorCategoria = MAX_POR_CATEGORIA;
                    renderAllSections();
                };
                section.appendChild(btn);
            }
            
            container.appendChild(section);
        }
    });
}

function renderizarRecomendados() {
    const recomendados = allNews.filter(n => n.category === 'Indústria' || n.category === 'Semicondutores').slice(0, 6);
    const html = recomendados.map(n => `
        <div class="recomendado-item" onclick="window.open('${n.link}','_blank')">
            <div class="recomendado-imagem">${n.image ? `<img src="${n.image}" style="width:100%;height:100%;object-fit:cover;">` : '🔲'}</div>
            <div>
                <div class="recomendado-titulo">${n.title}</div>
                <div class="recomendado-fonte">${n.source} • ${n.category}</div>
            </div>
        </div>
    `).join('');
    
    if ($('recomendados-list-desktop')) $('recomendados-list-desktop').innerHTML = html || 'Carregando...';
    if ($('recomendados-list-mobile')) $('recomendados-list-mobile').innerHTML = html || 'Carregando...';
}

function updateSourcesList() {
    const list = $('sources-list');
    if (!list) return;
    const active = feeds.filter(f => allNews.some(n => n.source === f.source));
    list.innerHTML = active.slice(0, 12).map(f => `<div style="font-size:0.8rem;padding:0.2rem 0;">• ${f.source} ${f.region === 'nacional' ? '🇧🇷' : '🌍'}</div>`).join('') || 'Nenhuma fonte ativa';
}

function updateStats() {
    if ($('total-news-mobile')) $('total-news-mobile').textContent = `${allNews.length} notícias`;
    if ($('total-sources-mobile')) $('total-sources-mobile').textContent = `${new Set(allNews.map(n => n.source)).size} fontes`;
}

function loadMoreNews() {
    visibleDestaques = MAX_POR_CATEGORIA;
    renderDestaques();
}

function atualizarNoticias() {
    loadAllFeeds();
    fetchExchangeRates();
    fetchWeather();
}

window.loadMoreNews = loadMoreNews;
window.atualizarNoticias = atualizarNoticias;

document.addEventListener('DOMContentLoaded', () => {
    carregarVotos();
    if ($('enquete-pergunta')) $('enquete-pergunta').textContent = perguntaEnquete;
    updateDate();
    fetchExchangeRates();
    fetchWeather();
    loadAllFeeds();
    
    const hambDesktop = $('hamburger-btn-desktop');
    const dropdown = $('desktop-dropdown');
    if (hambDesktop && dropdown) {
        hambDesktop.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
        document.addEventListener('click', () => dropdown.classList.remove('active'));
    }
    
    const menuToggle = $('menu-toggle-desktop');
    const filtersDesktop = $('filters-desktop');
    if (menuToggle && filtersDesktop) {
        menuToggle.addEventListener('click', () => {
            filtersDesktop.classList.toggle('active');
        });
    }
    
    const hambBtn = $('hamburger-btn');
    const sidebar = $('sidebar-mobile');
    const overlay = $('sidebar-overlay');
    const closeBtn = $('close-sidebar');
    
    if (hambBtn && sidebar && overlay && closeBtn) {
        hambBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    const searchBtn = $('search-btn');
    const searchOverlay = $('search-overlay');
    const searchInput = $('search-input');
    const closeSearch = $('close-search');
    const searchResults = $('search-results');
    
    if (searchBtn && searchOverlay && searchInput && closeSearch && searchResults) {
        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            searchInput.focus();
        });
        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        });
        searchInput.addEventListener('input', debounce((e) => {
            const q = e.target.value.toLowerCase();
            if (q.length < 3) { searchResults.innerHTML = ''; return; }
            const r = allNews.filter(n => n.title.toLowerCase().includes(q)).slice(0, 20);
            searchResults.innerHTML = r.map(n => `<div class="search-result-item" onclick="window.open('${n.link}','_blank')">${n.title}</div>`).join('');
        }, 300));
    }
    
    document.querySelectorAll('.region-btn, .region-btn-mobile').forEach(btn => {
        btn.addEventListener('click', () => {
            activeRegion = btn.dataset.region;
            document.querySelectorAll('.region-btn, .region-btn-mobile').forEach(b => b.classList.remove('active'));
            document.querySelectorAll(`[data-region="${btn.dataset.region}"]`).forEach(b => b.classList.add('active'));
            visibleDestaques = 9;
            visiblePorCategoria = 9;
            renderAllSections();
            if (dropdown) dropdown.classList.remove('active');
            if (sidebar) sidebar.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
        });
    });
    
    document.querySelectorAll('.filter-btn, .filter-btn-mobile').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.category;
            if (target === 'destaques') {
                const el = $('destaques');
                if (el) el.scrollIntoView({behavior:'smooth'});
            } else {
                const el = $(`cat-${target}`);
                if (el) el.scrollIntoView({behavior:'smooth'});
            }
            if (sidebar) sidebar.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
        });
    });
    
    setInterval(fetchExchangeRates, 300000);
    setInterval(fetchWeather, 600000);
    setInterval(loadAllFeeds, 1800000);
});
