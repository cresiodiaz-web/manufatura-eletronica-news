// Lista de feeds RSS que serão agregados
const feeds = [
    {
        source: 'Inovação Tecnológica',
        url: 'https://www.inovacaotecnologica.com.br/rss.xml',
        color: '#2a5298',
        category: 'Geral'
    },
    {
        source: 'Embarcados',
        url: 'https://www.embarcados.com.br/feed/',
        color: '#e67e22',
        category: 'Embarcados'
    },
    {
        source: 'Electronics Weekly',
        url: 'https://www.electronicsweekly.com/feed/',
        color: '#27ae60',
        category: 'Indústria'
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
    }
];

let allNews = [];

// Função para buscar um feed via rss2json
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
                pubDate: new Date(item.pubDate).toLocaleDateString('pt-BR')
            }));
        }
        return [];
    } catch (error) {
        console.error(`Erro ao buscar ${feed.source}:`, error);
        return [];
    }
}

// Carrega todos os feeds e renderiza
async function loadAllFeeds() {
    const container = document.getElementById('news-container');
    container.innerHTML = '<div class="loading">Carregando notícias...</div>';

    const allPromises = feeds.map(feed => fetchFeed(feed));
    const results = await Promise.all(allPromises);
    allNews = results.flat();

    // Ordena por data (mais recentes primeiro)
    allNews.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    renderNews(allNews);
}

// Renderiza as notícias filtradas
function renderNews(newsList) {
    const container = document.getElementById('news-container');

    if (newsList.length === 0) {
        container.innerHTML = '<div class="loading">Nenhuma notícia encontrada.</div>';
        return;
    }

    container.innerHTML = newsList.map(news => `
        <article class="card">
            ${news.image ? `<img src="${news.image}" alt="${news.title}" loading="lazy">` : ''}
            <div class="card-content">
                <span class="card-source" style="color: ${news.color}">${news.source}</span>
                <h2><a href="${news.link}" target="_blank" rel="noopener">${news.title}</a></h2>
                <p>${news.description}</p>
                <div class="card-date">📅 ${news.pubDate}</div>
            </div>
        </article>
    `).join('');
}

// Configura os filtros por categoria
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.dataset.category;
        const filtered = category === 'all' 
            ? allNews 
            : allNews.filter(item => item.category === category);
        renderNews(filtered);
    });
});

// Inicializa o site
loadAllFeeds();