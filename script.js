const buttons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
const backgrounds = document.querySelectorAll('.bg-image');
const tabsNav = document.getElementById('tabsNav');

// Interação personalizada para digitar o horário do check-out antes de ir para o WhatsApp
const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function(e) {
        const horario = prompt("Que horas você pretende realizar o check-out? (Ex: 09:30)");
        if (horario) {
            const text = encodeURIComponent(`Olá! Estou passando para avisar que meu check-out está planejado para às ${horario}. 🔑`);
            this.href = `https://wa.me/5592982308520?text=${text}`;
        }
    });
}

function switchTab(index) {
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[index].classList.add('active');

    panels.forEach(panel => panel.classList.remove('active'));
    panels[index].classList.add('active');

    backgrounds.forEach(bg => bg.classList.remove('active'));
    backgrounds[index].classList.add('active');

    const btn = buttons[index];
    const navWidth = tabsNav.clientWidth;
    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.clientWidth;
    tabsNav.scrollLeft = btnLeft - (navWidth / 2) + (btnWidth / 2);
}

// Suporte ao gesto de deslizar (Swipe) para celulares
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
    if (touchendX < touchstartX - 60) {
        if (activeIndex < buttons.length - 1) {
            switchTab(activeIndex + 1);
        }
    }
    if (touchendX > touchstartX + 60) {
        if (activeIndex > 0) {
            switchTab(activeIndex - 1);
        }
    }
}
