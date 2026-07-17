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
        
        // Panel 0 - Como Chegar (ENDEREÇO FIXO EM PORTUGUÊS)
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
        rest1Desc: "Peixaria com vista para o Rio Negro. Especializada em peixes amazônicos.",
        rest1Map: "Ver no mapa",
        rest2Title: "Tambaqui de Banda",
        rest2Desc: "Peixes amazônicos assados na brasa. Ao lado do Teatro Amazonas.",
        rest2Map: "Ver no mapa",
        rest3Title: "Coreto Manaós",
        rest3Desc: "Café da manhã regional com x-caboquinho e almoço caseiro.",
        rest3Map: "Ver no mapa",
        
        // Panel 4 - Turismo (COM DESCRIÇÕES)
        panel4Title: "Pontos Turísticos",
        tur1Title: "Teatro Amazonas",
        tur1Desc: "O cartão-postal mais famoso de Manaus. Arquitetura suntuosa da época da borracha, com cúpula colorida e materiais importados da Europa.",
        tur1Map: "Ver no mapa",
        tur2Title: "Palácio Rio Negro",
        tur2Desc: "Antiga sede do governo e residência oficial. Hoje é um centro cultural com arquitetura imponente e belos jardins.",
        tur2Map: "Ver no mapa",
        tur3Title: "Mercado Adolpho Lisboa",
        tur3Desc: "Mercado histórico com estrutura de ferro fundido importada da Europa. Perfeito para comprar artesanato regional e frutas típicas.",
        tur3Map: "Ver no mapa",
        tur4Title: "MUSA - Museu da Amazônia",
        tur4Desc: "Museu ao ar livre que oferece uma experiência imersiva na floresta amazônica, com mirante de 42 metros e trilhas.",
        tur4Map: "Ver no mapa",
        tur5Title: "Palácio da Justiça",
        tur5Desc: "Construção histórica com arquitetura neoclássica e belos vitrais. Abriga exposições culturais e conta a história política do Amazonas.",
        tur5Map: "Ver no mapa",
        tur6Title: "Mirante Lúcia Almeida",
        tur6Desc: "Um dos melhores pontos para vista panorâmica de Manaus. Localizado no centro da cidade, oferece uma visão privilegiada do entorno.",
        tur6Map: "Ver no mapa",
        tur7Title: "INPA - Instituto Nacional de Pesquisas da Amazônia",
        tur7Desc: "Centro de pesquisa científica dedicado ao estudo da Amazônia. Possui jardim botânico, aquário e museu com exposições sobre a biodiversidade.",
        tur7Map: "Ver no mapa",
        tur8Title: "Manauara Shopping",
        tur8Desc: "Maior shopping de Manaus com ampla variedade de lojas, praça de alimentação completa e cinema. Ideal para compras e lazer.",
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
        saude3Desc: "Posto de saúde com pronto atendimento. Ideal para consultas e emergências.",
        saude3Map: "Ver no mapa",
        
        // Panel 6 - Check-out
        panel6Title: "Check-out",
        checkoutTitle: "Saída até 11:00h",
        checkoutDesc: "Avise seu horário com antecedência.",
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
        
        // Panel 0 - Como Chegar (ENDEREÇO MANTIDO EM PORTUGUÊS)
        panel0Title: "How to Get There",
        panel0AddrTitle: "Av. Ramos Ferreira, 1031",
        panel0AddrDesc: "Bloco 18, Apto 12 · Centro, Manaus · CEP 69020-250",
        panel0Tag: "Parque Residencial Manaus",
        
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
        rest1Desc: "Seafood restaurant with a view of the Rio Negro. Specializing in Amazonian fish.",
        rest1Map: "View on map",
        rest2Title: "Tambaqui de Banda",
        rest2Desc: "Amazonian fish grilled over charcoal. Next to Teatro Amazonas.",
        rest2Map: "View on map",
        rest3Title: "Coreto Manaós",
        rest3Desc: "Regional breakfast with x-caboquinho and homemade lunch.",
        rest3Map: "View on map",
        
        // Panel 4 - Turismo (COM DESCRIÇÕES EM INGLÊS)
        panel4Title: "Tourist Attractions",
        tur1Title: "Teatro Amazonas",
        tur1Desc: "Manaus' most famous landmark. Sumptuous architecture from the rubber boom era, with a colorful dome and materials imported from Europe.",
        tur1Map: "View on map",
        tur2Title: "Palácio Rio Negro",
        tur2Desc: "Former government headquarters and official residence. Now a cultural center with imposing architecture and beautiful gardens.",
        tur2Map: "View on map",
        tur3Title: "Mercado Adolpho Lisboa",
        tur3Desc: "Historic market with cast iron structure imported from Europe. Perfect for buying regional handicrafts and typical fruits.",
        tur3Map: "View on map",
        tur4Title: "MUSA - Museu da Amazônia",
        tur4Desc: "Open-air museum offering an immersive experience in the Amazon rainforest, with a 42-meter observation tower and trails.",
        tur4Map: "View on map",
        tur5Title: "Palácio da Justiça",
        tur5Desc: "Historic building with neoclassical architecture and beautiful stained glass. Houses cultural exhibitions and tells the political history of Amazonas.",
        tur5Map: "View on map",
        tur6Title: "Mirante Lúcia Almeida",
        tur6Desc: "One of the best spots for a panoramic view of Manaus. Located downtown, it offers a privileged view of the surroundings.",
        tur6Map: "View on map",
        tur7Title: "INPA - National Institute of Amazonian Research",
        tur7Desc: "Scientific research center dedicated to studying the Amazon. Features a botanical garden, aquarium, and museum with biodiversity exhibitions.",
        tur7Map: "View on map",
        tur8Title: "Manauara Shopping",
        tur8Desc: "Manaus' largest shopping mall with a wide variety of stores, complete food court, and cinema. Ideal for shopping and leisure.",
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
        saude3Desc: "Health center with emergency care. Ideal for consultations and emergencies.",
        saude3Map: "View on map",
        
        // Panel 6 - Check-out
        panel6Title: "Check-out",
        checkoutTitle: "Checkout until 11:00 AM",
        checkoutDesc: "Let us know your time in advance.",
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
        
        // Panel 0 - Como Chegar (ENDEREÇO MANTIDO EM PORTUGUÊS)
        panel0Title: "Cómo Llegar",
        panel0AddrTitle: "Av. Ramos Ferreira, 1031",
        panel0AddrDesc: "Bloco 18, Apto 12 · Centro, Manaus · CEP 69020-250",
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
        rest1Desc: "Pescadería con vista al Río Negro. Especializada en pescados amazónicos.",
        rest1Map: "Ver en el mapa",
        rest2Title: "Tambaqui de Banda",
        rest2Desc: "Pescados amazónicos asados a la brasa. Al lado del Teatro Amazonas.",
        rest2Map: "Ver en el mapa",
        rest3Title: "Coreto Manaós",
        rest3Desc: "Desayuno regional con x-caboquinho y almuerzo casero.",
        rest3Map: "Ver en el mapa",
        
        // Panel 4 - Turismo (COM DESCRIÇÕES EM ESPANHOL)
        panel4Title: "Puntos Turísticos",
        tur1Title: "Teatro Amazonas",
        tur1Desc: "La postal más famosa de Manaus. Arquitectura suntuosa de la época del caucho, con cúpula colorida y materiales importados de Europa.",
        tur1Map: "Ver en el mapa",
        tur2Title: "Palácio Rio Negro",
        tur2Desc: "Antigua sede del gobierno y residencia oficial. Hoy es un centro cultural con arquitectura imponente y hermosos jardines.",
        tur2Map: "Ver en el mapa",
        tur3Title: "Mercado Adolpho Lisboa",
        tur3Desc: "Mercado histórico con estructura de hierro fundido importada de Europa. Perfecto para comprar artesanía regional y frutas típicas.",
        tur3Map: "Ver en el mapa",
        tur4Title: "MUSA - Museo de la Amazonía",
        tur4Desc: "Museo al aire libre que ofrece una experiencia inmersiva en la selva amazónica, con mirador de 42 metros y senderos.",
        tur4Map: "Ver en el mapa",
        tur5Title: "Palacio de la Justicia",
        tur5Desc: "Edificio histórico con arquitectura neoclásica y hermosos vitrales. Alberga exposiciones culturales y cuenta la historia política del Amazonas.",
        tur5Map: "Ver en el mapa",
        tur6Title: "Mirante Lúcia Almeida",
        tur6Desc: "Uno de los mejores puntos para vista panorámica de Manaus. Ubicado en el centro de la ciudad, ofrece una vista privilegiada del entorno.",
        tur6Map: "Ver en el mapa",
        tur7Title: "INPA - Instituto Nacional de Investigaciones de la Amazonía",
        tur7Desc: "Centro de investigación científica dedicado al estudio de la Amazonía. Cuenta con jardín botánico, acuario y museo con exposiciones sobre biodiversidad.",
        tur7Map: "Ver en el mapa",
        tur8Title: "Manauara Shopping",
        tur8Desc: "El centro comercial más grande de Manaus con amplia variedad de tiendas, plazoleta de comidas completa y cine. Ideal para compras y ocio.",
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
        saude3Desc: "Centro de salud con atención de urgencias. Ideal para consultas y emergencias.",
        saude3Map: "Ver en el mapa",
        
        // Panel 6 - Check-out
        panel6Title: "Check-out",
        checkoutTitle: "Salida hasta las 11:00h",
        checkoutDesc: "Avise su horario con anticipación.",
        checkoutBtnLabel: "Avisar horario de salida",
        
        // Footer
        footerHint: "Desliza para navegar"
    }
};

// ===== MAPEAMENTO DE IDIOMAS =====
const langMap = {
    'pt': 'pt', 'pt-BR': 'pt', 'pt-PT': 'pt',
    'en': 'en', 'en-US': 'en', 'en-GB': 'en',
    'es': 'es', 'es-ES': 'es', 'es-MX': 'es', 'es-AR': 'es'
};

// ===== FUNÇÃO PARA DETECTAR IDIOMA =====
function detectLanguage() {
    const browserLang = navigator.language || navigator.languages?.[0] || 'pt-BR';
    return langMap[browserLang] || 'pt';
}