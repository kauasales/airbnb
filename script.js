const buttons = document.querySelectorAll('.tabs-nav .tab-btn');
const panels = document.querySelectorAll('.content-container .tab-panel');
const backgrounds = document.querySelectorAll('.bg-container .bg-image');
const tabsNav = document.getElementById('tabsNav');

// Lógica Genérica de Sub-abas (Funciona para Qualquer Painel Principal)
function switchSubTab(panelIndex, subIndex) {
    const targetPanel = document.getElementById(`panel-${panelIndex}`);
    if (!targetPanel) return;

    const subButtons = targetPanel.querySelectorAll('.sub-tabs-nav .sub-tab-btn');
    const subContents = targetPanel.querySelectorAll('.sub-panel-content');
    
    subButtons.forEach(btn => btn.classList.remove('active'));
    subContents.forEach(content => content.classList.remove('active'));
    
    if(subButtons[subIndex]) subButtons[subIndex].classList.add('active');
    if(subContents[subIndex]) subContents[subIndex].classList.add('active');
}

// Lógica das Abas Principais
function switchTab(index) {
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[index].classList.add('active');

    panels.forEach(panel => panel.classList.remove('active'));
    panels[index].classList.add('active');

    backgrounds.forEach(bg => bg.classList.remove('active'));
    if(backgrounds[index]) {
        backgrounds[index].classList.add('active');
    }

    const btn = buttons[index];
    const navWidth = tabsNav.clientWidth;
    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.clientWidth;
    tabsNav.scrollLeft = btnLeft - (navWidth / 2) + (btnWidth / 2);
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

// Lógica de Gestos Swipe (Arrastar para o lado)
let touchstartX = 0;
let touchendX = 0;
const container = document.querySelector('.content-container');

if (container) {
    container.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    }, {passive: true});

    container.addEventListener('touchend', e => {
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