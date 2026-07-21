// ===== VARIÁVEL GLOBAL =====
let currentLang = 'pt';

// ===== FUNÇÃO PARA APLICAR TRADUÇÃO =====
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Header
    document.getElementById('headerTitle').textContent = t.headerTitle;
    document.getElementById('langLabel').textContent = t.langToggle;
    
    // Menu Principal
    document.getElementById('menu0').textContent = t.menu0;
    document.getElementById('menu1').textContent = t.menu1;
    document.getElementById('menu2').textContent = t.menu2;
    document.getElementById('menu3').textContent = t.menu3;
    document.getElementById('menu4').textContent = t.menu4;
    document.getElementById('menu5').textContent = t.menu5;
    document.getElementById('menu6').textContent = t.menu6;
    
    // Panel 0 - Check-in
    document.getElementById('panel0Title').textContent = t.panel0Title;
    document.getElementById('panel0AddrTitle').textContent = t.panel0AddrTitle;
    document.getElementById('panel0AddrDesc').textContent = t.panel0AddrDesc;
    document.getElementById('panel0Tag').textContent = t.panel0Tag;
    document.getElementById('sub0_0').textContent = t.sub0_0;
    document.getElementById('sub0_1').textContent = t.sub0_1;
    document.getElementById('checkinInfoTitle').textContent = t.checkinInfoTitle;
    document.getElementById('checkinInfoDesc').textContent = t.checkinInfoDesc;
    document.getElementById('checkinInfoTag').textContent = t.checkinInfoTag;
    document.getElementById('checkinBtnLabel').textContent = t.checkinBtnLabel;
    
    // Panel 1 - Acomodação (Wi-Fi + Vinhos)
    document.getElementById('panel1Title').textContent = t.panel1Title;
    document.getElementById('sub1_0').textContent = t.sub1_0;
    document.getElementById('sub1_1').textContent = t.sub1_1;
    document.getElementById('sub1_2').textContent = t.sub1_2;
    document.getElementById('sub1_3').textContent = t.sub1_3;
    document.getElementById('sub1_4').textContent = t.sub1_4;
    document.getElementById('sub1_5').textContent = t.sub1_5;
    document.getElementById('sub1_6').textContent = t.sub1_6;
    document.getElementById('sub1_7').textContent = t.sub1_7;
    
    document.getElementById('wifiTitle').textContent = t.wifiTitle;
    document.getElementById('wifiNet1').textContent = t.wifiNet1;
    document.getElementById('wifiNet2').textContent = t.wifiNet2;
    document.getElementById('wifiDesc').textContent = t.wifiDesc;
    document.getElementById('wifiCopyLabel').textContent = t.wifiCopyLabel;
    
    // Vinhos
    document.getElementById('vinhosTitle').textContent = t.vinhosTitle;
    document.getElementById('vinhosDesc').textContent = t.vinhosDesc;
    document.getElementById('vinhosObs').textContent = t.vinhosObs;
    document.getElementById('vinhosValueTitle').textContent = t.vinhosValueTitle;
    document.getElementById('vinhosTag1').textContent = t.vinhosTag1;
    document.getElementById('vinhosTag2').textContent = t.vinhosTag2;
    document.getElementById('vinhosTag3').textContent = t.vinhosTag3;
    
    document.getElementById('climaTitle').textContent = t.climaTitle;
    document.getElementById('climaDesc').textContent = t.climaDesc;
    document.getElementById('climaTag').textContent = t.climaTag;
    
    document.getElementById('lavanderiaTitle').textContent = t.lavanderiaTitle;
    document.getElementById('lavanderiaDesc').textContent = t.lavanderiaDesc;
    document.getElementById('lavanderiaTag1').textContent = t.lavanderiaTag1;
    document.getElementById('lavanderiaTag2').textContent = t.lavanderiaTag2;
    document.querySelector('#lavanderiaBtn span').textContent = t.lavanderiaBtn;
    
    document.getElementById('patioTitle').textContent = t.patioTitle;
    document.getElementById('patioDesc').textContent = t.patioDesc;
    document.getElementById('patioTag').textContent = t.patioTag;
    
    document.getElementById('mimosTitle').textContent = t.mimosTitle;
    document.getElementById('mimosDesc').textContent = t.mimosDesc;
    document.getElementById('mimosTag').textContent = t.mimosTag;
    document.getElementById('mimosObs').innerHTML = `<strong>Obs:</strong> ${t.mimosObs}`;
    
    document.getElementById('estacionamentoTitle').textContent = t.estacionamentoTitle;
    document.getElementById('estacionamentoDesc').textContent = t.estacionamentoDesc;
    document.getElementById('estacionamentoTag1').textContent = t.estacionamentoTag1;
    document.getElementById('estacionamentoTag2').textContent = t.estacionamentoTag2;
    document.getElementById('estacionamentoObs').innerHTML = `<strong>Obs:</strong> ${t.estacionamentoObs}`;
    
    document.getElementById('plantasTitle').textContent = t.plantasTitle;
    document.getElementById('plantasDesc').textContent = t.plantasDesc;
    
    // Panel 2 - Compras
    document.getElementById('panel2Title').textContent = t.panel2Title;
    document.getElementById('sub2_0').textContent = t.sub2_0;
    document.getElementById('sub2_1').textContent = t.sub2_1;
    
    document.getElementById('mercado1Title').textContent = t.mercado1Title;
    document.getElementById('mercado1Desc').textContent = t.mercado1Desc;
    document.getElementById('mercado1Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.mercado1Map}`;
    document.getElementById('mercado1Tag').textContent = t.mercado1Tag;
    
    document.getElementById('mercado2Title').textContent = t.mercado2Title;
    document.getElementById('mercado2Desc').textContent = t.mercado2Desc;
    document.getElementById('mercado2Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.mercado2Map}`;
    
    document.getElementById('mercado3Title').textContent = t.mercado3Title;
    document.getElementById('mercado3Desc').textContent = t.mercado3Desc;
    document.getElementById('mercado3Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.mercado3Map}`;
    
    document.getElementById('shoppingTitle').textContent = t.shoppingTitle;
    document.getElementById('shoppingDesc').textContent = t.shoppingDesc;
    document.getElementById('shoppingMap').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.shoppingMap}`;
    
    // Panel 3 - Restaurantes
    document.getElementById('panel3Title').textContent = t.panel3Title;
    document.getElementById('rest1Title').textContent = t.rest1Title;
    document.getElementById('rest1Desc').textContent = t.rest1Desc;
    document.getElementById('rest1Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.rest1Map}`;
    document.getElementById('rest1Tag').textContent = t.rest1Tag;
    document.getElementById('rest2Title').textContent = t.rest2Title;
    document.getElementById('rest2Desc').textContent = t.rest2Desc;
    document.getElementById('rest2Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.rest2Map}`;
    document.getElementById('rest3Title').textContent = t.rest3Title;
    document.getElementById('rest3Desc').textContent = t.rest3Desc;
    document.getElementById('rest3Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.rest3Map}`;
    
    // Panel 4 - Turismo
    document.getElementById('panel4Title').textContent = t.panel4Title;
    document.getElementById('tur1Title').textContent = t.tur1Title;
    document.getElementById('tur1Desc').textContent = t.tur1Desc;
    document.getElementById('tur1Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.tur1Map}`;
    document.getElementById('tur2Title').textContent = t.tur2Title;
    document.getElementById('tur2Desc').textContent = t.tur2Desc;
    document.getElementById('tur2Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.tur2Map}`;
    document.getElementById('tur3Title').textContent = t.tur3Title;
    document.getElementById('tur3Desc').textContent = t.tur3Desc;
    document.getElementById('tur3Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.tur3Map}`;
    document.getElementById('tur4Title').textContent = t.tur4Title;
    document.getElementById('tur4Desc').textContent = t.tur4Desc;
    document.getElementById('tur4Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.tur4Map}`;
    document.getElementById('tur5Title').textContent = t.tur5Title;
    document.getElementById('tur5Desc').textContent = t.tur5Desc;
    document.getElementById('tur5Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.tur5Map}`;
    document.getElementById('tur6Title').textContent = t.tur6Title;
    document.getElementById('tur6Desc').textContent = t.tur6Desc;
    document.getElementById('tur6Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.tur6Map}`;
    document.getElementById('tur7Title').textContent = t.tur7Title;
    document.getElementById('tur7Desc').textContent = t.tur7Desc;
    document.getElementById('tur7Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.tur7Map}`;
    document.getElementById('tur8Title').textContent = t.tur8Title;
    document.getElementById('tur8Desc').textContent = t.tur8Desc;
    document.getElementById('tur8Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.tur8Map}`;
    
    // Panel 5 - Saúde
    document.getElementById('panel5Title').textContent = t.panel5Title;
    document.getElementById('saude1Title').textContent = t.saude1Title;
    document.getElementById('saude1Desc').textContent = t.saude1Desc;
    document.getElementById('saude1Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.saude1Map}`;
    document.getElementById('saude2Title').textContent = t.saude2Title;
    document.getElementById('saude2Desc').textContent = t.saude2Desc;
    document.getElementById('saude2Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.saude2Map}`;
    document.getElementById('saude3Title').textContent = t.saude3Title;
    document.getElementById('saude3Desc').textContent = t.saude3Desc;
    document.getElementById('saude3Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.saude3Map}`;
    
    // Panel 6 - Check-out
    document.getElementById('panel6Title').textContent = t.panel6Title;
    document.getElementById('checkoutTitle').textContent = t.checkoutTitle;
    document.getElementById('checkoutDesc').textContent = t.checkoutDesc;
    document.getElementById('checkoutBtnLabel').textContent = t.checkoutBtnLabel;
    
    // Footer
    document.getElementById('footerHint').textContent = t.footerHint;
    
    currentLang = lang;
}

// ===== FUNÇÃO PARA ALTERNAR IDIOMA =====
function toggleLanguage() {
    const langCycle = ['pt', 'en', 'es'];
    const currentIndex = langCycle.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % langCycle.length;
    const newLang = langCycle[nextIndex];
    
    applyTranslations(newLang);
    localStorage.setItem('preferredLang', newLang);
}

// ===== INICIALIZAÇÃO =====
function initLanguage() {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && translations[savedLang]) {
        applyTranslations(savedLang);
        return;
    }
    
    const detectedLang = detectLanguage();
    applyTranslations(detectedLang);
}

// ===== SWITCH TAB PRINCIPAL =====
function switchTab(tabIndex) {
    const buttons = document.querySelectorAll('.tabs-nav .tab-btn');
    const panels = document.querySelectorAll('.content-container .tab-panel');
    const bgImages = document.querySelectorAll('.bg-container .bg-image');

    buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i === tabIndex);
        if (i === tabIndex) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });

    panels.forEach((panel, i) => {
        panel.classList.toggle('active', i === tabIndex);
    });

    bgImages.forEach((img, i) => {
        img.classList.toggle('active', i === tabIndex);
    });
}

// ===== SWITCH SUB-TAB =====
function switchSubTab(panelIndex, subIndex) {
    const panel = document.getElementById(`panel-${panelIndex}`);
    if (!panel) return;

    const subBtns = panel.querySelectorAll('.sub-tabs-nav .sub-tab-btn');
    const subContents = panel.querySelectorAll('.sub-panel-content');

    subBtns.forEach((btn, i) => {
        btn.classList.toggle('active', i === subIndex);
        if (i === subIndex) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });

    subContents.forEach((content, i) => {
        content.classList.toggle('active', i === subIndex);
    });
}

// ===== COPIAR SENHA DO Wi-Fi =====
function copyPassword() {
    const password = 'krmkh38v2t';
    const btn = document.getElementById('wifiCopyBtn');
    const label = document.getElementById('wifiCopyLabel');
    
    // Copiar para a área de transferência
    navigator.clipboard.writeText(password).then(() => {
        // Feedback visual
        btn.classList.add('copied');
        const originalText = label.textContent;
        const lang = currentLang;
        
        const feedback = {
            pt: 'Senha copiada!',
            en: 'Password copied!',
            es: '¡Contraseña copiada!'
        };
        
        label.textContent = feedback[lang] || feedback.pt;
        
        setTimeout(() => {
            btn.classList.remove('copied');
            label.textContent = originalText;
        }, 3000);
    }).catch(() => {
        // Fallback para navegadores que não suportam clipboard
        alert('Copie manualmente: krmkh38v2t');
    });
}

// ===== CHECKOUT COM PROMPT =====
document.getElementById('checkoutBtn')?.addEventListener('click', function(e) {
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
const container = document.querySelector('.content-container');
const tabs = document.querySelectorAll('.tabs-nav .tab-btn');

container?.addEventListener('touchstart', e => {
    if (e.target.closest('.sub-tabs-nav')) { touchstartX = 0; return; }
    touchstartX = e.changedTouches[0].screenX;
}, { passive: true });

container?.addEventListener('touchend', e => {
    if (touchstartX === 0) return;
    const diff = touchstartX - e.changedTouches[0].screenX;
    const activeIndex = Array.from(tabs).findIndex(btn => btn.classList.contains('active'));

    if (diff > 60 && activeIndex < tabs.length - 1) switchTab(activeIndex + 1);
    if (diff < -60 && activeIndex > 0) switchTab(activeIndex - 1);
    touchstartX = 0;
}, { passive: true });

// ===== INICIALIZAR IDIOMA AO CARREGAR =====
document.addEventListener('DOMContentLoaded', initLanguage);