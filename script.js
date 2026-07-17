const buttons = document.querySelectorAll('.tabs-nav .tab-btn');
const panels = document.querySelectorAll('.content-container .tab-panel');
const backgrounds = document.querySelectorAll('.bg-container .bg-image');
const tabsNav = document.getElementById('tabsNav');

function switchTab(tabIndex) {
    // 1. Atualizar Botões do Menu Principal
    const buttons = document.querySelectorAll('.tabs-nav .tab-btn');
    buttons.forEach((btn, index) => {
        if (index === tabIndex) {
            btn.classList.add('active');
            // Auto scroll do menu horizontal no celular
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Atualizar Painéis de Conteúdo Principal
    const panels = document.querySelectorAll('.content-container .tab-panel');
    panels.forEach((panel, index) => {
        if (index === tabIndex) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });

    // 3. Atualizar Imagens de Fundo
    const bgImages = document.querySelectorAll('.bg-container .bg-image');
    bgImages.forEach((img, index) => {
        if (index === tabIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

function switchSubTab(panelIndex, subTabIndex) {
    const panel = document.getElementById(`panel-${panelIndex}`);
    if (!panel) return;

    // 1. Atualizar Botões das Sub-abas internas do painel ativo
    const subButtons = panel.querySelectorAll('.sub-tabs-nav .sub-tab-btn');
    subButtons.forEach((btn, index) => {
        if (index === subTabIndex) {
            btn.classList.add('active');
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Atualizar blocos de conteúdo das sub-abas internas
    const subContents = panel.querySelectorAll('.sub-panel-content');
    subContents.forEach((content, index) => {
        if (index === subTabIndex) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

// Lógica de Integração com Prompt Horário do Check-out
const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const horario = prompt("Que horas você pretende realizar o check-out? (Ex: 09:30)");
        if (horario) {
            const text = encodeURIComponent(`Olá! Estou passando para avisar que meu check-out está planejado para às ${horario}. 🔑`);
            window.open(`https://wa.me/5592982308520?text=${text}`, '_blank');
        }
    });
}

// Lógica de Gestos Swipe (Arrastar para o lado) com bloqueio nas sub-abas
let touchstartX = 0;
let touchendX = 0;
const container = document.querySelector('.content-container');

if (container) {
    container.addEventListener('touchstart', e => {
        // CORREÇÃO: Se o toque começou dentro de um menu de sub-abas, ignora o swipe principal
        if (e.target.closest('.sub-tabs-nav')) {
            touchstartX = 0;
            return;
        }
        touchstartX = e.changedTouches[0].screenX;
    }, {passive: true});

    container.addEventListener('touchend', e => {
        // Se o touchstart foi resetado pelo bloqueio acima, não faz nada
        if (touchstartX === 0) return;
        
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
    }, {passive: true});
}

function handleGesture() {
    let activeIndex = Array.from(buttons).findIndex(btn => btn.classList.contains('active'));
    if (touchendX < touchstartX - 70) {
        if (activeIndex < buttons.length - 1) {
            switchTab(activeIndex + 1);
        }
    }
    if (touchendX > touchstartX + 70) {
        if (activeIndex > 0) {
            switchTab(activeIndex - 1);
        }
    }
}