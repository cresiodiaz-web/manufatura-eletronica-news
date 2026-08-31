// ===== ADICIONE AO SEU script.js EXISTENTE =====

// ===== MENU HAMBURGUER DESKTOP (REGIÃO) =====
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerDesktop = document.getElementById('hamburger-btn-desktop');
    const desktopDropdown = document.getElementById('desktop-dropdown');
    
    if (hamburgerDesktop && desktopDropdown) {
        hamburgerDesktop.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopDropdown.classList.toggle('active');
        });
        
        // Fecha o dropdown quando clicar fora
        document.addEventListener('click', (e) => {
            if (!desktopDropdown.contains(e.target) && e.target !== hamburgerDesktop) {
                desktopDropdown.classList.remove('active');
            }
        });
    }
    
    // Menu de Categorias
    const menuToggle = document.getElementById('menu-toggle-desktop');
    const filtersDesktop = document.getElementById('filters-desktop');
    if (menuToggle && filtersDesktop) {
        menuToggle.addEventListener('click', () => {
            filtersDesktop.classList.toggle('active');
            menuToggle.textContent = filtersDesktop.classList.contains('active') ? '✕ Fechar Categorias' : '☰ Categorias';
        });
    }
});

// ===== FILTROS DE REGIÃO (incluindo dropdown desktop) =====
document.querySelectorAll('.region-btn, .region-btn-mobile, .desktop-dropdown .region-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.region-btn, .region-btn-mobile, .desktop-dropdown .region-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll(`.region-btn[data-region="${btn.dataset.region}"], .region-btn-mobile[data-region="${btn.dataset.region}"], .desktop-dropdown .region-btn[data-region="${btn.dataset.region}"]`).forEach(b => b.classList.add('active'));
        activeRegion = btn.dataset.region;
        visibleDestaques = 9;
        visiblePorCategoria = 9;
        renderAllSections();
        
        // Fecha o dropdown
        const dropdown = document.getElementById('desktop-dropdown');
        if (dropdown) dropdown.classList.remove('active');
    });
});

// ===== PLACEHOLDER COM FUNDO AZUL CLARO =====
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
