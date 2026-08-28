// ============================================
// PORTAL MANUFATURA ELETRÔNICA NEWS
// 73 feeds + botões flutuantes + 9 cards/seção
// ============================================

const feeds = [
    // GERAL - Brasileiras
    { source: 'Inovação Tecnológica', url: 'https://www.inovacaotecnologica.com.br/rss.xml', color: '#2a5298', category: 'Geral', region: 'nacional' },
    { source: 'Canaltech', url: 'https://canaltech.com.br/rss/', color: '#1e88e5', category: 'Geral', region: 'nacional' },
    { source: 'Olhar Digital', url: 'https://olhardigital.com.br/feed/', color: '#00bfa5', category: 'Geral', region: 'nacional' },
    { source: 'Tecmundo', url: 'https://www.tecmundo.com.br/rss', color: '#ff6f00', category: 'Geral', region: 'nacional' },
    { source: 'ABStartups', url: 'https://abstartups.com.br/feed/', color: '#2e7d32', category: 'Geral', region: 'nacional' },
    { source: 'USP Poli', url: 'https://www.poli.usp.br/feed/', color: '#1e3c72', category: 'Geral', region: 'nacional' },
    { source: 'UNICAMP FEM', url: 'https://www.fem.unicamp.br/index.php/feed/', color: '#00695c', category: 'Geral', region: 'nacional' },
    { source: 'UFMG Engenharia', url: 'https://www.eng.ufmg.br/feed/', color: '#2e7d32', category: 'Geral', region: 'nacional' },
    { source: 'UFRJ COPPE', url: 'https://www.coppe.ufrj.br/rss', color: '#c62828', category: 'Geral', region: 'nacional' },
    // GERAL - Internacionais
    { source: 'MIT Technology Review', url: 'https://www.technologyreview.com/feed/', color: '#d32f2f', category: 'Geral', region: 'internacional' },
    { source: 'Wired', url: 'https://www.wired.com/feed/rss', color: '#000000', category: 'Geral', region: 'internacional' },
    { source: 'Ars Technica', url: 'https://feeds.arstechnica.com/arstechnica/index', color: '#ff4e00', category: 'Geral', region: 'internacional' },
    { source: 'MIT MechE', url: 'https://meche.mit.edu/rss.xml', color: '#d32f2f', category: 'Geral', region: 'internacional' },
    { source: 'Stanford Engineering', url: 'https://engineering.stanford.edu/rss.xml', color: '#1565c0', category: 'Geral', region: 'internacional' },
    { source: 'UC Berkeley Eng', url: 'https://engineering.berkeley.edu/rss.xml', color: '#f57c00', category: 'Geral', region: 'internacional' },
    { source: 'Purdue Engineering', url: 'https://engineering.purdue.edu/rss.xml', color: '#4527a0', category: 'Geral', region: 'internacional' },
    { source: 'ETH Zurich MechE', url: 'https://mavt.ethz.ch/rss.xml', color: '#00695c', category: 'Geral', region: 'internacional' },
    { source: 'Cambridge Engineering', url: 'https://www.eng.cam.ac.uk/rss.xml', color: '#00838f', category: 'Geral', region: 'internacional' },
    { source: 'Carnegie Mellon Eng', url: 'https://engineering.cmu.edu/rss.xml', color: '#c62828', category: 'Geral', region: 'internacional' },
    // EMBARCADOS - Brasileiras
    { source: 'Embarcados', url: 'https://www.embarcados.com.br/feed/', color: '#e67e22', category: 'Embarcados', region: 'nacional' },
    { source: 'Portal Vida de Silício', url: 'https://portal.vidadesilicio.com.br/feed/', color: '#16a085', category: 'Embarcados', region: 'nacional' },
    { source: 'FilipeFlop', url: 'https://www.filipeflop.com/blog/feed/', color: '#e74c3c', category: 'Embarcados', region: 'nacional' },
    // EMBARCADOS - Internacionais
    { source: 'Hackaday', url: 'https://hackaday.com/blog/feed/', color: '#f4b400', category: 'Embarcados', region: 'internacional' },
    { source: 'Embedded.com', url: 'https://www.embedded.com/feed/', color: '#005596', category: 'Embarcados', region: 'internacional' },
    { source: 'Adafruit Blog', url: 'https://blog.adafruit.com/feed/', color: '#00a651', category: 'Embarcados', region: 'internacional' },
    // INDÚSTRIA - Brasileiras
    { source: 'ABINEE', url: 'https://www.abinee.org.br/feed/', color: '#1e3c72', category: 'Indústria', region: 'nacional' },
    { source: 'ABIMAQ', url: 'https://www.abimaq.org.br/rss', color: '#00695c', category: 'Indústria', region: 'nacional' },
    { source: 'ABDI', url: 'https://www.abdi.com.br/rss', color: '#4527a0', category: 'Indústria', region: 'nacional' },
    { source: 'BNDES', url: 'https://www.bndes.gov.br/wps/portal/site/home/noticias/rss', color: '#1565c0', category: 'Indústria', region: 'nacional' },
    { source: 'CNI', url: 'https://noticias.portaldaindustria.com.br/rss/', color: '#c62828', category: 'Indústria', region: 'nacional' },
    { source: 'Revista Eletrônica', url: 'https://www.revistaeletronica.com.br/feed/', color: '#c0392b', category: 'Indústria', region: 'nacional' },
    { source: 'CIMM', url: 'https://www.cimm.com.br/rss/', color: '#2c3e50', category: 'Indústria', region: 'nacional' },
    // INDÚSTRIA - Internacionais
    { source: 'Electronics Weekly', url: 'https://www.electronicsweekly.com/feed/', color: '#27ae60', category: 'Indústria', region: 'internacional' },
    { source: 'Electronics For You', url: 'https://www.electronicsforu.com/feed', color: '#d35400', category: 'Indústria', region: 'internacional' },
    { source: 'SMTnet', url: 'https://www.smtnet.com/rss/news.xml', color: '#8e44ad', category: 'Indústria', region: 'internacional' },
    // PROJETOS - Brasileiras
    { source: 'Instituto NCB', url: 'https://www.institutoncb.com.br/feed/', color: '#d32f2f', category: 'Projetos', region: 'nacional' },
    { source: 'Eletrônica Geral', url: 'https://www.eletronicageral.com/feed/', color: '#1976d2', category: 'Projetos', region: 'nacional' },
    // PROJETOS - Internacionais
    { source: 'All About Circuits', url: 'https://www.allaboutcircuits.com/rss/', color: '#8e44ad', category: 'Projetos', region: 'internacional' },
    { source: 'Electronic Design', url: 'https://www.electronicdesign.com/rss', color: '#2980b9', category: 'Projetos', region: 'internacional' },
    { source: 'EEWeb', url: 'https://www.eeweb.com/feed/', color: '#00796b', category: 'Projetos', region: 'internacional' },
    // SEMICONDUTORES - Brasileiras
    { source: 'Chip Brasil', url: 'https://chipbrasil.com.br/feed/', color: '#5e35b1', category: 'Semicondutores', region: 'nacional' },
    // SEMICONDUTORES - Internacionais
    { source: 'EETimes', url: 'https://www.eetimes.com/feed/', color: '#c0392b', category: 'Semicondutores', region: 'internacional' },
    { source: 'IEEE Spectrum', url: 'https://spectrum.ieee.org/feeds/topic/semiconductors.rss', color: '#006699', category: 'Semicondutores', region: 'internacional' },
    { source: 'Semiconductor Engineering', url: 'https://semiengineering.com/feed/', color: '#16a085', category: 'Semicondutores', region: 'internacional' },
    { source: 'AnandTech', url: 'https://www.anandtech.com/rss/', color: '#1a237e', category: 'Semicondutores', region: 'internacional' },
    // AERONÁUTICA - Brasileiras
    { source: 'Aero Magazine', url: 'https://aeromagazine.uol.com.br/feed/', color: '#e74c3c', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Cavok Brasil', url: 'https://www.cavok.com.br/feed/', color: '#00695c', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Poder Aéreo', url: 'https://www.poderaereo.com.br/feed/', color: '#1a237e', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Defesa Aérea & Naval', url: 'https://www.defesaaereanaval.com.br/feed/', color: '#b71c1c', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Aeroin', url: 'https://aeroin.net/feed/', color: '#ff6f00', category: 'Aeronáutica', region: 'nacional' },
    { source: 'Aeroflap', url: 'https://www.aeroflap.com.br/feed/', color: '#0277bd', category: 'Aeronáutica', region: 'nacional' },
    { source: 'ITA', url: 'https://www.ita.br/rss', color: '#1a237e', category: 'Aeronáutica', region: 'nacional' },
    // AERONÁUTICA - Internacionais
    { source: 'Aviation Week', url: 'https://aviationweek.com/rss.xml', color: '#2c3e50', category: 'Aeronáutica', region: 'internacional' },
    { source: 'FlightGlobal', url: 'https://www.flightglobal.com/rss', color: '#34495e', category: 'Aeronáutica', region: 'internacional' },
    { source: 'AINonline', url: 'https://www.ainonline.com/rss.xml', color: '#5d6d7e', category: 'Aeronáutica', region: 'internacional' },
    // AUTOMOTIVA - Brasileiras
    { source: 'Automotive Business', url: 'https://www.automotivebusiness.com.br/feed/', color: '#c62828', category: 'Automotiva', region: 'nacional' },
    { source: 'AutoEsporte', url: 'https://autoesporte.globo.com/rss/feed.xml', color: '#1e88e5', category: 'Automotiva', region: 'nacional' },
    { source: 'Jornal do Carro', url: 'https://jornaldocarro.estadao.com.br/feed/', color: '#f57c00', category: 'Automotiva', region: 'nacional' },
    { source: 'Quatro Rodas', url: 'https://quatrorodas.abril.com.br/feed/', color: '#d32f2f', category: 'Automotiva', region: 'nacional' },
    { source: 'Motor Show', url: 'https://motorshow.com.br/feed/', color: '#1976d2', category: 'Automotiva', region: 'nacional' },
    { source: 'CarBlog', url: 'https://www.car.blog.br/feed/', color: '#f57c00', category: 'Automotiva', region: 'nacional' },
    { source: 'Auto Papo', url: 'https://autopapo.uol.com.br/feed/', color: '#7b1fa2', category: 'Automotiva', region: 'nacional' },
    // AUTOMOTIVA - Internacionais
    { source: 'Autoblog', url: 'https://www.autoblog.com/rss.xml', color: '#d32f2f', category: 'Automotiva', region: 'internacional' },
    { source: 'Car and Driver', url: 'https://www.caranddriver.com/rss/all.xml', color: '#1565c0', category: 'Automotiva', region: 'internacional' },
    { source: 'Motor1', url: 'https://www.motor1.com/rss/news/all/', color: '#2e7d32', category: 'Automotiva', region: 'internacional' },
    { source: 'Automotive News', url: 'https://www.autonews.com/rss/feed.xml', color: '#4527a0', category: 'Automotiva', region: 'internacional' },
    // BENS DE CONSUMO - Brasileiras
    { source: 'Techtudo', url: 'https://www.techtudo.com.br/rss/', color: '#c4170c', category: 'Bens de Consumo', region: 'nacional' },
    { source: 'Tudocelular', url: 'https://www.tudocelular.com/rss/', color: '#00a651', category: 'Bens de Consumo', region: 'nacional' },
    { source: 'Gizmodo Brasil', url: 'https://gizmodo.uol.com.br/feed/', color: '#00b0f0', category: 'Bens de Consumo', region: 'nacional' },
    { source: 'Tecnoblog', url: 'https://tecnoblog.net/feed/', color: '#e91e63', category: 'Bens de Consumo', region: 'nacional' },
    // BENS DE CONSUMO - Internacionais
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
let visibleDestaques = 9;
let visiblePorCategoria = 9;
const INCREMENTO = 9;
let destaquesAtuais = [];
let indiceRotacaoDestaques = 0;

// ===== PRODUTOS AFILIADOS =====
const produtosAmazon = [
    { nome: 'Arduino Uno R3', preco: 'R$ 89,90', fonte: 'Amazon', imagem: 'https://m.media-amazon.com/images/I/61zWlVvzSGL._AC_SL1000_.jpg', link: 'https://www.amazon.com.br/dp/B008GRTSV6?tag=SEU_TAG' },
    { nome: 'ESP32 Dev Board', preco: 'R$ 45,00', fonte: 'Amazon', imagem: 'https://m.media-amazon.com/images/I/61fYdUXh1XL._AC_SL1000_.jpg', link: 'https://www.amazon.com.br/dp/B07Q576VWZ?tag=SEU_TAG' },
    { nome: 'Smartwatch Xiaomi', preco: 'R$ 299,00', fonte: 'Amazon', imagem: 'https://m.media-amazon.com/images/I/61vNjGrgOML._AC_SL1500_.jpg', link: 'https://www.amazon.com.br/dp/B09B3HMZFY?tag=SEU_TAG' }
];
const produtosMouser = [
    { nome: 'STM32F103', preco: 'US$ 12,50', fonte: 'Mouser', imagem: 'https://www.mouser.com/images/st/lrg/STM32F103_SPL.jpg', link: 'https://br.mouser.com/ProductDetail/ST/STM32F103C8T6?aff=SEU_ID' },
    { nome: 'DS18B20', preco: 'US$ 3,80', fonte: 'Mouser', imagem: 'https://www.mouser.com/images/ti/lrg/DS18B20_SPL.jpg', link: 'https://br.mouser.com/ProductDetail/TI/DS18B20?aff=SEU_ID' },
    { nome: 'USB-C Connector', preco: 'US$ 1,20', fonte: 'Mouser', imagem: 'https://www.mouser.com/images/te/lrg/USBC_SPL.jpg', link: 'https://br.mouser.com/ProductDetail/TE/USB-C?aff=SEU_ID' }
];
const produtosDigikey = [
    { nome: 'Raspberry Pi 4', preco: 'US$ 55,00', fonte: 'Digi-Key', imagem: 'https://www.digikey.com/-/media/Images/RPi4.jpg', link: 'https://www.digikey.com.br/pt/products/detail/rpi/SC0194/13691224?aff=SEU_ID' },
    { nome: 'LED Cree', preco: 'US$ 2,50', fonte: 'Digi-Key', imagem: 'https://www.digikey.com/-/media/Images/CreeLED.jpg', link: 'https://www.digikey.com.br/pt/products/detail/cree/XPGBWT/5799727?aff=SEU_ID' },
    { nome: 'LM7805', preco: 'US$ 0,80', fonte: 'Digi-Key', imagem: 'https://www.digikey.com/-/media/Images/LM7805.jpg', link: 'https://www.digikey.com.br/pt/products/detail/ti/LM7805/2127184?aff=SEU_ID' }
];
const anunciosConfig = { intervalo: 30000, ordem: ['amazon','adsense','mouser','digikey'], indice: 0 };
const adsenseHTML = '<div class="adsense-container"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-SEU_ID" crossorigin="anonymous"></script><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-SEU_ID" data-ad-slot="SEU_SLOT" data-ad-format="auto"></ins><script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></div>';

function rotacionarAnuncios() {
    const tipo = anunciosConfig.ordem[anunciosConfig.indice];
    renderizarAnuncioDesktop(tipo);
    renderizarAnuncioMobile(tipo);
    anunciosConfig.indice = (anunciosConfig.indice + 1) % anunciosConfig.ordem.length;
}
function renderizarAnuncioDesktop(tipo) {
    const c = document.getElementById('produtos-grid-desktop');
    const badge = document.getElementById('anuncio-badge-desktop');
    const produtos = tipo === 'amazon' ? produtosAmazon : tipo === 'mouser' ? produtosMouser : tipo === 'digikey' ? produtosDigikey : null;
    if (tipo === 'adsense') { c.innerHTML = adsenseHTML; badge.textContent = '🟢 Google AdSense'; return; }
    c.innerHTML = produtos.map(p => `<div class="produto-card-sidebar" onclick="window.open('${p.link}','_blank')"><div class="produto-imagem-sidebar" style="background-image:url('${p.imagem}')"></div><div class="produto-info-sidebar"><div class="produto-nome-sidebar">${p.nome}</div><div class="produto-preco-sidebar">${p.preco}</div><div class="produto-fonte-sidebar">${p.fonte}</div></div><a class="produto-link-sidebar" href="${p.link}" target="_blank">Ver →</a></div>`).join('');
    badge.textContent = tipo === 'amazon' ? '🔵 Amazon' : tipo === 'mouser' ? '🟠 Mouser' : '🔴 Digi-Key';
}
function renderizarAnuncioMobile(tipo) {
    const c = document.getElementById('produtos-grid-mobile');
    const produtos = tipo === 'amazon' ? produtosAmazon : tipo === 'mouser' ? produtosMouser : tipo === 'digikey' ? produtosDigikey : null;
    if (tipo === 'adsense') { c.innerHTML = adsenseHTML; return; }
    c.innerHTML = produtos.map(p => `<div class="produto-card" onclick="window.open('${p.link}','_blank')"><div class="produto-imagem" style="background-image:url('${p.imagem}')"></div><div class="produto-info"><div class="produto-nome">${p.nome}</div><div class="produto-preco">${p.preco}</div><div class="produto-fonte">${p.fonte}</div></div><a class="produto-link" href="${p.link}" target="_blank">Ver na Loja</a></div>`).join('');
}

// ===== DATA =====
function updateDate() { const d = new Date(); document.getElementById('current-date').textContent = d.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); }

// ===== COTAÇÕES =====
async function fetchExchangeRates() {
    try {
        const res = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
        if (!res.ok) throw new Error('Erro');
        const data = await res.json();
        if (data.USDBRL && data.EURBRL) {
            const usd = `R$ ${parseFloat(data.USDBRL.bid).toFixed(2)}`;
            const eur = `R$ ${parseFloat(data.EURBRL.bid).toFixed(2)}`;
            document.getElementById('usd-value-mobile').textContent = usd;
            document.getElementById('eur-value-mobile').textContent = eur;
            document.getElementById('usd-value-inline').textContent = usd;
            document.getElementById('eur-value-inline').textContent = eur;
            updateTrend('usd-trend-inline', parseFloat(data.USDBRL.pctChange));
            updateTrend('eur-trend-inline', parseFloat(data.EURBRL.pctChange));
            const t = new Date().toLocaleTimeString('pt-BR');
            document.getElementById('exchange-update-mobile').textContent = `Atualizado às ${t}`;
            document.getElementById('exchange-update-inline').textContent = `Atualizado às ${t}`;
        }
    } catch(e) { console.error('Cotações:', e); }
}
function updateTrend(id, v) { const el = document.getElementById(id); if (!el) return; el.textContent = v >= 0 ? `▲ ${Math.abs(v).toFixed(2)}%` : `▼ ${Math.abs(v).toFixed(2)}%`; el.className = `exchange-trend ${v >= 0 ? 'positive' : 'negative'}`; }

// ===== CLIMA =====
async function fetchWeather() {
    try {
        if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(pos => fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude), () => fetchWeatherByCoords(-23.5505, -46.6333)); }
        else { fetchWeatherByCoords(-23.5505, -46.6333); }
    } catch(e) { console.error('Clima:', e); }
}
async function fetchWeatherByCoords(lat, lon) {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=5`);
        const data = await res.json();
        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weather_code;
        document.getElementById('header-temp').textContent = `${temp}°C`;
        document.getElementById('weather-temp').textContent = `${temp}°C`;
        document.getElementById('weather-desc').textContent = getWDesc(code);
        document.getElementById('weather-icon').textContent = getWEmoji(code);
        document.getElementById('sidebar-weather-temp').textContent = `${temp}°C`;
        document.getElementById('sidebar-weather-icon').textContent = getWEmoji(code);
        try {
            const g = await fetch(`https://geocoding-api.open-meteo.com/v1/search?latitude=${lat}&longitude=${lon}&count=1&language=pt&format=json`);
            const gd = await g.json();
            if (gd.results?.[0]) { const loc = gd.results[0].name; document.getElementById('weather-location').textContent = `📍 ${loc}`; document.getElementById('header-location').textContent = loc; document.getElementById('sidebar-weather-location').textContent = `📍 ${loc}`; }
        } catch(e) {}
        const fc = document.getElementById('weather-forecast');
        fc.innerHTML = '';
        const dias = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
        for (let i = 0; i < data.daily.time.length; i++) { const d = new Date(data.daily.time[i]); fc.innerHTML += `<div class="forecast-item"><span class="forecast-day">${dias[d.getDay()]}</span><span class="forecast-icon">${getWEmoji(data.daily.weather_code[i])}</span><span class="forecast-temp">${Math.round(data.daily.temperature_2m_max[i])}°/${Math.round(data.daily.temperature_2m_min[i])}°</span></div>`; }
    } catch(e) { document.getElementById('weather-temp').textContent = '--°C'; document.getElementById('weather-desc').textContent = 'Indisponível'; }
}
function getWDesc(c) { const d={0:'Céu limpo',1:'Parcialmente nublado',2:'Parcialmente nublado',3:'Nublado',45:'Nevoeiro',48:'Nevoeiro',51:'Garoa',53:'Garoa',55:'Garoa',61:'Chuva fraca',63:'Chuva',65:'Chuva forte',80:'Pancadas',81:'Pancadas fortes',82:'Pancadas violentas',95:'Trovoada'}; return d[c]||'Variável'; }
function getWEmoji(c) { if(c===0)return'☀️';if(c<=2)return'🌤️';if(c===3)return'☁️';if(c<=48)return'🌫️';if(c<=55)return'🌧️';if(c<=65)return'🌧️';if(c<=82)return'⛈️';return'🌡️'; }

