// ============================================
// PORTAL MANUFATURA ELETRÔNICA NEWS
// 73 Fontes + Todas as Funcionalidades
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
    { source: 'Tom\'s Hardware', url: 'https://www.tomshardware.com/feeds/all', color: '#c4170c', category: 'Bens de Consumo', region: 'internacional' },
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
const INCREMENTO = 9;
let destaquesAtuais = [];
let indiceRotacaoDestaques = 0;

// ===== ENQUETE =====
const perguntaEnquete = 'Qual seu nível de experiência com manufatura eletrônica?';
let votosEnquete = { muita: 0, media: 0, nenhuma: 0 };
let jaVotou = false;

function carregarVotos() {
    try {
        const salvos = localStorage.getItem('votosEnquete');
        if (salvos) votosEnquete = JSON.parse(salvos);
        const votado = localStorage.getItem('jaVotouEnquete');
        if (votado === 'true') {
            jaVotou = true;
            const btnVotar = document.getElementById('btn-votar');
            if (btnVotar) {
                btnVotar.disabled = true;
                btnVotar.style.opacity = '0.5';
            }
            verResultados();
        }
    } catch(e) { console.error('Erro ao carregar votos:', e); }
}

function salvarVotos() { 
    try { 
        localStorage.setItem('votosEnquete', JSON.stringify(votosEnquete)); 
        localStorage.setItem('jaVotouEnquete', 'true'); 
    } catch(e) { console.error('Erro ao salvar votos:', e); } 
}

function votar() {
    const selecionada = document.querySelector('input[name="enquete"]:checked');
    if (!selecionada) { alert('Por favor, selecione uma opção.'); return; }
    if (jaVotou) { alert('Você já votou nesta enquete!'); verResultados(); return; }
    const voto = selecionada.value;
    if (votosEnquete[voto] !== undefined) {
        votosEnquete[voto]++; 
        jaVotou = true; 
        salvarVotos(); 
        verResultados();
        const btnVotar = document.getElementById('btn-votar');
        if (btnVotar) {
            btnVotar.disabled = true;
            btnVotar.style.opacity = '0.5';
        }
    }
}

function verResultados() {
    const resultadosDiv = document.getElementById('enquete-resultados');
    if (!resultadosDiv) return;
    resultadosDiv.style.display = 'block';
    const total = votosEnquete.muita + votosEnquete.media + votosEnquete.nenhuma;
    if (total === 0) { 
        const totalVotos = document.getElementById('total-votos');
        if (totalVotos) totalVotos.textContent = 'Nenhum voto registrado ainda.'; 
        return; 
    }
    const pctMuita = ((votosEnquete.muita / total) * 100).toFixed(1);
    const pctMedia = ((votosEnquete.media / total) * 100).toFixed(1);
    const pctNenhuma = ((votosEnquete.nenhuma / total) * 100).toFixed(1);
    
    const barraMuita = document.getElementById('barra-muita');
    const barraMedia = document.getElementById('barra-media');
    const barraNenhuma = document.getElementById('barra-nenhuma');
    const pctMuitaEl = document.getElementById('pct-muita');
    const pctMediaEl = document.getElementById('pct-media');
    const pctNenhumaEl = document.getElementById('pct-nenhuma');
    const totalVotosEl = document.getElementById('total-votos');
    
    if (barraMuita) barraMuita.style.width = `${pctMuita}%`;
    if (barraMedia) barraMedia.style.width = `${pctMedia}%`;
    if (barraNenhuma) barraNenhuma.style.width = `${pctNenhuma}%`;
    if (pctMuitaEl) pctMuitaEl.textContent = `${pctMuita}%`;
    if (pctMediaEl) pctMediaEl.textContent = `${pctMedia}%`;
    if (pctNenhumaEl) pctNenhumaEl.textContent = `${pctNenhuma}%`;
    if (totalVotosEl) totalVotosEl.textContent = `Total de votos: ${total}`;
}

window.votar = votar;
window.verResultados = verResultados;

