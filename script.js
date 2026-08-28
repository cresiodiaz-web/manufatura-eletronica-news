// ============================================
// PORTAL MANUFATURA ELETRÔNICA NEWS
// Script completo com filtro Nacional/Internacional
// ============================================

const feeds = [
    // ===== 🔬 GERAL (Tecnologia e Inovação) =====
    // Brasileiras
    {
        source: 'Inovação Tecnológica',
        url: 'https://www.inovacaotecnologica.com.br/rss.xml',
        color: '#2a5298',
        category: 'Geral',
        region: 'nacional'
    },
    {
        source: 'Canaltech',
        url: 'https://canaltech.com.br/rss/',
        color: '#1e88e5',
        category: 'Geral',
        region: 'nacional'
    },
    {
        source: 'Olhar Digital',
        url: 'https://olhardigital.com.br/feed/',
        color: '#00bfa5',
        category: 'Geral',
        region: 'nacional'
    },
    {
        source: 'Tecmundo',
        url: 'https://www.tecmundo.com.br/rss',
        color: '#ff6f00',
        category: 'Geral',
        region: 'nacional'
    },
    {
        source: 'Tilt UOL',
        url: 'https://www.uol.com.br/tilt/feed/',
        color: '#c62828',
        category: 'Geral',
        region: 'nacional'
    },
    // Internacionais
    {
        source: 'MIT Technology Review',
        url: 'https://www.technologyreview.com/feed/',
        color: '#d32f2f',
        category: 'Geral',
        region: 'internacional'
    },
    {
        source: 'Wired',
        url: 'https://www.wired.com/feed/rss',
        color: '#000000',
        category: 'Geral',
        region: 'internacional'
    },
    {
        source: 'Ars Technica',
        url: 'https://feeds.arstechnica.com/arstechnica/index',
        color: '#ff4e00',
        category: 'Geral',
        region: 'internacional'
    },

    // ===== 💻 EMBARCADOS (Sistemas Embarcados) =====
    // Brasileiras
    {
        source: 'Embarcados',
        url: 'https://www.embarcados.com.br/feed/',
        color: '#e67e22',
        category: 'Embarcados',
        region: 'nacional'
    },
    {
        source: 'Portal Vida de Silício',
        url: 'https://portal.vidadesilicio.com.br/feed/',
        color: '#16a085',
        category: 'Embarcados',
        region: 'nacional'
    },
    {
        source: 'Arduino Brasil',
        url: 'https://blogmasterwalkershop.com.br/feed/',
        color: '#00979d',
        category: 'Embarcados',
        region: 'nacional'
    },
    {
        source: 'FilipeFlop',
        url: 'https://www.filipeflop.com/blog/feed/',
        color: '#e74c3c',
        category: 'Embarcados',
        region: 'nacional'
    },
    // Internacionais
    {
        source: 'Hackaday',
        url: 'https://hackaday.com/blog/feed/',
        color: '#f4b400',
        category: 'Embarcados',
        region: 'internacional'
    },
    {
        source: 'Embedded.com',
        url: 'https://www.embedded.com/feed/',
        color: '#005596',
        category: 'Embarcados',
        region: 'internacional'
    },
    {
        source: 'Adafruit Blog',
        url: 'https://blog.adafruit.com/feed/',
        color: '#00a651',
        category: 'Embarcados',
        region: 'internacional'
    },

    // ===== 🏭 INDÚSTRIA (Manufatura Eletrônica) =====
    // Brasileiras
    {
        source: 'ABINEE',
        url: 'https://www.abinee.org.br/feed/',
        color: '#1e3c72',
        category: 'Indústria',
        region: 'nacional'
    },
    {
        source: 'Revista Eletrônica',
        url: 'https://www.revistaeletronica.com.br/feed/',
        color: '#c0392b',
        category: 'Indústria',
        region: 'nacional'
    },
    {
        source: 'CIMM',
        url: 'https://www.cimm.com.br/rss/',
        color: '#2c3e50',
        category: 'Indústria',
        region: 'nacional'
    },
    {
        source: 'Indústria Hoje',
        url: 'https://www.industriahoje.com.br/feed/',
        color: '#2980b9',
        category: 'Indústria',
        region: 'nacional'
    },
    // Internacionais
    {
        source: 'Electronics Weekly',
        url: 'https://www.electronicsweekly.com/feed/',
        color: '#27ae60',
        category: 'Indústria',
        region: 'internacional'
    },
    {
        source: 'Electronics For You',
        url: 'https://www.electronicsforu.com/feed',
        color: '#d35400',
        category: 'Indústria',
        region: 'internacional'
    },
    {
        source: 'SMTnet',
        url: 'https://www.smtnet.com/rss/news.xml',
        color: '#8e44ad',
        category: 'Indústria',
        region: 'internacional'
    },
    {
        source: 'EMSNow',
        url: 'https://www.emsnow.com/feed/',
        color: '#00695c',
        category: 'Indústria',
        region: 'internacional'
    },

    // ===== 📐 PROJETOS (Design Eletrônico) =====
    // Brasileiras
    {
        source: 'Instituto NCB',
        url: 'https://www.institutoncb.com.br/feed/',
        color: '#d32f2f',
        category: 'Projetos',
        region: 'nacional'
    },
    {
        source: 'Eletrônica Geral',
        url: 'https://www.eletronicageral.com/feed/',
        color: '#1976d2',
        category: 'Projetos',
        region: 'nacional'
    },
    {
        source: 'AutoCore Robótica',
        url: 'https://autocorerobotica.blog.br/feed/',
        color: '#f57c00',
        category: 'Projetos',
        region: 'nacional'
    },
    // Internacionais
    {
        source: 'All About Circuits',
        url: 'https://www.allaboutcircuits.com/rss/',
        color: '#8e44ad',
        category: 'Projetos',
        region: 'internacional'
    },
    {
        source: 'Electronic Design',
        url: 'https://www.electronicdesign.com/rss',
        color: '#2980b9',
        category: 'Projetos',
        region: 'internacional'
    },
    {
        source: 'EEWeb',
        url: 'https://www.eeweb.com/feed/',
        color: '#00796b',
        category: 'Projetos',
        region: 'internacional'
    },
    {
        source: 'Circuit Digest',
        url: 'https://circuitdigest.com/rss',
        color: '#ff5722',
        category: 'Projetos',
        region: 'internacional'
    },

    // ===== 🔲 SEMICONDUTORES =====
    // Brasileiras
    {
        source: 'UNICAMP - CCS',
        url: 'https://www.ccs.unicamp.br/feed/',
        color: '#8e24aa',
        category: 'Semicondutores',
        region: 'nacional'
    },
    {
        source: 'Chip Brasil',
        url: 'https://chipbrasil.com.br/feed/',
        color: '#5e35b1',
        category: 'Semicondutores',
        region: 'nacional'
    },
    // Internacionais
    {
        source: 'EETimes',
        url: 'https://www.eetimes.com/feed/',
        color: '#c0392b',
        category: 'Semicondutores',
        region: 'internacional'
    },
    {
        source: 'IEEE Spectrum',
        url: 'https://spectrum.ieee.org/feeds/topic/semiconductors.rss',
        color: '#006699',
        category: 'Semicondutores',
        region: 'internacional'
    },
    {
        source: 'Semiconductor Engineering',
        url: 'https://semiengineering.com/feed/',
        color: '#16a085',
        category: 'Semicondutores',
        region: 'internacional'
    },
    {
        source: 'AnandTech',
        url: 'https://www.anandtech.com/rss/',
        color: '#1a237e',
        category: 'Semicondutores',
        region: 'internacional'
    },
    {
        source: 'Semiconductor Digest',
        url: 'https://www.semiconductor-digest.com/feed/',
        color: '#00acc1',
        category: 'Semicondutores',
        region: 'internacional'
    },

    // ===== ✈️ AERONÁUTICA =====
    // Brasileiras
    {
        source: 'Aero Magazine',
        url: 'https://aeromagazine.uol.com.br/feed/',
        color: '#e74c3c',
        category: 'Aeronáutica',
        region: 'nacional'
    },
    {
        source: 'Cavok Brasil',
        url: 'https://www.cavok.com.br/feed/',
        color: '#00695c',
        category: 'Aeronáutica',
        region: 'nacional'
    },
    {
        source: 'Poder Aéreo',
        url: 'https://www.poderaereo.com.br/feed/',
        color: '#1a237e',
        category: 'Aeronáutica',
        region: 'nacional'
    },
    {
        source: 'Defesa Aérea & Naval',
        url: 'https://www.defesaaereanaval.com.br/feed/',
        color: '#b71c1c',
        category: 'Aeronáutica',
        region: 'nacional'
    },
    {
        source: 'Aeroin',
        url: 'https://aeroin.net/feed/',
        color: '#ff6f00',
        category: 'Aeronáutica',
        region: 'nacional'
    },
    {
        source: 'Aeroflap',
        url: 'https://www.aeroflap.com.br/feed/',
        color: '#0277bd',
        category: 'Aeronáutica',
        region: 'nacional'
    },
    {
        source: 'Revista Asas',
        url: 'https://www.revistaasas.com.br/feed/',
        color: '#37474f',
        category: 'Aeronáutica',
        region: 'nacional'
    },
    {
        source: 'Tecnodefesa',
        url: 'https://tecnodefesa.com.br/feed/',
        color: '#4a148c',
        category: 'Aeronáutica',
        region: 'nacional'
    },
    {
        source: 'Airway',
        url: 'https://www.airway.com.br/feed/',
        color: '#00838f',
        category: 'Aeronáutica',
        region: 'nacional'
    },
    // Internacionais
    {
        source: 'Aviation Week',
        url: 'https://aviationweek.com/rss.xml',
        color: '#2c3e50',
        category: 'Aeronáutica',
        region: 'internacional'
    },
    {
        source: 'FlightGlobal',
        url: 'https://www.flightglobal.com/rss',
        color: '#34495e',
        category: 'Aeronáutica',
        region: 'internacional'
    },
    {
        source: 'AINonline',
        url: 'https://www.ainonline.com/rss.xml',
        color: '#5d6d7e',
        category: 'Aeronáutica',
        region: 'internacional'
    },
    {
        source: 'Aerospace Manufacturing',
        url: 'https://www.aero-mag.com/feed/',
        color: '#4a6fa5',
        category: 'Aeronáutica',
        region: 'internacional'
    },

    // ===== 📦 BENS DE CONSUMO ELETRÔNICOS =====
    // Brasileiras
    {
        source: 'Techtudo',
        url: 'https://www.techtudo.com.br/rss/',
        color: '#c4170c',
        category: 'Bens de Consumo',
        region: 'nacional'
    },
    {
        source: 'Tudocelular',
        url: 'https://www.tudocelular.com/rss/',
        color: '#00a651',
        category: 'Bens de Consumo',
        region: 'nacional'
    },
    {
        source: 'Gizmodo Brasil',
        url: 'https://gizmodo.uol.com.br/feed/',
        color: '#00b0f0',
        category: 'Bens de Consumo',
        region: 'nacional'
    },
    {
        source: 'Oficina da Net',
        url: 'https://www.oficinadanet.com.br/feed/',
        color: '#f39c12',
        category: 'Bens de Consumo',
        region: 'nacional'
    },
    {
        source: 'Tecnoblog',
        url: 'https://tecnoblog.net/feed/',
        color: '#e91e63',
        category: 'Bens de Consumo',
        region: 'nacional'
    },
    // Internacionais
    {
        source: 'TechCrunch',
        url: 'https://techcrunch.com/feed/',
        color: '#00d26a',
        category: 'Bens de Consumo',
        region: 'internacional'
    },
    {
        source: 'The Verge',
        url: 'https://www.theverge.com/rss/index.xml',
        color: '#fa4b2a',
        category: 'Bens de Consumo',
        region: 'internacional'
    },
    {
        source: 'CNET',
        url: 'https://www.cnet.com/rss/news/',
        color: '#e50914',
        category: 'Bens de Consumo',
        region: 'internacional'
    },
    {
        source: 'Engadget',
        url: 'https://www.engadget.com/rss.xml',
        color: '#7b0099',
        category: 'Bens de Consumo',
        region: 'internacional'
    },
    {
        source: 'Tom\'s Hardware',
        url: 'https://www.tomshardware.com/feeds/all',
        color: '#c7254e',
        category: 'Bens de Consumo',
        region: 'internacional'
    },
    {
        source: 'Android Central',
        url: 'https://www.androidcentral.com/feed',
        color: '#00c853',
        category: 'Bens de Consumo',
        region: 'internacional'
    },
    {
        source: '9to5Mac',
        url: 'https://9to5mac.com/feed/',
        color: '#555555',
        category: 'Bens de Consumo',
        region: 'internacional'
    },
    {
        source: 'GSM Arena',
        url: 'https://www.gsmarena.com/rss-news-reviews.php3',
        color: '#d32f2f',
        category: 'Bens de Consumo',
        region: 'internacional'
    },
    {
        source: 'IoT World Today',
        url: 'https://www.iotworldtoday.com/rss',
        color: '#00838f',
        category: 'Bens de Consumo',
        region: 'internacional'
    },
    {
        source: 'Wearable Technology',
        url: 'https://www.wearable-technologies.com/feed/',
        color: '#6a1b9a',
        category: 'Bens de Consumo',
        region: 'internacional'
    },
    {
        source: 'TechRadar',
        url: 'https://www.techradar.com/rss',
        color: '#ff6600',
        category: 'Bens de Consumo',
        region: 'internacional'
    },
    {
        source: 'Gizmodo',
        url: 'https://gizmodo.com/rss',
        color: '#00b0f0',
        category: 'Bens de Consumo',
        region: 'internacional'
    }
];

