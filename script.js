// ===== DICIONÁRIO DE TRADUÇÕES =====
const translations = {
    pt: {
        // Header
        headerTitle: "Airbnb do Salem",
        headerSubtitle: "Manaus — Guia Visual",
        langToggle: "EN",
        
        // Menu Principal
        menu0: "Chegar",
        menu1: "Casa",
        menu2: "Compras",
        menu3: "Comer",
        menu4: "Turismo",
        menu5: "Saúde",
        menu6: "Saída",
        
        // Panel 0 - Como Chegar
        panel0Title: "Como Chegar",
        panel0AddrTitle: "Av. Ramos Ferreira, 1031",
        panel0AddrDesc: "Bloco 18, Apto 12 · Centro, Manaus · CEP 69020-250",
        panel0Tag: "Parque Residencial Manaus",
        
        // Panel 1 - Acomodação
        panel1Title: "Acomodação",
        sub1_0: "Clima",
        sub1_1: "Lavanderia",
        sub1_2: "Pátio de trás",
        sub1_3: "Mimos",
        sub1_4: "Plantas",
        
        climaTitle: "Ar-condicionado em todos os ambientes",
        climaDesc: "Fique à vontade para ajustar a temperatura. Lembre-se de desligar ao sair para ajudar no consumo de energia.",
        climaTag: "💡 Dica: desligue ao sair",
        
        lavanderiaTitle: "Lavanderia",
        lavanderiaDesc: "Entregue e receba o cesto de roupas lavadas e sequinhas.",
        lavanderiaTag1: "Serviço gratuito",
        lavanderiaTag2: "Solicite com antencedência",
        lavanderiaBtn: "Solicitar agora",
        
        patioTitle: "Pátio de trás",
        patioDesc: "Área restrita para cuidados com as plantas. A porta da cozinha permanece trancada.",
        patioTag: "Acesso restrito",
        
        mimosTitle: "Kit de boas-vindas",
        mimosDesc: "Toalhas, amenidades, café, açúcar, sal e óleo. Tudo para começar bem.",
        mimosTag: "Cortesia de entrada",
        mimosObs: "Não fazemos reposições extras durante a estadia.",
        
        plantasTitle: "Cuide das plantinhas",
        plantasDesc: "Deixamos borrifadores no pátio da frente e dentro de casa. Ajude a mantê-las hidratadas! 🌿",
        
        // Panel 2 - Mercados
        panel2Title: "Mercados",
        mercado1Title: "Supermercado Veneza",
        mercado1Desc: "Produtos variados e de boa qualidade. Próximo a acomodação.",
        mercado1Map: "Ver no mapa",
        mercado2Title: "Supermercados DB",
        mercado2Desc: "Ampla variedade de marcas e produtos. A melhor opção para compras completas.",
        mercado2Map: "Ver no mapa",
        
        // Panel 3 - Restaurantes
        panel3Title: "Restaurantes",
        rest1Title: "Taboa Peixaria",
        rest1Desc: "Peixaria com vista para o Rio Negro.",
        rest1Map: "Ver no mapa",
        rest2Title: "Tambaqui de Banda",
        rest2Desc: "Peixes amazônicos assados na brasa. Ao lado do Teatro Amazonas.",
        rest2Map: "Ver no mapa",
        rest3Title: "Coreto Manaós",
        rest3Desc: "Café da manhã regional com x-caboquinho e almoço caseiro.",
        rest3Map: "Ver no mapa",
        
        // Panel 4 - Turismo
        panel4Title: "Pontos Turísticos",
        tur1Title: "Teatro Amazonas",
        tur1Desc: "Cartão-postal de Manaus. Arquitetura suntuosa da época da borracha.",
        tur1Map: "Ver no mapa",
        tur2Title: "Palácio Rio Negro",
        tur2Desc: "Centro cultural com arquitetura imponente e belos jardins.",
        tur2Map: "Ver no mapa",
        tur3Title: "Mercado Municipal Adolpho Lisboa",
        tur3Desc: "Estrutura de ferro fundido importada da Europa. Artesanato regional.",
        tur3Map: "Ver no mapa",
        tur4Title: "MUSA - Museu da Amazônia",
        tur4Desc: "Av. Margarita, 6305 - Cidade de Deus, Manaus - AM, 69099-415",
        tur4Map: "Ver no mapa",
        tur5Title: "Palácio da Justiça",
        tur5Desc: "Av. Eduardo Ribeiro, 901 - Centro, Manaus - AM, 69400-901",
        tur5Map: "Ver no mapa",
        tur6Title: "Mirante Lúcia Almeida",
        tur6Desc: "Av. Sete de Setembro, 8 - Centro, Manaus - AM, 69005-140",
        tur6Map: "Ver no mapa",
        tur7Title: "INPA - Instituto Nacional de Pesquisas da Amazônia",
        tur7Desc: "Av. André Araújo, 2936 - Petrópolis, Manaus - AM, 69067-375",
        tur7Map: "Ver no mapa",
        tur8Title: "Manauara Shopping",
        tur8Desc: "Av. Mário Ypiranga, 1300 - Adrianópolis, Manaus - AM, 69053-165",
        tur8Map: "Ver no mapa",
        
        // Panel 5 - Saúde
        panel5Title: "Saúde",
        saude1Title: "Santo Remédio",
        saude1Desc: "Atendimento 24h. Ideal para emergências noturnas.",
        saude1Map: "Ver no mapa",
        saude2Title: "Pague Menos",
        saude2Desc: "Farmácia bem localizada, com ótima variedade de higiene e cosméticos.",
        saude2Map: "Ver no mapa",
        saude3Title: "UBS - Unidade Básica de Saúde",
        saude3Desc: "Posto de saúde, pronto atendimento.",
        saude3Map: "Ver no mapa",
        
        // Panel 6 - Check-out
        panel6Title: "Check-out",
        checkoutTitle: "Saída até 11:00h",
        checkoutDesc: "Avise seu horário.",
        checkoutBtnLabel: "Avisar horário de saída",
        
        // Footer
        footerHint: "Deslize para navegar"
    },
    en: {
        // Header
        headerTitle: "Salem's Airbnb",
        headerSubtitle: "Manaus — Visual Guide",
        langToggle: "ES",
        
        // Menu Principal
        menu0: "Arrive",
        menu1: "Home",
        menu2: "Shopping",
        menu3: "Eat",
        menu4: "Tourism",
        menu5: "Health",
        menu6: "Checkout",
        
        // Panel 0 - Como Chegar
        panel0Title: "How to Get There",
        panel0AddrTitle: "Av. Ramos Ferreira, 1031",
        panel0AddrDesc: "Block 18, Apt 12 · Downtown, Manaus · ZIP 69020-250",
        panel0Tag: "Manaus Residential Park",
        
        // Panel 1 - Acomodação
        panel1Title: "Accommodation",
        sub1_0: "Climate",
        sub1_1: "Laundry",
        sub1_2: "Backyard",
        sub1_3: "Welcome Kit",
        sub1_4: "Plants",
        
        climaTitle: "Air conditioning in all rooms",
        climaDesc: "Feel free to adjust the temperature. Remember to turn it off when leaving to help save energy.",
        climaTag: "💡 Tip: turn off when leaving",
        
        lavanderiaTitle: "Laundry Service",
        lavanderiaDesc: "Drop off and receive your laundry basket clean and dry.",
        lavanderiaTag1: "Free service",
        lavanderiaTag2: "Request in advance",
        lavanderiaBtn: "Request now",
        
        patioTitle: "Backyard",
        patioDesc: "Restricted area for plant care. The kitchen door remains locked.",
        patioTag: "Restricted access",
        
        mimosTitle: "Welcome Kit",
        mimosDesc: "Towels, amenities, coffee, sugar, salt and oil. Everything to start well.",
        mimosTag: "Complimentary",
        mimosObs: "We do not provide extra replacements during your stay.",
        
        plantasTitle: "Take care of the plants",
        plantasDesc: "We left sprayers in the front yard and inside the house. Help keep them hydrated! 🌿",
        
        // Panel 2 - Mercados
        panel2Title: "Grocery Stores",
        mercado1Title: "Supermercado Veneza",
        mercado1Desc: "Varied products of good quality. Close to the accommodation.",
        mercado1Map: "View on map",
        mercado2Title: "Supermercados DB",
        mercado2Desc: "Wide variety of brands and products. The best option for complete shopping.",
        mercado2Map: "View on map",
        
        // Panel 3 - Restaurantes
        panel3Title: "Restaurants",
        rest1Title: "Taboa Peixaria",
        rest1Desc: "Seafood restaurant with a view of the Rio Negro.",
        rest1Map: "View on map",
        rest2Title: "Tambaqui de Banda",
        rest2Desc: "Amazonian fish grilled over charcoal. Next to Teatro Amazonas.",
        rest2Map: "View on map",
        rest3Title: "Coreto Manaós",
        rest3Desc: "Regional breakfast with x-caboquinho and homemade lunch.",
        rest3Map: "View on map",
        
        // Panel 4 - Turismo
        panel4Title: "Tourist Attractions",
        tur1Title: "Teatro Amazonas",
        tur1Desc: "Manaus' postcard. Sumptuous architecture from the rubber boom era.",
        tur1Map: "View on map",
        tur2Title: "Palácio Rio Negro",
        tur2Desc: "Cultural center with imposing architecture and beautiful gardens.",
        tur2Map: "View on map",
        tur3Title: "Mercado Municipal Adolpho Lisboa",
        tur3Desc: "Cast iron structure imported from Europe. Regional handicrafts.",
        tur3Map: "View on map",
        tur4Title: "MUSA - Museu da Amazônia",
        tur4Desc: "Av. Margarita, 6305 - Cidade de Deus, Manaus - AM, 69099-415",
        tur4Map: "View on map",
        tur5Title: "Palácio da Justiça",
        tur5Desc: "Av. Eduardo Ribeiro, 901 - Centro, Manaus - AM, 69400-901",
        tur5Map: "View on map",
        tur6Title: "Mirante Lúcia Almeida",
        tur6Desc: "Av. Sete de Setembro, 8 - Centro, Manaus - AM, 69005-140",
        tur6Map: "View on map",
        tur7Title: "INPA - National Institute of Amazonian Research",
        tur7Desc: "Av. André Araújo, 2936 - Petrópolis, Manaus - AM, 69067-375",
        tur7Map: "View on map",
        tur8Title: "Manauara Shopping",
        tur8Desc: "Av. Mário Ypiranga, 1300 - Adrianópolis, Manaus - AM, 69053-165",
        tur8Map: "View on map",
        
        // Panel 5 - Saúde
        panel5Title: "Health",
        saude1Title: "Santo Remédio",
        saude1Desc: "24-hour service. Ideal for nighttime emergencies.",
        saude1Map: "View on map",
        saude2Title: "Pague Menos",
        saude2Desc: "Well-located pharmacy with a great variety of hygiene and cosmetics.",
        saude2Map: "View on map",
        saude3Title: "UBS - Basic Health Unit",
        saude3Desc: "Health center, emergency care.",
        saude3Map: "View on map",
        
        // Panel 6 - Check-out
        panel6Title: "Check-out",
        checkoutTitle: "Checkout until 11:00 AM",
        checkoutDesc: "Let us know your time.",
        checkoutBtnLabel: "Notify checkout time",
        
        // Footer
        footerHint: "Swipe to navigate"
    },
    es: {
        // Header
        headerTitle: "Airbnb de Salem",
        headerSubtitle: "Manaus — Guía Visual",
        langToggle: "PT",
        
        // Menu Principal
        menu0: "Llegar",
        menu1: "Casa",
        menu2: "Compras",
        menu3: "Comer",
        menu4: "Turismo",
        menu5: "Salud",
        menu6: "Salida",
        
        // Panel 0 - Como Chegar
        panel0Title: "Cómo Llegar",
        panel0AddrTitle: "Av. Ramos Ferreira, 1031",
        panel0AddrDesc: "Bloque 18, Apto 12 · Centro, Manaus · CEP 69020-250",
        panel0Tag: "Parque Residencial Manaus",
        
        // Panel 1 - Acomodación
        panel1Title: "Alojamiento",
        sub1_0: "Clima",
        sub1_1: "Lavandería",
        sub1_2: "Patio trasero",
        sub1_3: "Mimos",
        sub1_4: "Plantas",
        
        climaTitle: "Aire acondicionado en todos los ambientes",
        climaDesc: "Siéntase libre de ajustar la temperatura. Recuerde apagarlo al salir para ayudar a ahorrar energía.",
        climaTag: "💡 Consejo: apague al salir",
        
        lavanderiaTitle: "Lavandería",
        lavanderiaDesc: "Entregue y reciba el cesto de ropa lavada y seca.",
        lavanderiaTag1: "Servicio gratuito",
        lavanderiaTag2: "Solicitar con anticipación",
        lavanderiaBtn: "Solicitar ahora",
        
        patioTitle: "Patio trasero",
        patioDesc: "Área restringida para el cuidado de las plantas. La puerta de la cocina permanece cerrada.",
        patioTag: "Acceso restringido",
        
        mimosTitle: "Kit de bienvenida",
        mimosDesc: "Toallas, amenities, café, azúcar, sal y aceite. Todo para empezar bien.",
        mimosTag: "Cortesía de entrada",
        mimosObs: "No hacemos reposiciones extras durante la estadía.",
        
        plantasTitle: "Cuida las plantitas",
        plantasDesc: "Dejamos rociadores en el patio delantero y dentro de casa. ¡Ayuda a mantenerlas hidratadas! 🌿",
        
        // Panel 2 - Mercados
        panel2Title: "Mercados",
        mercado1Title: "Supermercado Veneza",
        mercado1Desc: "Productos variados y de buena calidad. Cerca del alojamiento.",
        mercado1Map: "Ver en el mapa",
        mercado2Title: "Supermercados DB",
        mercado2Desc: "Amplia variedad de marcas y productos. La mejor opción para compras completas.",
        mercado2Map: "Ver en el mapa",
        
        // Panel 3 - Restaurantes
        panel3Title: "Restaurantes",
        rest1Title: "Taboa Peixaria",
        rest1Desc: "Pescadería con vista al Río Negro.",
        rest1Map: "Ver en el mapa",
        rest2Title: "Tambaqui de Banda",
        rest2Desc: "Pescados amazónicos asados a la brasa. Al lado del Teatro Amazonas.",
        rest2Map: "Ver en el mapa",
        rest3Title: "Coreto Manaós",
        rest3Desc: "Desayuno regional con x-caboquinho y almuerzo casero.",
        rest3Map: "Ver en el mapa",
        
        // Panel 4 - Turismo
        panel4Title: "Puntos Turísticos",
        tur1Title: "Teatro Amazonas",
        tur1Desc: "Tarjeta postal de Manaus. Arquitectura suntuosa de la época del caucho.",
        tur1Map: "Ver en el mapa",
        tur2Title: "Palácio Rio Negro",
        tur2Desc: "Centro cultural con arquitectura imponente y hermosos jardines.",
        tur2Map: "Ver en el mapa",
        tur3Title: "Mercado Municipal Adolpho Lisboa",
        tur3Desc: "Estructura de hierro fundido importada de Europa. Artesanía regional.",
        tur3Map: "Ver en el mapa",
        tur4Title: "MUSA - Museo de la Amazonía",
        tur4Desc: "Av. Margarita, 6305 - Cidade de Deus, Manaus - AM, 69099-415",
        tur4Map: "Ver en el mapa",
        tur5Title: "Palacio de la Justicia",
        tur5Desc: "Av. Eduardo Ribeiro, 901 - Centro, Manaus - AM, 69400-901",
        tur5Map: "Ver en el mapa",
        tur6Title: "Mirador Lúcia Almeida",
        tur6Desc: "Av. Sete de Setembro, 8 - Centro, Manaus - AM, 69005-140",
        tur6Map: "Ver en el mapa",
        tur7Title: "INPA - Instituto Nacional de Investigaciones de la Amazonía",
        tur7Desc: "Av. André Araújo, 2936 - Petrópolis, Manaus - AM, 69067-375",
        tur7Map: "Ver en el mapa",
        tur8Title: "Manauara Shopping",
        tur8Desc: "Av. Mário Ypiranga, 1300 - Adrianópolis, Manaus - AM, 69053-165",
        tur8Map: "Ver en el mapa",
        
        // Panel 5 - Salud
        panel5Title: "Salud",
        saude1Title: "Santo Remédio",
        saude1Desc: "Atención 24h. Ideal para emergencias nocturnas.",
        saude1Map: "Ver en el mapa",
        saude2Title: "Pague Menos",
        saude2Desc: "Farmacia bien ubicada, con excelente variedad de higiene y cosméticos.",
        saude2Map: "Ver en el mapa",
        saude3Title: "UBS - Unidad Básica de Salud",
        saude3Desc: "Centro de salud, atención de urgencias.",
        saude3Map: "Ver en el mapa",
        
        // Panel 6 - Check-out
        panel6Title: "Check-out",
        checkoutTitle: "Salida hasta las 11:00h",
        checkoutDesc: "Avise su horario.",
        checkoutBtnLabel: "Avisar horario de salida",
        
        // Footer
        footerHint: "Desliza para navegar"
    }
};