// ===== RECOMENDADOS =====
function renderizarRecomendados() {
    const recomendados = allNews.filter(n => n.category === 'Indústria' || n.category === 'Semicondutores').slice(0, 6);
    const containerDesktop = document.getElementById('recomendados-list-desktop');
    if (containerDesktop) {
        containerDesktop.innerHTML = recomendados.length ? recomendados.map(n => createRecomendadoHTML(n)).join('') : '<div class="loading-mini">Carregando...</div>';
    }
    const containerMobile = document.getElementById('recomendados-list-mobile');
    if (containerMobile) {
        containerMobile.innerHTML = recomendados.length ? recomendados.map(n => createRecomendadoHTML(n)).join('') : '<div class="loading-mini">Carregando...</div>';
    }
}

function createRecomendadoHTML(n) {
    const img = n.image ? `<div class="recomendado-imagem" style="background-image:url('${n.image}')"></div>` : `<div class="recomendado-imagem">🔲</div>`;
    return `<div class="recomendado-item" onclick="window.open('${n.link}','_blank')">${img}<div class="recomendado-info"><div class="recomendado-titulo">${n.title}</div><div class="recomendado-fonte">${n.source} • ${n.category}</div><div class="recomendado-descricao">${n.description}</div></div></div>`;
}

// ===== DATA =====
function updateDate() { 
    const d = new Date(); 
    const el = document.getElementById('current-date');
    if (el) el.textContent = d.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); 
}

// ===== COTAÇÕES =====
async function fetchExchangeRates() {
    try {
        const res = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
        if (!res.ok) throw new Error('Erro');
        const data = await res.json();
        if (data.USDBRL && data.EURBRL) {
            const usd = `R$ ${parseFloat(data.USDBRL.bid).toFixed(2)}`;
            const eur = `R$ ${parseFloat(data.EURBRL.bid).toFixed(2)}`;
            setText('usd-value-mobile', usd);
            setText('eur-value-mobile', eur);
            setText('usd-value-inline', usd);
            setText('eur-value-inline', eur);
            updateTrend('usd-trend-inline', parseFloat(data.USDBRL.pctChange));
            updateTrend('eur-trend-inline', parseFloat(data.EURBRL.pctChange));
            const t = new Date().toLocaleTimeString('pt-BR');
            setText('exchange-update-mobile', `Atualizado às ${t}`);
            setText('exchange-update-inline', `Atualizado às ${t}`);
        }
    } catch(e) { console.error('Erro cotações:', e); }
}

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function updateTrend(id, v) { 
    const el = document.getElementById(id); 
    if (!el) return; 
    el.textContent = v >= 0 ? `▲ ${Math.abs(v).toFixed(2)}%` : `▼ ${Math.abs(v).toFixed(2)}%`; 
    el.className = `exchange-trend ${v >= 0 ? 'positive' : 'negative'}`; 
}

// ===== CLIMA =====
async function fetchWeather() {
    try {
        if (navigator.geolocation) { 
            navigator.geolocation.getCurrentPosition(
                pos => fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude), 
                () => fetchWeatherByCoords(-23.5505, -46.6333)
            ); 
        } else { 
            fetchWeatherByCoords(-23.5505, -46.6333); 
        }
    } catch(e) { console.error('Erro clima:', e); }
}