// ===== MENU =====
document.getElementById('hamburger-btn').addEventListener('click', () => { document.getElementById('sidebar-mobile').classList.add('active'); document.getElementById('sidebar-overlay').classList.add('active'); });
document.getElementById('close-sidebar').addEventListener('click', () => { document.getElementById('sidebar-mobile').classList.remove('active'); document.getElementById('sidebar-overlay').classList.remove('active'); });
document.getElementById('sidebar-overlay').addEventListener('click', () => { document.getElementById('sidebar-mobile').classList.remove('active'); document.getElementById('sidebar-overlay').classList.remove('active'); });

// ===== BUSCA =====
document.getElementById('search-btn').addEventListener('click', () => { document.getElementById('search-overlay').classList.add('active'); document.getElementById('search-input').focus(); });
document.getElementById('close-search').addEventListener('click', () => { document.getElementById('search-overlay').classList.remove('active'); document.getElementById('search-input').value=''; document.getElementById('search-results').innerHTML=''; });
document.getElementById('search-input').addEventListener('input', debounce(e => {
    const q = e.target.value.toLowerCase();
    const c = document.getElementById('search-results');
    if (q.length < 3) { c.innerHTML=''; return; }
    const r = allNews.filter(n => n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q) || n.source.toLowerCase().includes(q)).slice(0,20);
    c.innerHTML = r.length ? r.map(n => `<div class="search-result-item" onclick="window.open('${n.link}','_blank')"><h3 style="margin:0 0 0.5rem;color:#1e3c72;">${n.title}</h3><p style="margin:0;font-size:0.9rem;color:#666;">${n.source} - ${n.category}</p></div>`).join('') : '<p style="color:white;text-align:center;padding:1rem;">Nenhum resultado.</p>';
}, 300));