// ===== DETECÇÃO DE IDIOMA =====
let currentLang = 'pt';
const langMap = {
    'pt': 'pt',
    'pt-BR': 'pt',
    'pt-PT': 'pt',
    'en': 'en',
    'en-US': 'en',
    'en-GB': 'en',
    'es': 'es',
    'es-ES': 'es',
    'es-MX': 'es',
    'es-AR': 'es'
};

function detectLanguage() {
    const browserLang = navigator.language || navigator.languages?.[0] || 'pt-BR';
    // Mapeia o idioma do navegador para pt, en ou es
    const mapped = langMap[browserLang] || 'pt';
    return mapped;
}

// ===== FUNÇÃO PARA APLICAR TRADUÇÃO =====
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Header
    document.getElementById('headerTitle').textContent = t.headerTitle;
    document.getElementById('headerSubtitle').textContent = t.headerSubtitle;
    document.getElementById('langLabel').textContent = t.langToggle;
    
    // Menu Principal
    document.getElementById('menu0').textContent = t.menu0;
    document.getElementById('menu1').textContent = t.menu1;
    document.getElementById('menu2').textContent = t.menu2;
    document.getElementById('menu3').textContent = t.menu3;
    document.getElementById('menu4').textContent = t.menu4;
    document.getElementById('menu5').textContent = t.menu5;
    document.getElementById('menu6').textContent = t.menu6;
    
    // Panel 0
    document.getElementById('panel0Title').textContent = t.panel0Title;
    document.getElementById('panel0AddrTitle').textContent = t.panel0AddrTitle;
    document.getElementById('panel0AddrDesc').textContent = t.panel0AddrDesc;
    document.getElementById('panel0Tag').textContent = t.panel0Tag;
    
    // Panel 1
    document.getElementById('panel1Title').textContent = t.panel1Title;
    document.getElementById('sub1_0').textContent = t.sub1_0;
    document.getElementById('sub1_1').textContent = t.sub1_1;
    document.getElementById('sub1_2').textContent = t.sub1_2;
    document.getElementById('sub1_3').textContent = t.sub1_3;
    document.getElementById('sub1_4').textContent = t.sub1_4;
    
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
    
    document.getElementById('plantasTitle').textContent = t.plantasTitle;
    document.getElementById('plantasDesc').textContent = t.plantasDesc;
    
    // Panel 2
    document.getElementById('panel2Title').textContent = t.panel2Title;
    document.getElementById('mercado1Title').textContent = t.mercado1Title;
    document.getElementById('mercado1Desc').textContent = t.mercado1Desc;
    document.getElementById('mercado1Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.mercado1Map}`;
    document.getElementById('mercado2Title').textContent = t.mercado2Title;
    document.getElementById('mercado2Desc').textContent = t.mercado2Desc;
    document.getElementById('mercado2Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.mercado2Map}`;
    
    // Panel 3
    document.getElementById('panel3Title').textContent = t.panel3Title;
    document.getElementById('rest1Title').textContent = t.rest1Title;
    document.getElementById('rest1Desc').textContent = t.rest1Desc;
    document.getElementById('rest1Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.rest1Map}`;
    document.getElementById('rest2Title').textContent = t.rest2Title;
    document.getElementById('rest2Desc').textContent = t.rest2Desc;
    document.getElementById('rest2Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.rest2Map}`;
    document.getElementById('rest3Title').textContent = t.rest3Title;
    document.getElementById('rest3Desc').textContent = t.rest3Desc;
    document.getElementById('rest3Map').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.rest3Map}`;
    
    // Panel 4
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
    
    // Panel 5
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
    
    // Panel 6
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
    // Ciclo: pt -> en -> es -> pt
    const langCycle = ['pt', 'en', 'es'];
    const currentIndex = langCycle.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % langCycle.length;
    const newLang = langCycle[nextIndex];
    
    applyTranslations(newLang);
    // Salva a preferência do usuário
    localStorage.setItem('preferredLang', newLang);
}

// ===== INICIALIZAÇÃO =====
function initLanguage() {
    // Verifica se o usuário tem preferência salva
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && translations[savedLang]) {
        applyTranslations(savedLang);
        return;
    }
    
    // Detecta o idioma do navegador
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