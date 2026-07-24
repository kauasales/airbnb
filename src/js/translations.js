// ===== DICIONÁRIO DE TRADUÇÕES =====
const translations = {
    pt: {
        // Header
        headerTitle: "Airbnb do Salem",
        langToggle: "EN",
        
        // Menu Principal
        menu0: "Check-in",
        menu1: "Casa",
        menu2: "Compras",
        menu3: "Restaurantes",
        menu4: "Turismo",
        menu5: "Saúde",
        menu6: "Check-out",
        
        // Panel 0 - Check-in
        panel0Title: "Check-in",
        panel0AddrTitle: "Av. Ramos Ferreira, 1031",
        panel0AddrDesc: "Bloco 18, Apto 4 · Centro, Manaus · CEP 69020-250",
        panel0Tag: "Parque Residencial Manaus",
        sub0_0: "Como chegar",
        sub0_1: "Informações",
        checkinInfoTitle: "Informações de check-in",
        checkinInfoDesc: "Informe seu horário de chegada e solicite as senhas de acesso ao Airbnb.",
        checkinInfoTag: "🔑 Senhas fornecidas via WhatsApp",
        checkinBtnLabel: "Informar horário e solicitar senhas",
        
        // Panel 1 - Acomodação
        panel1Title: "Acomodação",
        sub1_0: "Wi-Fi",
        sub1_1: "Lavanderia",
        sub1_2: "Vinhos",
        sub1_3: "Clima",
        sub1_4: "Pátio",
        sub1_5: "Mimos",
        sub1_6: "Estacionamento",
        sub1_7: "Plantas",
        
        wifiTitle: "Wi-Fi disponível",
        wifiNet1: "REDE 2.4 GHz",
        wifiNet2: "REDE 5 GHz",
        wifiDesc: "Conecte-se à rede para ter internet de alta velocidade durante sua estadia.",
        wifiCopyLabel: "Copiar senha",
        
        // Vinhos
        vinhosTitle: "Vinhos Selecionados pelo Salem",
        vinhosDesc: "Aprecie rótulos especiais escolhidos a dedo para tornar sua estadia ainda mais memorável.",
        vinhosObs: "Aproveite com tranquilidade: você pode informar seus consumos e realizar o pagamento no momento do check-out.",
        vinhosValueTitle: "Garrafa de Vinho",
        vinhosTag1: "Pague no check-out",
        vinhosTag2: "PIX",
        vinhosTag3: "Cartão de Crédito",
        
        climaTitle: "Ar-condicionado em todos os ambientes",
        climaDesc: "Fique à vontade para ajustar a temperatura. Lembre-se de desligar ao sair para ajudar no consumo de energia.",
        climaTag: "Dica: desligue ao sair",
        
        lavanderiaTitle: "Lavanderia",
        lavanderiaDesc: "Entregue e receba o cesto de roupas lavadas e sequinhas.",
        lavanderiaTag1: "Serviço gratuito",
        lavanderiaTag2: "Solicite com antecedência",
        lavanderiaBtn: "Solicitar agora",
        
        patioTitle: "Pátio de trás",
        patioDesc: "Área restrita para cuidados com as plantas. A porta da cozinha permanece trancada.",
        patioTag: "Acesso restrito",
        
        mimosTitle: "Kit de boas-vindas",
        mimosDesc: "Toalhas, amenidades, café, açúcar, sal e óleo. Tudo para começar bem.",
        mimosTag: "Cortesia de entrada",
        mimosObs: "Não fazemos reposições extras durante a estadia.",
        
        estacionamentoTitle: "Estacionamento",
        estacionamentoDesc: "Estacionamento gratuito no local. As vagas não são numeradas - estacione em qualquer vaga disponível.",
        estacionamentoTag1: "Gratuito",
        estacionamentoTag2: "Não estacionar em frente à lixeira",
        estacionamentoObs: "Evite estacionar em frente à lixeira para não atrapalhar o serviço de coleta de lixo.",
        
        plantasTitle: "Cuide das plantinhas",
        plantasDesc: "Deixamos borrifadores no pátio da frente e dentro de casa. Ajude a mantê-las hidratadas! 🌿",
        
        // Panel 2 - Compras
        panel2Title: "Compras",
        sub2_0: "Supermercados",
        sub2_1: "Shopping",
        
        mercado1Title: "Carrefour",
        mercado1Desc: "Ao lado do Manauara Shopping. Ampla variedade de produtos e marcas.",
        mercado1Map: "Ver no mapa",
        mercado1Tag: "⭐ Sugestão do Salem",
        
        mercado2Title: "Supermercado Veneza",
        mercado2Desc: "Produtos variados e de boa qualidade. Próximo à acomodação.",
        mercado2Map: "Ver no mapa",
        
        mercado3Title: "Supermercados DB",
        mercado3Desc: "Ampla variedade de marcas e produtos. A melhor opção para compras completas.",
        mercado3Map: "Ver no mapa",
        
        shoppingTitle: "Manauara Shopping",
        shoppingDesc: "Maior shopping de Manaus com ampla variedade de lojas, praça de alimentação completa e cinema.",
        shoppingMap: "Ver no mapa",
        
        // Panel 3 - Restaurantes
        panel3Title: "Restaurantes",
        sub3_0: "Restaurantes e Cafés",
        sub3_1: "Gastrobar",

        rest1Title: "Taboa Peixaria",
        rest1Desc: "Peixaria com vista para o Rio Negro. Especializada em peixes amazônicos.",
        rest1Map: "Ver no mapa",
        rest1Tag: "⭐ Sugestão do Salem",
        rest2Title: "Tambaqui de Banda",
        rest2Desc: "Peixes amazônicos assados na brasa. Ao lado do Teatro Amazonas.",
        rest2Map: "Ver no mapa",
        rest3Title: "Coreto Manaós",
        rest3Desc: "Café da manhã regional com x-caboquinho e almoço caseiro.",
        rest3Map: "Ver no mapa",
        rest4Title: "Caxiri",
        rest4Desc: "Restaurante referência em Manaus, comandado pela chef Débora Shornik. Oferece uma experiência única com a culinária amazônica em um casarão restaurado com vista para o Teatro Amazonas.",
        rest5Title: "Roseiral Restaurante e Café",
        rest5Desc: "Ambiente romântico e sofisticado, cercado por roseiras. Oferece uma combinação perfeita de café especial e pratos refinados da culinária contemporânea.",
        rest6Title: "Cafeteria do Largo",
        rest6Desc: "Cafeteria charmosa localizada em um dos pontos mais pitorescos de Manaus. Perfeita para um café da tarde com quitutes caseiros e ambiente tranquilo.",
        rest7Title: "Angatu Café",
        rest7Desc: "Café colonial com inspiração portuguesa, servindo deliciosos bolos, tortas e um café de alta qualidade. Ambiente que remete às antigas confeitarias europeias.",
        rest8Title: "Café Casa Monsenhor",
        rest8Desc: "Cafeteria aconchegante em uma casa histórica. Especializada em cafés especiais, chás e uma seleção de doces e salgados feitos artesanalmente.",

        // Gastrobar
        gastro1Title: "Bar do Armando",
        gastro1Desc: "Clássico bar manauara com mais de 40 anos de história. Ambiente descontraído, petiscos tradicionais e a famosa porção de filhote. Ponto de encontro de artistas e intelectuais da cidade.",
        gastro2Title: "Benedito Bar",
        gastro2Desc: "Bar com atmosfera intimista e decoração vintage. Especializado em drinks autorais e música ao vivo. Perfeito para um happy hour com os amigos.",
        gastro3Title: "Farrapo Bar e Restaurante",
        gastro3Desc: "Espaço com duas faces: restaurante requintado durante o dia e bar descolado à noite. Oferece gastronomia contemporânea com influências regionais e drinques criativos.",
        gastro4Title: "Casario 179",
        gastro4Desc: "Localizado em um casarão histórico do centro de Manaus, oferece uma experiência única com gastronomia afetiva, drinks especiais e um ambiente que preserva a memória da cidade.",
        gastro5Title: "Caê",
        gastro5Desc: "Bar com ares de bistrô, focado em gastronomia de autor com ingredientes amazônicos. Destaque para os pratos elaborados e os drinques com frutas regionais.",
        gastro6Title: "Japeto Bar e Restaurante",
        gastro6Desc: "Ambiente acolhedor que combina gastronomia de qualidade com uma carta de vinhos e drinques bem selecionada. Especializado em carnes nobres e petiscos refinados.",
        gastro7Title: "Sarará",
        gastro7Desc: "Bar com identidade própria, mistura de boteco moderno com cozinha criativa. Clássicos da culinária de bar reinventados com toques de alta gastronomia.",

        // Panel 4 - Turismo
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
        checkoutBtnLabel: "Avisar horário de check-out",
        
        // Footer
        footerHint: "Deslize para navegar"
    },
    en: {
        // Header
        headerTitle: "Salem's Airbnb",
        langToggle: "ES",
        
        // Menu Principal
        menu0: "Check in",
        menu1: "Home",
        menu2: "Shopping",
        menu3: "Restaurants",
        menu4: "Tourism",
        menu5: "Health",
        menu6: "Check out",
        
        // Panel 0 - Check-in
        panel0Title: "Check in",
        panel0AddrTitle: "Av. Ramos Ferreira, 1031",
        panel0AddrDesc: "Bloco 18, Apto 4 · Centro, Manaus · CEP 69020-250",
        panel0Tag: "Parque Residencial Manaus",
        sub0_0: "How to get there",
        sub0_1: "Information",
        checkinInfoTitle: "Check in Information",
        checkinInfoDesc: "Inform your arrival time and request the Airbnb access passwords.",
        checkinInfoTag: "🔑 Passwords provided via WhatsApp",
        checkinBtnLabel: "Inform time and request passwords",
        
        // Panel 1 - Accommodation
        panel1Title: "Accommodation",
        sub1_0: "Wi-Fi",
        sub1_1: "Laundry",
        sub1_2: "Wines",
        sub1_3: "Climate",
        sub1_4: "Backyard",
        sub1_5: "Welcome Kit",
        sub1_6: "Parking",
        sub1_7: "Plants",
        
        wifiTitle: "Wi-Fi available",
        wifiNet1: "2.4 GHz NETWORK",
        wifiNet2: "5 GHz NETWORK",
        wifiDesc: "Connect to the network for high-speed internet during your stay.",
        wifiCopyLabel: "Copy password",
        
        // Wines
        vinhosTitle: "Wines Selected by Salem",
        vinhosDesc: "Enjoy special labels handpicked to make your stay even more memorable.",
        vinhosObs: "Enjoy your stay: you can report your consumption and complete the payment at check out.",
        vinhosValueTitle: "Bottle of wine",
        vinhosTag1: "Payment at check out",
        vinhosTag2: "PIX",
        vinhosTag3: "Credit Card",

        climaTitle: "Air conditioning in all rooms",
        climaDesc: "Feel free to adjust the temperature. Remember to turn it off when leaving to help save energy.",
        climaTag: "Tip: turn off when leaving",
        
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
        
        estacionamentoTitle: "Parking",
        estacionamentoDesc: "Free on-site parking. Spaces are not numbered - park in any available spot.",
        estacionamentoTag1: "Free",
        estacionamentoTag2: "Do not park in front of the trash bin",
        estacionamentoObs: "Avoid parking in front of the trash bin to not interfere with the garbage collection service.",
        
        plantasTitle: "Take care of the plants",
        plantasDesc: "We left sprayers in the front yard and inside the house. Help keep them hydrated! 🌿",
        
        // Panel 2 - Shopping
        panel2Title: "Shopping",
        sub2_0: "Supermarkets",
        sub2_1: "Shopping Mall",
        
        mercado1Title: "Carrefour",
        mercado1Desc: "Next to Manauara Shopping. Wide variety of products and brands.",
        mercado1Map: "View on map",
        mercado1Tag: "⭐ Salem's Suggestion",
        
        mercado2Title: "Supermercado Veneza",
        mercado2Desc: "Varied products of good quality. Close to the accommodation.",
        mercado2Map: "View on map",
        
        mercado3Title: "Supermercados DB",
        mercado3Desc: "Wide variety of brands and products. The best option for complete shopping.",
        mercado3Map: "View on map",
        
        shoppingTitle: "Manauara Shopping",
        shoppingDesc: "Manaus' largest shopping mall with a wide variety of stores, complete food court, and cinema.",
        shoppingMap: "View on map",
        
        // Panel 3 - Restaurants
        panel3Title: "Restaurants",
        sub3_0: "Restaurants & Cafes",
        sub3_1: "Gastrobar",

        rest1Title: "Taboa Peixaria",
        rest1Desc: "Seafood restaurant with a view of the Rio Negro. Specializing in Amazonian fish.",
        rest1Map: "View on map",
        rest1Tag: "⭐ Salem's Suggestion",
        rest2Title: "Tambaqui de Banda",
        rest2Desc: "Amazonian fish grilled over charcoal. Next to Teatro Amazonas.",
        rest2Map: "View on map",
        rest3Title: "Coreto Manaós",
        rest3Desc: "Regional breakfast with x-caboquinho and homemade lunch.",
        rest3Map: "View on map",
        rest4Title: "Caxiri",
        rest4Desc: "A reference restaurant in Manaus, run by chef Débora Shornik. It offers a unique Amazonian culinary experience in a restored mansion with a view of the Teatro Amazonas.",
        rest5Title: "Roseiral Restaurante e Café",
        rest5Desc: "Romantic and sophisticated ambiance surrounded by rose bushes. Offers a perfect combination of specialty coffee and refined contemporary dishes.",
        rest6Title: "Cafeteria do Largo",
        rest6Desc: "Charming café located in one of Manaus' most picturesque spots. Perfect for an afternoon coffee with homemade treats and a peaceful atmosphere.",
        rest7Title: "Angatu Café",
        rest7Desc: "Colonial café with Portuguese inspiration, serving delicious cakes, pies, and high-quality coffee. Atmosphere reminiscent of old European bakeries.",
        rest8Title: "Café Casa Monsenhor",
        rest8Desc: "Cozy café in a historic house. Specializing in specialty coffees, teas, and a selection of artisanal sweets and savory snacks.",

        // Gastrobar
        gastro1Title: "Bar do Armando",
        gastro1Desc: "Classic Manaus bar with over 40 years of history. Relaxed atmosphere, traditional snacks, and the famous filhote portion. Meeting point for artists and intellectuals.",
        gastro2Title: "Benedito Bar",
        gastro2Desc: "Bar with an intimate atmosphere and vintage decor. Specializing in signature cocktails and live music. Perfect for a happy hour with friends.",
        gastro3Title: "Farrapo Bar e Restaurante",
        gastro3Desc: "Two-in-one space: a refined restaurant during the day and a cool bar at night. Offers contemporary cuisine with regional influences and creative drinks.",
        gastro4Title: "Casario 179",
        gastro4Desc: "Located in a historic mansion in downtown Manaus, offers a unique experience with comfort food, special drinks, and an atmosphere that preserves the city's memory.",
        gastro5Title: "Caê",
        gastro5Desc: "Bar with a bistro vibe, focused on author cuisine with Amazonian ingredients. Highlights include elaborate dishes and drinks with regional fruits.",
        gastro6Title: "Japeto Bar e Restaurante",
        gastro6Desc: "Welcoming environment combining quality gastronomy with a well-selected wine and drink list. Specialized in premium meats and refined appetizers.",
        gastro7Title: "Sarará",
        gastro7Desc: "Bar with its own identity, blending modern pub with creative cuisine. Classic bar food reinvented with touches of high gastronomy.",

        // Panel 4 - Tourism
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
        
        // Panel 5 - Health
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
        panel6Title: "Check out",
        checkoutTitle: "Check out until 11:00 AM",
        checkoutDesc: "Let us know your time in advance.",
        checkoutBtnLabel: "Notify check out time",
        
        // Footer
        footerHint: "Swipe to navigate"
    },
    es: {
        // Header
        headerTitle: "Airbnb de Salem",
        langToggle: "PT",
        
        // Menu Principal
        menu0: "Check-in",
        menu1: "Casa",
        menu2: "Compras",
        menu3: "Restaurantes",
        menu4: "Turismo",
        menu5: "Salud",
        menu6: "Check-out",
        
        // Panel 0 - Check-in
        panel0Title: "Check-in",
        panel0AddrTitle: "Av. Ramos Ferreira, 1031",
        panel0AddrDesc: "Bloco 18, Apto 4 · Centro, Manaus · CEP 69020-250",
        panel0Tag: "Parque Residencial Manaus",
        sub0_0: "Cómo llegar",
        sub0_1: "Información",
        checkinInfoTitle: "Información de check-in",
        checkinInfoDesc: "Informa tu hora de llegada y solicita las contraseñas de acceso al Airbnb.",
        checkinInfoTag: "🔑 Contraseñas proporcionadas vía WhatsApp",
        checkinBtnLabel: "Informar hora y solicitar contraseñas",
        
        // Panel 1 - Alojamiento
        panel1Title: "Alojamiento",
        sub1_0: "Wi-Fi",
        sub1_1: "Lavandería",
        sub1_2: "Vinos",
        sub1_3: "Clima",
        sub1_4: "Patio",
        sub1_5: "Mimos",
        sub1_6: "Estacionamiento",
        sub1_7: "Plantas",
        
        wifiTitle: "Wi-Fi disponible",
        wifiNet1: "RED 2.4 GHz",
        wifiNet2: "RED 5 GHz",
        wifiDesc: "Conéctate a la red para tener internet de alta velocidad durante tu estadía.",
        wifiCopyLabel: "Copiar contraseña",
        
        // Vinos
        vinhosTitle: "Vinos Seleccionados por Salem",
        vinhosDesc: "Disfruta de etiquetas especiales elegidas a dedo para hacer tu estancia aún más memorable.",
        vinhosObs: "Disfrute con tranquilidad: puede informar sus consumos y realizar el pago al momento del check-out.",
        vinhosValueTitle: "Botella de vino",
        vinhosTag1: "Pague al check-out",
        vinhosTag2: "PIX",
        vinhosTag3: "Tarjeta de Crédito",

        climaTitle: "Aire acondicionado en todos los ambientes",
        climaDesc: "Siéntase libre de ajustar la temperatura. Recuerde apagarlo al salir para ayudar a ahorrar energía.",
        climaTag: "Consejo: apague al salir",
        
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
        
        estacionamentoTitle: "Estacionamiento",
        estacionamentoDesc: "Estacionamiento gratuito en el lugar. Las plazas no están numeradas - estacione en cualquier plaza disponible.",
        estacionamentoTag1: "Gratuito",
        estacionamentoTag2: "No estacionar frente al contenedor de basura",
        estacionamentoObs: "Evite estacionar frente al contenedor de basura para no interferir con el servicio de recogida de basura.",
        
        plantasTitle: "Cuida las plantitas",
        plantasDesc: "Dejamos rociadores en el patio delantero y dentro de casa. ¡Ayuda a mantenerlas hidratadas! 🌿",
        
        // Panel 2 - Compras
        panel2Title: "Compras",
        sub2_0: "Supermercados",
        sub2_1: "Centro Comercial",
        
        mercado1Title: "Carrefour",
        mercado1Desc: "Al lado de Manauara Shopping. Amplia variedad de productos y marcas.",
        mercado1Map: "Ver en el mapa",
        mercado1Tag: "⭐ Sugerencia de Salem",
        
        mercado2Title: "Supermercado Veneza",
        mercado2Desc: "Productos variados y de buena calidad. Cerca del alojamiento.",
        mercado2Map: "Ver en el mapa",
        
        mercado3Title: "Supermercados DB",
        mercado3Desc: "Amplia variedad de marcas y productos. La mejor opción para compras completas.",
        mercado3Map: "Ver en el mapa",
        
        shoppingTitle: "Manauara Shopping",
        shoppingDesc: "El centro comercial más grande de Manaus con amplia variedad de tiendas, plazoleta de comidas completa y cine.",
        shoppingMap: "Ver en el mapa",
        
        // Panel 3 - Restaurantes
        panel3Title: "Restaurantes",
        sub3_0: "Restaurantes y Cafeterías",
        sub3_1: "Gastrobar",

        rest1Title: "Taboa Peixaria",
        rest1Desc: "Pescadería con vista al Río Negro. Especializada en pescados amazónicos.",
        rest1Map: "Ver en el mapa",
        rest1Tag: "⭐ Sugerencia de Salem",
        rest2Title: "Tambaqui de Banda",
        rest2Desc: "Pescados amazónicos asados a la brasa. Al lado del Teatro Amazonas.",
        rest2Map: "Ver en el mapa",
        rest3Title: "Coreto Manaós",
        rest3Desc: "Desayuno regional con x-caboquinho y almuerzo casero.",
        rest3Map: "Ver en el mapa",
        rest4Title: "Caxiri",
        rest4Desc: "Restaurante de referencia en Manaus, dirigido por la chef Débora Shornik. Ofrece una experiencia única con la cocina amazónica en una mansión restaurada con vista al Teatro Amazonas.",
        rest5Title: "Roseiral Restaurante e Café",
        rest5Desc: "Ambiente romántico y sofisticado, rodeado de rosales. Ofrece una combinación perfecta de café especial y platos refinados de la cocina contemporánea.",
        rest6Title: "Cafeteria do Largo",
        rest6Desc: "Acogedora cafetería ubicada en uno de los puntos más pintorescos de Manaus. Perfecta para un café por la tarde con dulces caseros y ambiente tranquilo.",
        rest7Title: "Angatu Café",
        rest7Desc: "Café colonial con inspiración portuguesa, que sirve deliciosos pasteles, tartas y café de alta calidad. Ambiente que recuerda a las antiguas pastelerías europeas.",
        rest8Title: "Café Casa Monsenhor",
        rest8Desc: "Acogedora cafetería en una casa histórica. Especializada en cafés especiales, tés y una selección de dulces y snacks artesanales.",

        // Gastrobar
        gastro1Title: "Bar do Armando",
        gastro1Desc: "Clásico bar de Manaus con más de 40 años de historia. Ambiente relajado, aperitivos tradicionales y la famosa porción de filhote. Punto de encuentro de artistas e intelectuales.",
        gastro2Title: "Benedito Bar",
        gastro2Desc: "Bar con atmósfera íntima y decoración vintage. Especializado en cócteles de autor y música en vivo. Perfecto para un happy hour con amigos.",
        gastro3Title: "Farrapo Bar e Restaurante",
        gastro3Desc: "Espacio de dos caras: restaurante refinado durante el día y bar moderno por la noche. Ofrece gastronomía contemporánea con influencias regionales y tragos creativos.",
        gastro4Title: "Casario 179",
        gastro4Desc: "Ubicado en una mansión histórica en el centro de Manaus, ofrece una experiencia única con gastronomía afectiva, tragos especiales y un ambiente que preserva la memoria de la ciudad.",
        gastro5Title: "Caê",
        gastro5Desc: "Bar con aires de bistró, enfocado en gastronomía de autor con ingredientes amazónicos. Destacan los platos elaborados y los tragos con frutas regionales.",
        gastro6Title: "Japeto Bar e Restaurante",
        gastro6Desc: "Ambiente acogedor que combina gastronomía de calidad con una carta de vinos y tragos bien seleccionada. Especializado en carnes nobles y aperitivos refinados.",
        gastro7Title: "Sarará",
        gastro7Desc: "Bar con identidad propia, mezcla de bar moderno con cocina creativa. Clásicos de la cocina de bar reinventados con toques de alta gastronomía.",

        // Panel 4 - Turismo
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
        checkoutBtnLabel: "Avisar horario de check-out",
        
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