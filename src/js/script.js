// ===== VARIÁVEIS GLOBAIS =====
let currentLang = 'pt';
let currentTab = 0;

// ===== FUNÇÃO DE TRADUÇÃO =====
function getTranslation(key) {
    if (!translations || !translations[currentLang]) return null;
    return translations[currentLang][key] || null;
}

// ===== RENDERIZAÇÃO =====

// Renderiza fundo
function renderBackgrounds() {
    const container = document.getElementById('bgContainer');
    if (!container) return;
    
    container.innerHTML = '';
    DATA.backgrounds.forEach((img, index) => {
        const div = document.createElement('div');
        div.className = `bg-image${index === 0 ? ' active' : ''}`;
        div.style.backgroundImage = `url('${img}')`;
        container.appendChild(div);
    });
}

// Renderiza menu principal
function renderTabs() {
    const nav = document.getElementById('tabsNav');
    if (!nav) return;
    
    nav.innerHTML = '';
    DATA.tabs.forEach((tab, index) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn${index === 0 ? ' active' : ''}`;
        const label = getTranslation(`menu${index}`) || tab.label || tab.id;
        btn.innerHTML = `<i class="fa-solid ${tab.icon}"></i> <span>${label}</span>`;
        btn.onclick = () => switchTab(index);
        nav.appendChild(btn);
    });
}

// Renderiza painel
function renderPanel(tabIndex) {
    const container = document.getElementById('contentContainer');
    if (!container) return;
    
    const tab = DATA.tabs[tabIndex];
    const panel = DATA.panels[tab.id];
    if (!panel) return;

    let html = `<div class="tab-panel active" id="panel-${tabIndex}">`;
    
    // Header
    const title = getTranslation(panel.titleKey) || panel.title || tab.id;
    html += `
        <div class="panel-header">
            <div class="icon-wrap"><i class="fa-solid ${panel.icon}"></i></div>
            <div><h2>${title}</h2></div>
        </div>
    `;

    // Sub-tabs
    if (panel.subTabs && panel.subTabs.length > 0) {
        html += `<div class="sub-tabs-nav">`;
        panel.subTabs.forEach((sub, idx) => {
            const isActive = idx === 0 ? ' active' : '';
            const label = getTranslation(sub.key) || sub.label || sub.id;
            html += `
                <button class="sub-tab-btn${isActive}" onclick="switchSubTab(${tabIndex}, ${idx})">
                    <i class="fa-solid ${sub.icon}"></i> <span>${label}</span>
                </button>
            `;
        });
        html += `</div>`;
    }

    // Conteúdo
    const subId = panel.subTabs && panel.subTabs.length > 0 ? panel.subTabs[0].id : 'default';
    const content = panel.content[subId] || panel.content['default'] || [];
    
    if (panel.subTabs && panel.subTabs.length > 0) {
        panel.subTabs.forEach((sub, idx) => {
            const isActive = idx === 0 ? ' active' : '';
            const subContent = panel.content[sub.id] || [];
            html += `<div class="sub-panel-content${isActive}">`;
            html += `<div class="panel-body panel-scroll">`;
            html += renderContent(subContent);
            html += `</div></div>`;
        });
    } else {
        html += `<div class="panel-body panel-scroll">`;
        html += renderContent(content);
        html += `</div>`;
    }

    html += `</div>`;
    container.innerHTML = html;
}

// Renderiza conteúdo
function renderContent(items) {
    let html = '';
    items.forEach(item => {
        switch(item.type) {
            case 'card':
                html += renderCard(item);
                break;
            case 'map':
                html += renderMap(item);
                break;
            case 'whatsapp':
                html += renderWhatsApp(item);
                break;
            case 'highlight':
                html += renderHighlight(item);
                break;
        }
    });
    return html;
}

// Renderiza card
function renderCard(item) {
    let html = `<div class="visual-card">`;
    
    if (item.icon) {
        html += `<span class="card-icon"><i class="fa-solid ${item.icon}"></i></span>`;
    }
    
    // Título com tradução
    let title = item.title || '';
    if (item.translationKey) {
        title = getTranslation(item.translationKey) || title;
    }
    html += `<h4>${title}</h4>`;
    
    // Descrição com tradução
    let description = item.description || '';
    if (item.descKey) {
        description = getTranslation(item.descKey) || description;
    }
    html += `<p>${description}</p>`;

    // Wi-Fi
    if (item.wifi) {
        html += `<div class="wifi-networks">`;
        item.wifi.networks.forEach(net => {
            let label = net.label || '';
            if (net.labelKey) {
                label = getTranslation(net.labelKey) || label;
            }
            html += `
                <div class="wifi-item">
                    <span class="wifi-label">${label}</span>
                    <span class="wifi-ssid">${net.ssid}</span>
                </div>
            `;
        });
        html += `</div>`;
        if (item.button && item.button.type === 'copy') {
            const btnLabel = getTranslation('wifiCopyLabel') || item.button.label || 'Copiar senha';
            html += `
                <button onclick="copyPassword('${item.button.password}')" class="btn-copy-password" id="wifiCopyBtn">
                    <i class="fa-regular fa-copy"></i> <span id="wifiCopyLabel">${btnLabel}</span>
                </button>
            `;
        }
    }

    // Vinho
    if (item.vinho) {
        let label = item.vinho.label || '';
        if (item.vinho.labelKey) {
            label = getTranslation(item.vinho.labelKey) || label;
        }
        html += `
            <div class="vinho-item">
                <div class="vinho-info">
                    <i class="fa-solid fa-wine-bottle"></i>
                    <span class="vinho-label"><strong>${label}</strong></span>
                </div>
                <span class="vinho-price">${item.vinho.price}</span>
            </div>
        `;
        if (item.obs) {
            const obs = getTranslation(item.obsKey) || item.obs;
            html += `
                <p class="vinho-obs">
                    <i class="fa-regular fa-circle-check"></i> 
                    <span>${obs}</span>
                </p>
            `;
        }
    }

    // Tags
    if (item.tag) {
        const tagText = getTranslation(item.tagKey) || item.tag;
        html += `<span class="tag">${tagText}</span>`;
    }
    if (item.tags) {
        item.tags.forEach((tag, idx) => {
            const tagKey = item.tagsKey ? `${item.tagsKey}${idx + 1}` : null;
            const tagText = tagKey ? (getTranslation(tagKey) || tag) : tag;
            html += `<span class="tag">${tagText}</span>`;
        });
    }

    // Botão mapa
    if (item.map) {
        const mapLabel = getTranslation('verNoMapa') || 'Ver no mapa';
        let tagHtml = '';
        if (item.tag) {
            const tagText = getTranslation(item.tagKey) || item.tag;
            tagHtml = `<span class="tag" style="background: rgba(245, 176, 66, 0.2);">${tagText}</span>`;
        }
        html += `
            <div class="card-actions">
                <a href="${item.map}" target="_blank" class="map-link-card">
                    <i class="fa-solid fa-location-dot"></i> ${mapLabel}
                </a>
                ${tagHtml}
            </div>
        `;
    }

    html += `</div>`;
    return html;
}

// Renderiza mapa
function renderMap(item) {
    return `
        <div class="map-wrapper">
            <iframe src="${item.src}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    `;
}

// Renderiza WhatsApp
function renderWhatsApp(item) {
    const fullClass = item.full ? ' btn-whatsapp-full' : '';
    const label = getTranslation(item.labelKey) || item.label || 'WhatsApp';
    return `
        <a href="${item.url}" target="_blank" class="btn-whatsapp${fullClass}" id="${item.id || ''}">
            <i class="fa-brands fa-whatsapp"></i> <span>${label}</span>
        </a>
    `;
}

// Renderiza highlight
function renderHighlight(item) {
    const text = getTranslation(item.textKey) || item.text || '';
    return `
        <div class="highlight-badge">
            <strong>Obs:</strong> ${text}
        </div>
    `;
}

// ===== FUNÇÕES DE NAVEGAÇÃO =====

// Switch tab
function switchTab(index) {
    currentTab = index;
    
    // Atualiza botões
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
        if (i === index) {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    });
    
    renderPanel(index);
    updateBackground(index);
}