// ===== FILTROS =====
document.querySelectorAll('.region-btn, .region-btn-mobile').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.region-btn, .region-btn-mobile').forEach(b => b.classList.remove('active'));
        document.querySelectorAll(`.region-btn[data-region="${btn.dataset.region}"], .region-btn-mobile[data-region="${btn.dataset.region}"]`).forEach(b => b.classList.add('active'));
        activeRegion = btn.dataset.region;
        visibleDestaques = 9;
        visiblePorCategoria = 9;
        renderAllSections();
    });
});
document.querySelectorAll('.filter-btn, .filter-btn-mobile').forEach(btn => {
    btn.addEventListener('click', () => {
        const t = btn.dataset.category;
        if (t === 'destaques') { document.getElementById('destaques').scrollIntoView({behavior:'smooth'}); }
        else { const el = document.getElementById(`cat-${t}`); if (el) el.scrollIntoView({behavior:'smooth'}); }
        document.getElementById('sidebar-mobile').classList.remove('active');
        document.getElementById('sidebar-overlay').classList.remove('active');
    });
});

// ===== PRIORIZAÇÃO =====
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
function loadMoreNews() { visibleDestaques += INCREMENTO; renderDestaques(); }
window.loadMoreNews = loadMoreNews;

// ===== FEEDS =====
async function fetchFeed(feed) {
    try {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`);
        const data = await res.json();
        if (data.status === 'ok') {
            return data.items.map(item => ({
                source: feed.source, color: feed.color, category: feed.category, region: feed.region,
                title: item.title, link: item.link,
                description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
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
    document.getElementById('destaques-grid').innerHTML = '<div class="loading">Carregando...</div>';
    try {
        const results = await Promise.all(feeds.map(f => fetchFeed(f)));
        allNews = results.flat().sort((a, b) => b.pubDate - a.pubDate);
        updateStats();
        updateSourcesList();
        renderAllSections();
    } catch(e) { document.getElementById('destaques-grid').innerHTML = '<div class="loading">Erro.</div>'; }
    finally { isLoading = false; }
}

// ===== ATUALIZAR NOTÍCIAS (botão flutuante) =====
function atualizarNoticias() {
    const btn = document.getElementById('btn-atualizar');
    btn.classList.add('spinning');
    loadAllFeeds();
    fetchExchangeRates();
    fetchWeather();
    setTimeout(() => btn.classList.remove('spinning'), 1000);
}
window.atualizarNoticias = atualizarNoticias;

// ===== RENDERIZAÇÃO =====
function renderAllSections() {
    let filtered = allNews;
    if (activeRegion !== 'all') filtered = allNews.filter(n => n.region === activeRegion);
    destaquesAtuais = getDestaques();
    renderDestaques();
    const categorias = ['Aeronáutica','Automotiva','Semicondutores','Indústria','Embarcados','Projetos','Bens de Consumo','Geral'];
    const container = document.getElementById('categorias-container');
    container.innerHTML = '';
    categorias.forEach(cat => {
        const catNews = priorizarBrasileiros(filtered.filter(n => n.category === cat));
        const limited = catNews.slice(0, visiblePorCategoria);
        if (limited.length > 0) {
            const s = document.createElement('section');
            s.className = 'categoria-bloco';
            s.id = `cat-${cat}`;
            s.innerHTML = `<h2 class="section-title">${cat}</h2>`;
            const g = document.createElement('div');
            g.className = 'categoria-grid';
            g.innerHTML = limited.map(n => createCard(n)).join('');
            s.appendChild(g);
            if (catNews.length > visiblePorCategoria) {
                const btn = document.createElement('button');
                btn.className = 'ver-mais-btn';
                btn.textContent = 'Ver Mais';
                btn.onclick = () => { visiblePorCategoria += INCREMENTO; renderAllSections(); };
                s.appendChild(btn);
            }
            container.appendChild(s);
        }
    });
}
function renderDestaques() {
    const grid = document.getElementById('destaques-grid');
    const btn = document.getElementById('ver-mais-destaques');
    const indicador = document.getElementById('destaques-indicador');
    if (!destaquesAtuais.length) { grid.innerHTML = '<div class="loading">Nenhuma notícia.</div>'; btn.style.display = 'none'; return; }
    const rotacionados = [...destaquesAtuais.slice(indiceRotacaoDestaques), ...destaquesAtuais.slice(0, indiceRotacaoDestaques)];
    grid.innerHTML = rotacionados.slice(0, visibleDestaques).map(n => createCard(n)).join('');
    btn.style.display = rotacionados.length > visibleDestaques ? 'block' : 'none';
    const totalNac = destaquesAtuais.filter(n => n.region === 'nacional').length;
    indicador.textContent = `(${totalNac} nacionais / ${destaquesAtuais.length - totalNac} internacionais)`;
}
function createCard(news) {
    const badge = news.region === 'nacional' ? '<span class="card-region region-nacional">🇧🇷</span>' : '<span class="card-region region-internacional">🌍</span>';
    const img = news.image ? `<div class="card-image" style="background-image:url('${news.image}')"><span class="card-category">${news.category}</span></div>` : `<div class="card-image" style="background-image:linear-gradient(135deg,#667eea,#764ba2)"><span class="card-category">${news.category}</span></div>`;
    return `<article class="card" onclick="window.open('${news.link}','_blank')">${img}<div class="card-content"><div class="card-source-row"><span class="card-source" style="color:${news.color}">${news.source}</span>${badge}</div><h2>${news.title}</h2><p>${news.description}</p><div class="card-footer"><span>📅 ${news.pubDateFormatted}</span><span>🔗</span></div></div></article>`;
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
    const active = feeds.filter(f => allNews.some(n => n.source === f.source));
    list.innerHTML = active.length ? active.slice(0, 12).map(f => `<li><span class="source-dot" style="background:${f.color}"></span>${f.source}<span style="margin-left:auto;font-size:0.8rem;">${f.region==='nacional'?'🇧🇷':'🌍'}</span></li>`).join('') : '<li>Nenhuma fonte ativa</li>';
}

// ===== AUXILIARES =====
function debounce(fn, wait) { let t; return function(...args) { clearTimeout(t); t = setTimeout(() => fn(...args), wait); }; }

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    fetchExchangeRates();
    fetchWeather();
    loadAllFeeds();
    rotacionarAnuncios();
    setInterval(fetchExchangeRates, 300000);
    setInterval(fetchWeather, 600000);
    setInterval(loadAllFeeds, 1800000);
    setInterval(rotacionarAnuncios, anunciosConfig.intervalo);
    setInterval(() => { indiceRotacaoDestaques = (indiceRotacaoDestaques + 5) % Math.max(destaquesAtuais.length, 1); renderDestaques(); }, 300000);
});