async function fetchWeatherByCoords(lat, lon) {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=5`);
        const data = await res.json();
        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weather_code;
        const emoji = getWEmoji(code);
        
        setText('header-weather-icon', emoji);
        setText('header-temp', `${temp}°C`);
        setText('weather-temp', `${temp}°C`);
        setText('weather-desc', getWDesc(code));
        setText('weather-icon', emoji);
        setText('sidebar-weather-temp', `${temp}°C`);
        setText('sidebar-weather-icon', emoji);
        
        try {
            const g = await fetch(`https://geocoding-api.open-meteo.com/v1/search?latitude=${lat}&longitude=${lon}&count=1&language=pt&format=json`);
            const gd = await g.json();
            if (gd.results && gd.results[0]) { 
                const loc = gd.results[0].name; 
                setText('weather-location', `📍 ${loc}`); 
                setText('header-location', loc); 
                setText('sidebar-weather-location', `📍 ${loc}`); 
            }
        } catch(e) {}
        
        const fc = document.getElementById('weather-forecast');
        if (fc) {
            fc.innerHTML = '';
            const dias = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
            for (let i = 0; i < data.daily.time.length; i++) { 
                const d = new Date(data.daily.time[i]); 
                fc.innerHTML += `<div class="forecast-item"><span class="forecast-day">${dias[d.getDay()]}</span><span class="forecast-icon">${getWEmoji(data.daily.weather_code[i])}</span><span class="forecast-temp">${Math.round(data.daily.temperature_2m_max[i])}°/${Math.round(data.daily.temperature_2m_min[i])}°</span></div>`; 
            }
        }
    } catch(e) { 
        setText('weather-temp', '--°C');
        setText('weather-desc', 'Indisponível');
    }
}

function getWDesc(c) { 
    const d = {0:'Céu limpo',1:'Parcialmente nublado',2:'Parcialmente nublado',3:'Nublado',45:'Nevoeiro',48:'Nevoeiro',51:'Garoa',53:'Garoa',55:'Garoa',61:'Chuva fraca',63:'Chuva',65:'Chuva forte',80:'Pancadas',95:'Trovoada'}; 
    return d[c] || 'Variável'; 
}

function getWEmoji(c) { 
    if(c===0) return '☀️';
    if(c<=2) return '🌤️';
    if(c===3) return '☁️';
    if(c<=48) return '🌫️';
    if(c<=55) return '🌧️';
    if(c<=65) return '🌧️';
    if(c<=82) return '⛈️';
    return '🌡️'; 
}