// Switch sub-tab
function switchSubTab(tabIndex, subIndex) {
    const panel = document.getElementById(`panel-${tabIndex}`);
    if (!panel) return;
    
    // Atualiza sub-tabs
    const subBtns = panel.querySelectorAll('.sub-tab-btn');
    subBtns.forEach((btn, i) => {
        btn.classList.toggle('active', i === subIndex);
        if (i === subIndex) {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    });
    
    // Mostra conteúdo correspondente
    const contents = panel.querySelectorAll('.sub-panel-content');
    contents.forEach((content, i) => {
        content.classList.toggle('active', i === subIndex);
    });
}

// Atualiza fundo
function updateBackground(index) {
    const images = document.querySelectorAll('.bg-image');
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index % images.length);
    });
}

// ===== TOGGLE IDIOMA =====
function toggleLanguage() {
    const langCycle = ['pt', 'en', 'es'];
    const currentIndex = langCycle.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % langCycle.length;
    const newLang = langCycle[nextIndex];
    
    applyTranslations(newLang);
}

// ===== APLICAR TRADUÇÕES =====
function applyTranslations(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    
    // Header
    const headerTitle = getTranslation('headerTitle');
    if (headerTitle) document.getElementById('headerTitle').textContent = headerTitle;
    
    const langToggle = getTranslation('langToggle');
    if (langToggle) document.getElementById('langLabel').textContent = langToggle;
    
    // Footer
    const footerHint = getTranslation('footerHint');
    if (footerHint) document.getElementById('footerHint').textContent = footerHint;
    
    // Re-renderiza tudo
    renderTabs();
    renderPanel(currentTab);
    
    localStorage.setItem('preferredLang', lang);
}

