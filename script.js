// ============================================
// PORTAL MANUFATURA ELETRÔNICA NEWS
// ============================================

const feeds = [
    // GERAL - Brasileiras
    { source: 'Inovação Tecnológica', url: 'https://www.inovacaotecnologica.com.br/rss.xml', color: '#2a5298', category: 'Geral', region: 'nacional' },
    { source: 'Canaltech', url: 'https://canaltech.com.br/rss/', color: '#1e88e5', category: 'Geral', region: 'nacional' },
    { source: 'Olhar Digital', url: 'https://olhardigital.com.br/feed/', color: '#00bfa5', category: 'Geral', region: 'nacional' },
    { source: 'Tecmundo', url: 'https://www.tecmundo.com.br/rss', color: '#ff6f00', category: 'Geral', region: 'nacional' },
    // GERAL - Internacionais
    { source: 'MIT Technology Review', url: 'https://www.technologyreview.com/feed/', color: '#d32f2f', category: 'Geral', region: 'internacional' },
    { source: 'Wired', url: 'https://www.wired.com/feed/rss', color: '#000000', category: 'Geral', region: 'internacional' },
    { source: 'Ars Technica', url: 'https://feeds.arstechnica.com/arstechnica/index', color: '#ff4e00', category: 'Geral', region: 'internacional' },

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
    // AERONÁUTICA - Internacionais
    { source: 'Aviation Week', url: 'https://aviationweek.com/rss.xml', color: '#2c3e50', category: 'Aeronáutica', region: 'internacional' },
    { source: 'FlightGlobal', url: 'https://www.flightglobal.com/rss', color: '#34495e', category: 'Aeronáutica', region: 'internacional' },
    { source: 'AINonline', url: 'https://www.ainonline.com/rss.xml', color: '#5d6d7e', category: 'Aeronáutica', region: 'internacional' },

    // AUTOMOTIVA - Brasileiras
    { source: 'Automotive Business', url: 'https://www.automotivebusiness.com.br/feed/', color: '#c62828', category: 'Automotiva', region: 'nacional' },
    { source: 'AutoEsporte', url: 'https://autoesporte.globo.com/rss/feed.xml', color: '#1e88e5', category: 'Automotiva', region: 'nacional' },
    { source: 'Jornal do Carro', url: 'https://jornaldocarro.estadao.com.br/feed/', color: '#f57c00', category: 'Automotiva', region: 'nacional' },
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

// ===== FUNÇÕES DE DATA =====
function updateDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = date.toLocaleDateString('pt-BR', options);
}

// ===== COTAÇÕES =====
async function fetchExchangeRates() {
    try {
        const [usdResponse, eurResponse] = await Promise.all([
            fetch('https://economia.awesomeapi.com.br/last/USD-BRL'),
            fetch('https://economia.awesomeapi.com.br/last/EUR-BRL')
        ]);
        const usdData = await usdResponse.json();
        const eurData = await eurResponse.json();
        const usd = usdData.USDBRL;
        const eur = eurData.EURBRL;

        const usdFormatted = `R$ ${parseFloat(usd.bid).toFixed(2)}`;
        const eurFormatted = `R$ ${parseFloat(eur.bid).toFixed(2)}`;

        // IDs: mobile, inline, desktop (se existir)
        document.getElementById('usd-value-mobile').textContent = usdFormatted;
        document.getElementById('eur-value-mobile').textContent = eurFormatted;
        document.getElementById('usd-value-inline').textContent = usdFormatted;
        document.getElementById('eur-value-inline').textContent = eurFormatted;

        const updateTime = new Date().toLocaleTimeString('pt-BR');
        document.getElementById('exchange-update-mobile').textContent = `Atualizado às ${updateTime}`;
        document.getElementById('exchange-update-inline').textContent = `Atualizado às ${updateTime}`;
    } catch (error) {
        console.error('Erro ao buscar cotações:', error);
        ['usd-value-mobile','eur-value-mobile','usd-value-inline','eur-value-inline'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = 'Indisponível';
        });
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
        renderAllSections();
    });
});

// ===== NAVEGAÇÃO POR ÂNCORAS (botões de categoria) =====
document.querySelectorAll('.filter-btn, .filter-btn-mobile').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.category;
        if (target === 'destaques') {
            document.getElementById('destaques').scrollIntoView({ behavior: 'smooth' });
        } else {
            const el = document.getElementById(`cat-${target}`);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        // Fecha menu mobile
        document.getElementById('sidebar-mobile').classList.remove('active');
        document.getElementById('sidebar-overlay').classList.remove('active');
    });
});

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

// ===== RENDERIZAÇÃO DAS SEÇÕES =====
function renderAllSections() {
    // Filtra por região
    let filteredNews = allNews;
    if (activeRegion !== 'all') {
        filteredNews = allNews.filter(item => item.region === activeRegion);
    }

    // Destaques: top 10 de todas as categorias
    const destaques = filteredNews.slice(0, 10);
    renderDestaques(destaques);

    // Categorias: agrupar
    const categorias = ['Aeronáutica', 'Automotiva', 'Semicondutores', 'Indústria', 'Embarcados', 'Projetos', 'Bens de Consumo', 'Geral'];
    const container = document.getElementById('categorias-container');
    container.innerHTML = '';
    categorias.forEach(cat => {
        const catNews = filteredNews.filter(n => n.category === cat).slice(0, 6); // máx 6 por bloco
        if (catNews.length > 0) {
            const section = document.createElement('section');
            section.className = 'categoria-bloco';
            section.id = `cat-${cat}`;
            const title = document.createElement('h2');
            title.className = 'section-title';
            title.textContent = cat;
            section.appendChild(title);
            const grid = document.createElement('div');
            grid.className = 'categoria-grid';
            grid.innerHTML = catNews.map(news => createCardHTML(news)).join('');
            section.appendChild(grid);
            container.appendChild(section);
        }
    });
}

function renderDestaques(destaques) {
    const grid = document.getElementById('destaques-grid');
    if (destaques.length === 0) {
        grid.innerHTML = '<div class="loading">Nenhuma notícia encontrada.</div>';
        return;
    }
    grid.innerHTML = destaques.map(news => createCardHTML(news)).join('');
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

// ===== ESTATÍSTICAS E FONTES =====
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
    list.innerHTML = activeSources.slice(0, 15).map(f => `
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
    loadAllFeeds();
    setInterval(fetchExchangeRates, 300000);
    setInterval(loadAllFeeds, 1800000);
});