// ===== INICIALIZAÇÃO SEGURA =====
function initApp() {
    // Carrega votos
    carregarVotos();
    
    // Configura pergunta da enquete
    setText('enquete-pergunta', perguntaEnquete);
    
    // Configura menu hamburguer desktop
    const hamburgerDesktop = document.getElementById('hamburger-btn-desktop');
    const desktopDropdown = document.getElementById('desktop-dropdown');
    if (hamburgerDesktop && desktopDropdown) {
        hamburgerDesktop.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopDropdown.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!desktopDropdown.contains(e.target) && e.target !== hamburgerDesktop) {
                desktopDropdown.classList.remove('active');
            }
        });
    }
    
    // Configura menu categorias desktop
    const menuToggle = document.getElementById('menu-toggle-desktop');
    const filtersDesktop = document.getElementById('filters-desktop');
    if (menuToggle && filtersDesktop) {
        menuToggle.addEventListener('click', () => {
            filtersDesktop.classList.toggle('active');
            menuToggle.textContent = filtersDesktop.classList.contains('active') ? '✕ Fechar Categorias' : '☰ Categorias';
        });
    }
    
    // Configura menu mobile
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarMobile = document.getElementById('sidebar-mobile');
    
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            if (sidebarMobile) sidebarMobile.classList.add('active');
            if (sidebarOverlay) sidebarOverlay.classList.add('active');
        });
    }
    if (closeSidebar) {
        closeSidebar.addEventListener('click', () => {
            if (sidebarMobile) sidebarMobile.classList.remove('active');
            if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        });
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
            if (sidebarMobile) sidebarMobile.classList.remove('active');
            if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        });
    }
    
    // Configura busca
    const searchBtn = document.getElementById('search-btn');
    const closeSearch = document.getElementById('close-search');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchBtn && searchOverlay && searchInput) {
        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            searchInput.focus();
        });
    }
    if (closeSearch && searchOverlay && searchInput && searchResults) {
        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        });
    }
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', debounce((e) => {
            const q = e.target.value.toLowerCase();
            if (q.length < 3) { searchResults.innerHTML = ''; return; }
            const r = allNews.filter(n => n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q) || n.source.toLowerCase().includes(q)).slice(0, 20);
            searchResults.innerHTML = r.length ? r.map(n => `<div class="search-result-item" onclick="window.open('${n.link}','_blank')"><h3 style="margin:0 0 0.5rem;color:#c4170c;">${n.title}</h3><p style="margin:0;font-size:0.9rem;color:#666;">${n.source} - ${n.category}</p></div>`).join('') : '<p style="color:white;text-align:center;padding:1rem;">Nenhum resultado.</p>';
        }, 300));
    }
    
    // Configura filtros de região
    document.querySelectorAll('.region-btn, .region-btn-mobile').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.region-btn, .region-btn-mobile').forEach(b => b.classList.remove('active'));
            document.querySelectorAll(`.region-btn[data-region="${btn.dataset.region}"], .region-btn-mobile[data-region="${btn.dataset.region}"]`).forEach(b => b.classList.add('active'));
            activeRegion = btn.dataset.region;
            visibleDestaques = 9;
            visiblePorCategoria = 9;
            renderAllSections();
            if (desktopDropdown) desktopDropdown.classList.remove('active');
            if (sidebarMobile) sidebarMobile.classList.remove('active');
            if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        });
    });
    
    // Configura filtros de categoria
    document.querySelectorAll('.filter-btn, .filter-btn-mobile').forEach(btn => {
        btn.addEventListener('click', () => {
            const t = btn.dataset.category;
            if (t === 'destaques') {
                const el = document.getElementById('destaques');
                if (el) el.scrollIntoView({behavior:'smooth'});
            } else {
                const el = document.getElementById(`cat-${t}`);
                if (el) el.scrollIntoView({behavior:'smooth'});
            }
            if (sidebarMobile) sidebarMobile.classList.remove('active');
            if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        });
    });
    
    // Inicia carregamento
    updateDate();
    fetchExchangeRates();
    fetchWeather();
    loadAllFeeds();
    
    // Intervalos
    setInterval(fetchExchangeRates, 300000);
    setInterval(fetchWeather, 600000);
    setInterval(loadAllFeeds, 1800000);
    setInterval(() => { 
        indiceRotacaoDestaques = (indiceRotacaoDestaques + 5) % Math.max(destaquesAtuais.length, 1); 
        renderDestaques(); 
    }, 300000);
}

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

function loadMoreNews() { 
    visibleDestaques += INCREMENTO; 
    renderDestaques(); 
}
window.loadMoreNews = loadMoreNews;

// ===== FEEDS =====
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
                description: item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : '',
                image: item.enclosure?.link || item.thumbnail || '',
                pubDate: new Date(item.pubDate),
                pubDateFormatted: new Date(item.pubDate).toLocaleDateString('pt-BR')
            }));
        }
        return [];
    } catch(e) { 
        console.error(`Erro ao buscar ${feed.source}:`, e); 
        return []; 
    }
}

async function loadAllFeeds() {
    if (isLoading) return;
    isLoading = true;
    const grid = document.getElementById('destaques-grid');
    if (grid) grid.innerHTML = '<div class="loading">Carregando...</div>';
    try {
        const results = await Promise.all(feeds.map(f => fetchFeed(f)));
        allNews = results.flat().sort((a, b) => b.pubDate - a.pubDate);
        updateStats(); 
        updateSourcesList(); 
        renderAllSections(); 
        renderizarRecomendados();
    } catch(e) { 
        console.error('Erro ao carregar feeds:', e);
        if (grid) grid.innerHTML = '<div class="loading">Erro ao carregar.</div>'; 
    } finally { 
        isLoading = false; 
    }
}

