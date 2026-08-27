// Lista de feeds RSS
const feeds = [
    // ===== MANUFATURA ELETRÔNICA =====
    {
        source: 'Embarcados',
        url: 'https://www.embarcados.com.br/feed/',
        color: '#e67e22',
        category: 'Embarcados'
    },
    {
        source: 'All About Circuits',
        url: 'https://www.allaboutcircuits.com/rss/',
        color: '#8e44ad',
        category: 'Projetos'
    },
    {
        source: 'EETimes',
        url: 'https://www.eetimes.com/feed/',
        color: '#c0392b',
        category: 'Semicondutores'
    },
    {
        source: 'Electronics Weekly',
        url: 'https://www.electronicsweekly.com/feed/',
        color: '#27ae60',
        category: 'Indústria'
    },
    {
        source: 'Inovação Tecnológica',
        url: 'https://www.inovacaotecnologica.com.br/rss.xml',
        color: '#2a5298',
        category: 'Geral'
    },
    {
        source: 'IEEE Spectrum',
        url: 'https://spectrum.ieee.org/feeds/topic/semiconductors.rss',
        color: '#006699',
        category: 'Semicondutores'
    },
    {
        source: 'Electronics For You',
        url: 'https://www.electronicsforu.com/feed',
        color: '#d35400',
        category: 'Indústria'
    },
    {
        source: 'Electronic Design',
        url: 'https://www.electronicdesign.com/rss',
        color: '#2980b9',
        category: 'Projetos'
    },
    {
        source: 'Semiconductor Engineering',
        url: 'https://semiengineering.com/feed/',
        color: '#16a085',
        category: 'Semicondutores'
    },
    {
        source: 'SMTnet',
        url: 'https://www.smtnet.com/rss/news.xml',
        color: '#8e44ad',
        category: 'Indústria'
    },

    // ===== MANUFATURA AERONÁUTICA =====
    {
        source: 'Aviation Week',
        url: 'https://aviationweek.com/rss.xml',
        color: '#2c3e50',
        category: 'Aeronáutica'
    },
    {
        source: 'FlightGlobal',
        url: 'https://www.flightglobal.com/rss',
        color: '#34495e',
        category: 'Aeronáutica'
    },
    {
        source: 'Aero Magazine',
        url: 'https://aeromagazine.uol.com.br/feed/',
        color: '#7f8c8d',
        category: 'Aeronáutica'
    },
    {
        source: 'AINonline',
        url: 'https://www.ainonline.com/rss.xml',
        color: '#5d6d7e',
        category: 'Aeronáutica'
    },
    {
        source: 'Aerospace Manufacturing',
        url: 'https://www.aero-mag.com/feed/',
        color: '#4a6fa5',
        category: 'Aeronáutica'
    },

    // ===== BENS DE CONSUMO ELETRÔNICOS =====
    {
        source: 'TechCrunch',
        url: 'https://techcrunch.com/feed/',
        color: '#00d26a',
        category: 'Bens de Consumo'
    },
    {
        source: 'The Verge',
        url: 'https://www.theverge.com/rss/index.xml',
        color: '#fa4b2a',
        category: 'Bens de Consumo'
    },
    {
        source: 'CNET',
        url: 'https://www.cnet.com/rss/news/',
        color: '#e50914',
        category: 'Bens de Consumo'
    },
    {
        source: 'Gizmodo',
        url: 'https://gizmodo.com/rss',
        color: '#00b0f0',
        category: 'Bens de Consumo'
    },
    {
        source: 'Engadget',
        url: 'https://www.engadget.com/rss.xml',
        color: '#7b0099',
        category: 'Bens de Consumo'
    },
    {
        source: 'Tom\'s Hardware',
        url: 'https://www.tomshardware.com/feeds/all',
        color: '#c7254e',
        category: 'Bens de Consumo'
    },
    {
        source: 'Android Central',
        url: 'https://www.androidcentral.com/feed',
        color: '#00c853',
        category: 'Bens de Consumo'
    },
    {
        source: '9to5Mac',
        url: 'https://9to5mac.com/feed/',
        color: '#555555',
        category: 'Bens de Consumo'
    },
    {
        source: 'GSM Arena',
        url: 'https://www.gsmarena.com/rss-news-reviews.php3',
        color: '#d32f2f',
        category: 'Bens de Consumo'
    },
    {
        source: 'IoT World Today',
        url: 'https://www.iotworldtoday.com/rss',
        color: '#00838f',
        category: 'Bens de Consumo'
    },
    {
        source: 'Wearable Technology',
        url: 'https://www.wearable-technologies.com/feed/',
        color: '#6a1b9a',
        category: 'Bens de Consumo'
    },
    {
        source: 'TechRadar',
        url: 'https://www.techradar.com/rss',
        color: '#ff6600',
        category: 'Bens de Consumo'
    }
];

let allNews = [];
let activeCategory = 'all';

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

        const updateTime = new Date().toLocaleTimeString('pt-BR');
        document.getElementById('exchange-update').textContent = `Atualizado às ${updateTime}`;
    } catch (error) {
        console.error('Erro ao buscar cotações:', error);
        document.getElementById('usd-value').textContent = 'Indisponível';
        document.getElementById('eur-value').textContent = 'Indisponível';
        document.getElementById('exchange-update').textContent = 'Erro ao carregar cotações';
    }
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
    const container = document.getElementById('news-container');
    container.innerHTML = '<div class="loading">Carregando notícias...</div>';

    const allPromises = feeds.map(feed => fetchFeed(feed));
    const results = await Promise.all(allPromises);
    allNews = results.flat();

    // Ordena por data (mais recentes primeiro)
    allNews.sort((a, b) => b.pubDate - a.pubDate);

    // Atualiza estatísticas
    updateStats();
    updateSourcesList();

    renderNews(allNews);
}

// ===== RENDERIZAÇÃO =====
function renderNews(newsList) {
    const container = document.getElementById('news-container');

    if (newsList.length === 0) {
        container.innerHTML = '<div class="loading">Nenhuma notícia encontrada.</div>';
        return;
    }

    container.innerHTML = newsList.map((news, index) => {
        const isFeatured = index === 0 && activeCategory === 'all';
        const cardClass = isFeatured ? 'card featured' : 'card';
        
        return `
            <article class="${cardClass}" onclick="window.open('${news.link}', '_blank')">
                ${news.image ? 
                    `<div class="card-image" style="background-image: url('${news.image}')">
                        <span class="card-category">${news.category}</span>
                    </div>` : 
                    `<div class="card-image" style="background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                        <span class="card-category">${news.category}</span>
                    </div>`
                }
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

function updateStats() {
    document.getElementById('total-news').textContent = allNews.length;
    document.getElementById('total-sources').textContent = new Set(allNews.map(n => n.source)).size;
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
        .slice(0, 10)
        .map(feed => `
            <li>
                <span class="source-dot" style="background: ${feed.color}"></span>
                ${feed.source}
            </li>
        `).join('');
}

// ===== FILTROS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category;
        
        const filtered = activeCategory === 'all' 
            ? allNews 
            : allNews.filter(item => item.category === activeCategory);
        
        renderNews(filtered);
    });
});

// ===== INICIALIZAÇÃO =====
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
