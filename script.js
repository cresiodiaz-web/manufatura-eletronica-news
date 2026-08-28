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
let activeCategory = 'all';
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

        document.getElementById('usd-value').textContent = `R$ ${parseFloat(usd.bid).toFixed(2)}`;
        document.getElementById('eur-value').textContent = `R$ ${parseFloat(eur.bid).toFixed(2)}`;
        document.getElementById('usd-value-mobile').textContent = `R$ ${parseFloat(usd.bid).toFixed(2)}`;
        document.getElementById('eur-value-mobile').textContent = `R$ ${parseFloat(eur.bid).toFixed(2)}`;

        const updateTime = new Date().toLocaleTimeString('pt-BR');
        document.getElementById('exchange-update').textContent = `Atualizado às ${updateTime}`;
        document.getElementById('exchange-update-mobile').textContent = `Atualizado às ${updateTime}`;
    } catch (error) {
        console.error('Erro ao buscar cotações:', error);
        document.getElementById('usd-value').textContent = 'Indisponível';
        document.getElementById('eur-value').textContent = 'Indisponível';
        document.getElementById('usd-value-mobile').textContent = 'Indisponível';
        document.getElementById('eur-value-mobile').textContent = 'Indisponível';
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
    const searchResults = document.getElementById('search-results');
    
    if (query.length < 3) {
        searchResults.innerHTML = '';
        return;
    }
    
    const results = allNews.filter(news => 
        news.title.toLowerCase().includes(query) ||
        news.description.toLowerCase().includes(query) ||
        news.source.toLowerCase().includes(query)
    ).slice(0, 20);
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p style="color: white; text-align: center; padding: 1rem;">Nenhum resultado encontrado.</p>';
        return;
    }
    
    searchResults.innerHTML = results.map(news => `
        <div class="search-result-item" onclick="window.open('${news.link}', '_blank')">
            <h3 style="margin: 0 0 0.5rem 0; color: #1e3c72;">${news.title}</h3>
            <p style="margin: 0; font-size: 0.9rem; color: #666;">${news.source} - ${news.category}</p>
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
        applyFilters();
    });
});

// ===== FILTROS DE CATEGORIA =====
document.querySelectorAll('.filter-btn, .filter-btn-mobile').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn, .filter-btn-mobile').forEach(b => b.classList.remove('active'));
        const category = btn.dataset.category;
        document.querySelectorAll(`.filter-btn[data-category="${category}"], .filter-btn-mobile[data-category="${category}"]`).forEach(b => b.classList.add('active'));
        activeCategory = category;
        applyFilters();
        
        // Fecha menu mobile
        document.getElementById('sidebar-mobile').classList.remove('active');
        document.getElementById('sidebar-overlay').classList.remove('active');
    });
});

// ===== APLICAÇÃO DE FILTROS =====
function applyFilters() {
    let filtered = allNews;
    
    if (activeRegion !== 'all') {
        filtered = filtered.filter(item => item.region === activeRegion);
    }
    
    if (activeCategory !== 'all') {
        filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    renderNews(filtered);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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

    const container = document.getElementById('news-container');
    container.innerHTML = '<div class="loading">Carregando notícias...</div>';

    try {
        const allPromises = feeds.map(feed => fetchFeed(feed));
        const results = await Promise.all(allPromises);
        allNews = results.flat();
        allNews.sort((a, b) => b.pubDate - a.pubDate);

        updateStats();
        updateSourcesList();
        applyFilters();
    } catch (error) {
        console.error('Erro ao carregar feeds:', error);
        container.innerHTML = '<div class="loading">Erro ao carregar notícias. Tente novamente.</div>';
    } finally {
        isLoading = false;
    }
}

// ===== RENDERIZAÇÃO =====
function renderNews(newsList) {
    const container = document.getElementById('news-container');

    if (newsList.length === 0) {
        container.innerHTML = '<div class="loading">Nenhuma notícia encontrada para os filtros selecionados.</div>';
        return;
    }

    const maxNews = 100;
    const limitedNews = newsList.slice(0, maxNews);

    container.innerHTML = limitedNews.map((news, index) => {
        const isFeatured = index === 0 && activeCategory === 'all' && activeRegion === 'all';
        const cardClass = isFeatured ? 'card featured' : 'card';
        
        const regionBadge = news.region === 'nacional' 
            ? '<span class="card-region region-nacional">🇧🇷 Nacional</span>'
            : '<span class="card-region region-internacional">🌍 Internacional</span>';
        
        let imageHtml = '';
        if (news.image) {
            imageHtml = `
                <div class="card-image" style="background-image: url('${news.image}')">
                    <span class="card-category">${news.category}</span>
                </div>
            `;
        } else {
            const gradients = [
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
            ];
            const randomGradient = gradients[index % gradients.length];
            imageHtml = `
                <div class="card-image" style="background-image: ${randomGradient}">
                    <span class="card-category">${news.category}</span>
                </div>
            `;
        }

        return `
            <article class="${cardClass}" onclick="window.open('${news.link}', '_blank')">
                ${imageHtml}
                <div class="card-content">
                    <div class="card-source-row">
                        <span class="card-source" style="color: ${news.color}">${news.source}</span>
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
    }).join('');
}

// ===== ATUALIZAÇÃO DE ESTATÍSTICAS =====
function updateStats() {
    document.getElementById('total-news').textContent = allNews.length;
    document.getElementById('total-sources').textContent = new Set(allNews.map(n => n.source)).size;
    document.getElementById('total-news-mobile').textContent = allNews.length;
    document.getElementById('total-sources-mobile').textContent = new Set(allNews.map(n => n.source)).size;
}

function updateSourcesList() {
    const sourcesList = document.getElementById('sources-list');
    const sourcesWithNews = feeds.filter(feed => 
        allNews.some(news => news.source === feed.source)
    );

    if (sourcesWithNews.length === 0) {
        sourcesList.innerHTML = '<li>Nenhuma fonte ativa</li>';
        return;
    }

    sourcesList.innerHTML = sourcesWithNews
        .slice(0, 15)
        .map(feed => `
            <li>
                <span class="source-dot" style="background: ${feed.color}"></span>
                ${feed.source}
                <span style="margin-left: auto; font-size: 0.8rem;">${feed.region === 'nacional' ? '🇧🇷' : '🌍'}</span>
            </li>
        `).join('');
}

// ===== FUNÇÕES AUXILIARES =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
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