function atualizarNoticias() {
    const btn = document.getElementById('btn-atualizar');
    if (btn) btn.classList.add('spinning');
    loadAllFeeds(); 
    fetchExchangeRates(); 
    fetchWeather();
    setTimeout(() => { if (btn) btn.classList.remove('spinning'); }, 1000);
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
    if (!container) return;
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
                btn.onclick = () => { 
                    visiblePorCategoria += INCREMENTO; 
                    renderAllSections(); 
                };
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
    if (!grid) return;
    
    if (!destaquesAtuais.length) { 
        grid.innerHTML = '<div class="loading">Nenhuma notícia.</div>'; 
        if (btn) btn.style.display = 'none'; 
        return; 
    }
    
    const rotacionados = [...destaquesAtuais.slice(indiceRotacaoDestaques), ...destaquesAtuais.slice(0, indiceRotacaoDestaques)];
    grid.innerHTML = rotacionados.slice(0, visibleDestaques).map(n => createCard(n)).join('');
    if (btn) btn.style.display = rotacionados.length > visibleDestaques ? 'block' : 'none';
    if (indicador) {
        const totalNac = destaquesAtuais.filter(n => n.region === 'nacional').length;
        indicador.textContent = `(${totalNac} nacionais / ${destaquesAtuais.length - totalNac} internacionais)`;
    }
}

function createCard(news) {
    const badge = news.region === 'nacional' ? '<span class="card-region region-nacional">🇧🇷</span>' : '<span class="card-region region-internacional">🌍</span>';
    let imgHtml;
    if (news.image) {
        imgHtml = `<div class="card-image" style="background-image:url('${news.image}')"><span class="card-category">${news.category}</span></div>`;
    } else {
        imgHtml = `<div class="card-image" style="background:#e8f4fd;position:relative;"><div class="card-image-placeholder"><svg viewBox="0 0 50 50" fill="none" style="width:60px;height:60px;"><rect x="5" y="5" width="40" height="40" rx="5" fill="#bbdefb"/><rect x="12.5" y="12.5" width="25" height="25" rx="3" fill="none" stroke="#1565c0" stroke-width="2"/><line x1="12.5" y1="25" x2="37.5" y2="25" stroke="#1565c0" stroke-width="1.5"/><line x1="25" y1="12.5" x2="25" y2="37.5" stroke="#1565c0" stroke-width="1.5"/><circle cx="12.5" cy="12.5" r="2" fill="#ffd700"/><circle cx="37.5" cy="12.5" r="2" fill="#ffd700"/><circle cx="12.5" cy="37.5" r="2" fill="#ffd700"/><circle cx="37.5" cy="37.5" r="2" fill="#ffd700"/></svg></div><span class="card-category">${news.category}</span></div>`;
    }
    return `<article class="card" onclick="window.open('${news.link}','_blank')">${imgHtml}<div class="card-content"><div class="card-source-row"><span class="card-source" style="color:#000000;">${news.source}</span>${badge}</div><h2>${news.title}</h2><p>${news.description}</p><div class="card-footer"><span>📅 ${news.pubDateFormatted}</span><span>🔗</span></div></div></article>`;
}

// ===== ESTATÍSTICAS =====
function updateStats() {
    setText('total-news', allNews.length);
    setText('total-sources', new Set(allNews.map(n => n.source)).size);
    setText('total-news-mobile', allNews.length);
    setText('total-sources-mobile', new Set(allNews.map(n => n.source)).size);
}

function updateSourcesList() {
    const list = document.getElementById('sources-list');
    if (!list) return;
    const active = feeds.filter(f => allNews.some(n => n.source === f.source));
    list.innerHTML = active.length ? active.slice(0, 12).map(f => `<li><span class="source-dot" style="background:${f.color}"></span>${f.source}<span style="margin-left:auto;font-size:0.8rem;">${f.region==='nacional'?'🇧🇷':'🌍'}</span></li>`).join('') : '<li>Nenhuma fonte ativa</li>';
}

// ===== AUXILIARES =====
function debounce(fn, wait) { 
    let t; 
    return function(...args) { 
        clearTimeout(t); 
        t = setTimeout(() => fn(...args), wait); 
    }; 
}

// ===== INICIALIZAÇÃO =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
