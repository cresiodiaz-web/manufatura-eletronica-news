// ============================================
// PORTAL MANUFATURA ELETRÔNICA NEWS
// Script completo com funcionalidades mobile
// ============================================

const feeds = [
    // [MANTENHA AQUI TODOS OS FEEDS DO ARQUIVO ANTERIOR]
    // ... (copie o array feeds completo do arquivo anterior)
];

let allNews = [];
let activeCategory = 'all';
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
        searchResults.innerHTML = '<p style="color: white;">Nenhum resultado encontrado.</p>';
        return;
    }
    
    searchResults.innerHTML = results.map(news => `
        <div class="search-result-item" onclick="window.open('${news.link}', '_blank')">
            <h3>${news.title}</h3>
            <p>${news.source} - ${news.category}</p>
        </div>
    `).join('');
}, 300));

// ============================================
// FILTROS (Desktop e Mobile)
// ============================================
document.querySelectorAll('.filter-btn, .filter-btn-mobile').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active de todos os botões
        document.querySelectorAll('.filter-btn, .filter-btn-mobile').forEach(b => {
            b.classList.remove('active');
        });
        
        // Adiciona active aos botões correspondentes
        const category = btn.dataset.category;
        document.querySelectorAll(`.filter-btn[data-category="${category}"], .filter-btn-mobile[data-category="${category}"]`).forEach(b => {
            b.classList.add('active');
        });
        
        activeCategory = category;
        
        const filtered = activeCategory === 'all' 
            ? allNews 
            : allNews.filter(item => item.category === activeCategory);
        
        renderNews(filtered);
        
        // Fecha menu mobile
        sidebarMobile.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        
        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ============================================
// IDIOMA
// ============================================
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLanguage = btn.dataset.lang;
        
        // Aqui você pode adicionar traduções
        console.log('Idioma alterado para:', currentLanguage);
        // Implementar tradução automática se necessário
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
        renderNews(allNews);
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
        container.innerHTML = '<div class="loading">Nenhuma notícia encontrada.</div>';
        return;
    }

    const maxNews = 100;
    const limitedNews = newsList.slice(0, maxNews);

    container.innerHTML = limitedNews.map((news, index) => {
        const isFeatured = index === 0 && activeCategory === 'all';
        const cardClass = isFeatured ? 'card featured' : 'card';
        
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
                    <span class="card-source" style="color: ${news.color}">${news.source}</span>
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
    document.getElementById('total-news').textContent = allNews.length;
    document.getElementById('total-sources').textContent = new Set(allNews.map(n => n.source)).size;
    
    // Atualiza mobile também
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
