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

// ===== CHECKOUT COM PROMPT =====
document.getElementById('checkoutBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    const horario = prompt("Que horas você pretende fazer o check-out? (Ex: 09:30)");
    if (horario) {
        const msg = encodeURIComponent(`Olá! Meu check-out está planejado para às ${horario}. 🔑`);
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