// ===== COPIAR SENHA =====
function copyPassword(password) {
    navigator.clipboard.writeText(password).then(() => {
        const btn = document.getElementById('wifiCopyBtn');
        if (!btn) return;
        
        btn.classList.add('copied');
        const label = document.getElementById('wifiCopyLabel');
        const originalText = label.textContent;
        
        const feedback = {
            pt: 'Senha copiada!',
            en: 'Password copied!',
            es: '¡Contraseña copiada!'
        };
        
        label.textContent = feedback[currentLang] || feedback.pt;
        
        setTimeout(() => {
            btn.classList.remove('copied');
            label.textContent = originalText;
        }, 3000);
    }).catch(() => {
        alert('Copie manualmente: ' + password);
    });
}

// ===== CHECKOUT COM PROMPT =====
document.addEventListener('click', function(e) {
    const btn = e.target.closest('#checkoutBtn');
    if (!btn) return;
    
    e.preventDefault();
    const messages = {
        pt: "Que horas você pretende fazer o check-out? (Ex: 09:30)",
        en: "What time do you plan to check out? (Ex: 09:30)",
        es: "¿A qué hora piensas hacer el check-out? (Ej: 09:30)"
    };
    const horario = prompt(messages[currentLang] || messages.pt);
    if (horario) {
        const msgs = {
            pt: `Olá! Meu check-out está planejado para às ${horario}. 🔑`,
            en: `Hello! My check-out is scheduled for ${horario}. 🔑`,
            es: `¡Hola! Mi check-out está planeado para las ${horario}. 🔑`
        };
        const msg = encodeURIComponent(msgs[currentLang] || msgs.pt);
        window.open(`https://wa.me/5592982308520?text=${msg}`, '_blank');
    }
});

// ===== SWIPE GESTURE =====
let touchstartX = 0;
let touchstartY = 0;

document.addEventListener('touchstart', e => {
    if (e.target.closest('.sub-tabs-nav') || e.target.closest('.panel-scroll')) {
        touchstartX = 0;
        return;
    }
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', e => {
    if (touchstartX === 0) return;
    
    const diffX = touchstartX - e.changedTouches[0].screenX;
    const diffY = touchstartY - e.changedTouches[0].screenY;
    
    // Só ativa se o movimento for mais horizontal que vertical
    if (Math.abs(diffX) < Math.abs(diffY)) {
        touchstartX = 0;
        return;
    }
    
    const tabs = document.querySelectorAll('.tab-btn');
    const activeIndex = Array.from(tabs).findIndex(btn => btn.classList.contains('active'));

    if (diffX > 60 && activeIndex < tabs.length - 1) {
        switchTab(activeIndex + 1);
    }
    if (diffX < -60 && activeIndex > 0) {
        switchTab(activeIndex - 1);
    }
    touchstartX = 0;
}, { passive: true });

// ===== INICIALIZAÇÃO =====
function initApp() {
    // Carrega idioma salvo ou detecta
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    } else {
        currentLang = detectLanguage();
    }
    
    renderBackgrounds();
    renderTabs();
    renderPanel(0);
    applyTranslations(currentLang);
}

// Inicia quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initApp);