// ============================================
// VARIÁVEIS GLOBAIS
// ============================================
let allNews = [];
let activeCategory = 'all';
let activeRegion = 'all';
let isLoading = false;
let currentLanguage = 'pt';

// ============================================
// FUNÇÕES DE DATA
// ============================================
function updateDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = date.toLocaleDateString('pt-BR', options);
}

// ============================================
// COTAÇÕES DE DÓLAR E EURO
// ============================================
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

        // Atualiza desktop
        document.getElementById('usd-value').textContent = `R$ ${parseFloat(usd.bid).toFixed(2)}`;
        document.getElementById('eur-value').textContent = `R$ ${parseFloat(eur.bid).toFixed(2)}`;
        
        // Atualiza mobile
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

// ============================================
// MENU HAMBÚRGUER
// ============================================
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebarMobile = document.getElementById('sidebar-mobile');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const closeSidebar = document.getElementById('close-sidebar');

hamburgerBtn.addEventListener('click', () => {
    sidebarMobile.classList.add('active');
    sidebarOverlay.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
    sidebarMobile.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

sidebarOverlay.addEventListener('click', () => {
    sidebarMobile.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

// ============================================
// SEARCH OVERLAY
// ============================================
const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('search-overlay');
const closeSearch = document.getElementById('close-search');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

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
    const query = e.target.value.toLowerCase();
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
            <p style="margin: 0; font-size: 0.9rem; color: #666;">
                ${news.source} - ${news.category} - 
                ${news.region === 'nacional' ? '🇧🇷 Nacional' : '🌍 Internacional'}
            </p>
        </div>
    `).join('');
}, 300));

// ============================================
// FILTROS DE REGIÃO (Nacional/Internacional)
// ============================================
document.querySelectorAll('.region-btn, .region-btn-mobile').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active de todos os botões de região
        document.querySelectorAll('.region-btn, .region-btn-mobile').forEach(b => {
            b.classList.remove('active');
        });
        
        // Adiciona active aos botões correspondentes
        const region = btn.dataset.region;
        document.querySelectorAll(`.region-btn[data-region="${region}"], .region-btn-mobile[data-region="${region}"]`).forEach(b => {
            b.classList.add('active');
        });
        
        activeRegion = region;
        applyFilters();
    });
});

// ============================================
// FILTROS DE CATEGORIA
// ============================================
document.querySelectorAll('.filter-btn, .filter-btn-mobile').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active de todos os botões de categoria
        document.querySelectorAll('.filter-btn, .filter-btn-mobile').forEach(b => {
            b.classList.remove('active');
        });
        
        // Adiciona active aos botões correspondentes
        const category = btn.dataset.category;
        document.querySelectorAll(`.filter-btn[data-category="${category}"], .filter-btn-mobile[data-category="${category}"]`).forEach(b => {
            b.classList.add('active');
        });
        
        activeCategory = category;
        applyFilters();
        
        // Fecha menu mobile
        sidebarMobile.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
});

// ============================================
// APLICAÇÃO DE FILTROS COMBINADOS
// ============================================
function applyFilters() {
    let filtered = allNews;
    
    // Filtra por região
    if (activeRegion !== 'all') {
        filtered = filtered.filter(item => item.region === activeRegion);
    }
    
    // Filtra por categoria
    if (activeCategory !== 'all') {
        filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    renderNews(filtered);
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// IDIOMA
// ============================================
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLanguage = btn.dataset.lang;
        console.log('Idioma alterado para:', currentLanguage);
    });
});

// ============================================
// BUSCA DE FEEDS RSS
// ============================================
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

        // Ordena por data (mais recentes primeiro)
        allNews.sort((a, b) => b.pubDate - a.pubDate);

        // Atualiza estatísticas
        updateStats();
        updateSourcesList();

        // Aplica filtros atuais
        applyFilters();
    } catch (error) {
        console.error('Erro ao carregar feeds:', error);
        container.innerHTML = '<div class="loading">Erro ao carregar notícias. Tente novamente.</div>';
    } finally {
        isLoading = false;
    }
}

// ============================================
// RENDERIZAÇÃO DAS NOTÍCIAS
// ============================================
function renderNews(newsList) {
    const container = document.getElementById('news-container');

    if (newsList.length === 0) {
        container.innerHTML = '<div class="loading">Nenhuma notícia encontrada para os filtros selecionados.</div>';
        return;
    }

    // Limita a quantidade de notícias para performance
    const maxNews = 100;
    const limitedNews = newsList.slice(0, maxNews);

    container.innerHTML = limitedNews.map((news, index) => {
        const isFeatured = index === 0 && activeCategory === 'all' && activeRegion === 'all';
        const cardClass = isFeatured ? 'card featured' : 'card';
        
        // Badge de região
        const regionBadge = news.region === 'nacional' 
            ? '<span class="card-region region-nacional">🇧🇷 Nacional</span>'
            : '<span class="card-region region-internacional">🌍 Internacional</span>';
        
        // Tratamento de imagem
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
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
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

// ============================================
// ATUALIZAÇÃO DE ESTATÍSTICAS
// ============================================
function updateStats() {
    const totalNews = allNews.length;
    const totalSources = new Set(allNews.map(n => n.source)).size;
    const nationalNews = allNews.filter(n => n.region === 'nacional').length;
    const internationalNews = allNews.filter(n => n.region === 'internacional').length;
    
    document.getElementById('total-news').textContent = totalNews;
    document.getElementById('total-sources').textContent = totalSources;
    
    // Atualiza mobile também
    document.getElementById('total-news-mobile').textContent = totalNews;
    document.getElementById('total-sources-mobile').textContent = totalSources;
    
    console.log(`📊 Estatísticas: ${totalNews} notícias (${nationalNews} nacionais, ${internationalNews} internacionais) de ${totalSources} fontes`);
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
                <span style="margin-left: auto; font-size: 0.8rem;">
                    ${feed.region === 'nacional' ? '🇧🇷' : '🌍'}
                </span>
            </li>
        `).join('');
}

// ============================================
// FUNÇÕES AUXILIARES
// ============================================
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

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function formatRelativeDate(date) {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));

    if (diffMinutes < 60) {
        return `há ${diffMinutes} minutos`;
    } else if (diffHours < 24) {
        return `há ${diffHours} horas`;
    } else if (diffDays === 1) {
        return 'ontem';
    } else if (diffDays < 7) {
        return `há ${diffDays} dias`;
    } else {
        return date.toLocaleDateString('pt-BR');
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    fetchExchangeRates();
    loadAllFeeds();

    // Atualiza cotações a cada 5 minutos
    setInterval(fetchExchangeRates, 300000);

    // Atualiza notícias a cada 30 minutos
    setInterval(() => {
        console.log('Atualizando notícias...');
        loadAllFeeds();
    }, 1800000);
});

// Exporta funções para uso global
window.truncateText = truncateText;
window.formatRelativeDate = formatRelativeDate;
window.debounce = debounce;
