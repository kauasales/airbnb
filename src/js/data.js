// ===== DADOS DO SISTEMA =====
const DATA = {
    // Imagens de fundo
    backgrounds: [
        './assets/images/local.jpg',
        './assets/images/acomodacao.jpeg',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
        './assets/images/restaurantes.jpg',
        './assets/images/ponto_turistico.jpeg',
        './assets/images/saude.jpg',
        './assets/images/local.jpg'
    ],

    // Menu principal
    tabs: [
        { id: 'checkin', icon: 'fa-location-dot' },
        { id: 'casa', icon: 'fa-house-chimney' },
        { id: 'compras', icon: 'fa-basket-shopping' },
        { id: 'restaurantes', icon: 'fa-utensils' },
        { id: 'turismo', icon: 'fa-camera-retro' },
        { id: 'saude', icon: 'fa-heartbeat' },
        { id: 'checkout', icon: 'fa-key' }
    ],

    // Conteúdo de cada aba
    panels: {
        checkin: {
            icon: 'fa-map-location-dot',
            titleKey: 'panel0Title',
            subTabs: [
                { id: 'como-chegar', icon: 'fa-map-pin', key: 'sub0_0' },
                { id: 'informacoes', icon: 'fa-key', key: 'sub0_1' }
            ],
            content: {
                'como-chegar': [
                    {
                        type: 'card',
                        icon: 'fa-location-dot',
                        translationKey: 'panel0AddrTitle',
                        descKey: 'panel0AddrDesc',
                        tagKey: 'panel0Tag'
                    },
                    {
                        type: 'map',
                        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8961726053357!2d-60.0247656!3d-3.1234907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c0564e859d5e5%3A0xbfd66dee9b3d8704!2sAv.%20Ramos%20Ferreira%2C%201031%20-%20Centro%2C%20Manaus%20-%20AM%2C%2069020-030!5e0!3m2!1spt-BR!2sbr!4v1710000000000'
                    }
                ],
                'informacoes': [
                    {
                        type: 'card',
                        icon: 'fa-clock',
                        translationKey: 'checkinInfoTitle',
                        descKey: 'checkinInfoDesc',
                        tagKey: 'checkinInfoTag'
                    },
                    {
                        type: 'whatsapp',
                        url: 'https://wa.me/5592982308520?text=Olá!%20Gostaria%20de%20informar%20meu%20horário%20de%20check-in%20e%20solicitar%20as%20senhas%20de%20acesso%20🔑',
                        labelKey: 'checkinBtnLabel',
                        id: 'checkinBtn'
                    }
                ]
            }
        },

        casa: {
            icon: 'fa-house-user',
            titleKey: 'panel1Title',
            subTabs: [
                { id: 'wifi', icon: 'fa-wifi', key: 'sub1_0' },
                { id: 'lavanderia', icon: 'fa-shirt', key: 'sub1_1' },
                { id: 'vinhos', icon: 'fa-wine-glass-empty', key: 'sub1_2' },
                { id: 'clima', icon: 'fa-snowflake', key: 'sub1_3' },
                { id: 'patio', icon: 'fa-tree', key: 'sub1_4' },
                { id: 'mimos', icon: 'fa-gift', key: 'sub1_5' },
                { id: 'estacionamento', icon: 'fa-car', key: 'sub1_6' },
                { id: 'plantas', icon: 'fa-leaf', key: 'sub1_7' }
            ],
            content: {
                'wifi': [
                    {
                        type: 'card',
                        icon: 'fa-wifi',
                        translationKey: 'wifiTitle',
                        descKey: 'wifiDesc',
                        wifi: {
                            networks: [
                                { labelKey: 'wifiNet1', ssid: 'LIVE_TIM_EEA4_2G' },
                                { labelKey: 'wifiNet2', ssid: 'LIVE_TIM_EEA4_5G' }
                            ]
                        },
                        button: { 
                            type: 'copy', 
                            label: 'Copiar senha',
                            password: 'krmkh38v2t'
                        }
                    }
                ],
                'lavanderia': [
                    {
                        type: 'card',
                        icon: 'fa-shirt',
                        translationKey: 'lavanderiaTitle',
                        descKey: 'lavanderiaDesc',
                        tags: ['Serviço gratuito', 'Solicite com antecedência'],
                        tagsKey: 'lavanderiaTag'
                    },
                    {
                        type: 'whatsapp',
                        url: 'https://wa.me/5592982308520?text=Olá!%20Gostaria%20de%20solicitar%20a%20lavanderia%20🧺',
                        labelKey: 'lavanderiaBtn',
                        id: 'lavanderiaBtn'
                    }
                ],
                'vinhos': [
                    {
                        type: 'card',
                        icon: 'fa-wine-glass',
                        translationKey: 'vinhosTitle',
                        descKey: 'vinhosDesc',
                        vinho: {
                            labelKey: 'vinhosValueTitle',
                            price: 'R$ 50'
                        },
                        obsKey: 'vinhosObs',
                        tags: ['Pague no check-out', 'PIX', 'Cartão de Crédito'],
                        tagsKey: 'vinhosTag'
                    }
                ],
                'clima': [
                    {
                        type: 'card',
                        icon: 'fa-snowflake',
                        translationKey: 'climaTitle',
                        descKey: 'climaDesc',
                        tagKey: 'climaTag'
                    }
                ],
                'patio': [
                    {
                        type: 'card',
                        icon: 'fa-tree',
                        translationKey: 'patioTitle',
                        descKey: 'patioDesc',
                        tagKey: 'patioTag'
                    }
                ],
                'mimos': [
                    {
                        type: 'card',
                        icon: 'fa-gift',
                        translationKey: 'mimosTitle',
                        descKey: 'mimosDesc',
                        tagKey: 'mimosTag'
                    },
                    {
                        type: 'highlight',
                        textKey: 'mimosObs'
                    }
                ],
                'estacionamento': [
                    {
                        type: 'card',
                        icon: 'fa-car',
                        translationKey: 'estacionamentoTitle',
                        descKey: 'estacionamentoDesc',
                        tags: ['Gratuito', 'Não estacionar em frente à lixeira'],
                        tagsKey: 'estacionamentoTag'
                    },
                    {
                        type: 'highlight',
                        textKey: 'estacionamentoObs'
                    }
                ],
                'plantas': [
                    {
                        type: 'card',
                        icon: 'fa-leaf',
                        translationKey: 'plantasTitle',
                        descKey: 'plantasDesc'
                    }
                ]
            }
        },

        compras: {
            icon: 'fa-basket-shopping',
            titleKey: 'panel2Title',
            subTabs: [
                { id: 'supermercados', icon: 'fa-store', key: 'sub2_0' },
                { id: 'shopping', icon: 'fa-bag-shopping', key: 'sub2_1' }
            ],
            content: {
                'supermercados': [
                    {
                        type: 'card',
                        icon: 'fa-store',
                        translationKey: 'mercado1Title',
                        descKey: 'mercado1Desc',
                        map: 'https://maps.google.com/?q=Av.+Umberto+Calderaro,+203+-+Adrian%C3%B3polis,+Manaus+-+AM,+69057-015',
                        tagKey: 'mercado1Tag'
                    },
                    {
                        type: 'card',
                        icon: 'fa-store-alt',
                        translationKey: 'mercado2Title',
                        descKey: 'mercado2Desc',
                        map: 'https://maps.google.com/?q=Av.+Joaquim+Nabuco,+2167+-+Centro,+Manaus+-+AM,+69020-031'
                    },
                    {
                        type: 'card',
                        icon: 'fa-store',
                        translationKey: 'mercado3Title',
                        descKey: 'mercado3Desc',
                        map: 'https://maps.google.com/?q=Avenida+Eduardo+Ribeiro,+453,+Manaus,+Amazonas,+69010-001'
                    }
                ],
                'shopping': [
                    {
                        type: 'card',
                        icon: 'fa-bag-shopping',
                        translationKey: 'shoppingTitle',
                        descKey: 'shoppingDesc',
                        map: 'https://maps.google.com/?q=Manauara+Shopping+Av.+M%C3%A1rio+Ypiranga,+1300+-+Adrian%C3%B3polis,+Manaus+-+AM,+69053-165'
                    }
                ]
            }
        },

        restaurantes: {
            icon: 'fa-utensils',
            titleKey: 'panel3Title',
            subTabs: [
                { id: 'restaurantesecafes', icon: 'fa-store', key: 'sub3_0' },
                { id: 'gastrobar', icon: 'fa-cocktail', key: 'sub3_1' }
            ],
            content: {
                'restaurantesecafes': [
                    {
                        type: 'card',
                        icon: 'fa-fish',
                        translationKey: 'rest1Title',
                        descKey: 'rest1Desc',
                        map: 'https://maps.google.com/?q=R.+Profa.+Em%C3%ADlia+Cavalcante,+49+-+Compensa,+Manaus+-+AM,+69036-720',
                        tagKey: 'rest1Tag'
                    },
                    {
                        type: 'card',
                        icon: 'fa-fish-fins',
                        translationKey: 'rest2Title',
                        descKey: 'rest2Desc',
                        map: 'https://maps.google.com/?q=Tambaqui+de+Banda+Rua+Jose+Clemente+Centro+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-mug-hot',
                        translationKey: 'rest3Title',
                        descKey: 'rest3Desc',
                        map: 'https://maps.google.com/?q=Coreto+Manaos+Cafe+Almoco+Regional+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-utensils',
                        translationKey: 'rest4Title',
                        descKey: 'rest4Desc',
                        map: 'https://maps.google.com/?q=Caxiri+Restaurante+Manaus',
                        tagKey: 'rest4Tag'
                    },
                    {
                        type: 'card',
                        icon: 'fa-tree',
                        translationKey: 'rest5Title',
                        descKey: 'rest5Desc',
                        map: 'https://maps.google.com/?q=Roseiral+Restaurante+e+Cafe+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-mug-saucer',
                        translationKey: 'rest6Title',
                        descKey: 'rest6Desc',
                        map: 'https://maps.google.com/?q=Cafeteria+do+Largo+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-wine-bottle',
                        translationKey: 'rest7Title',
                        descKey: 'rest7Desc',
                        map: 'https://maps.google.com/?q=Angatu+Cafe+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-mug-hot',
                        translationKey: 'rest8Title',
                        descKey: 'rest8Desc',
                        map: 'https://maps.google.com/?q=Cafe+Casa+Monsenhor+Manaus'
                    }
                ],
                'gastrobar': [
                    {
                        type: 'card',
                        icon: 'fa-bottle-droplet',
                        translationKey: 'gastro1Title',
                        descKey: 'gastro1Desc',
                        map: 'https://maps.google.com/?q=Bar+do+Armando+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-cocktail',
                        translationKey: 'gastro2Title',
                        descKey: 'gastro2Desc',
                        map: 'https://maps.google.com/?q=Benedito+Bar+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-utensils',
                        translationKey: 'gastro3Title',
                        descKey: 'gastro3Desc',
                        map: 'https://maps.google.com/?q=Farrapo+Bar+e+Restaurante+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-building-columns',
                        translationKey: 'gastro4Title',
                        descKey: 'gastro4Desc',
                        map: 'https://maps.google.com/?q=Casario+179+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-wine-bottle',
                        translationKey: 'gastro5Title',
                        descKey: 'gastro5Desc',
                        map: 'https://maps.google.com/?q=Ca%C3%AA+Bar+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-martini-glass',
                        translationKey: 'gastro6Title',
                        descKey: 'gastro6Desc',
                        map: 'https://maps.google.com/?q=Japeto+Bar+e+Restaurante+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-bottle-droplet',
                        translationKey: 'gastro7Title',
                        descKey: 'gastro7Desc',
                        map: 'https://maps.google.com/?q=Sarar%C3%A1+Bar+Manaus'
                    }
                ],
            }
        },

        turismo: {
            icon: 'fa-camera-retro',
            titleKey: 'panel4Title',
            subTabs: [],
            content: {
                'default': [
                    {
                        type: 'card',
                        icon: 'fa-theater-masks',
                        translationKey: 'tur1Title',
                        descKey: 'tur1Desc',
                        map: 'https://maps.google.com/?q=Teatro+Amazonas+Largo+de+Sao+Sebastiao+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-landmark',
                        translationKey: 'tur2Title',
                        descKey: 'tur2Desc',
                        map: 'https://maps.google.com/?q=Palacio+Rio+Negro+Av+Sete+de+Setembro+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-warehouse',
                        translationKey: 'tur3Title',
                        descKey: 'tur3Desc',
                        map: 'https://maps.google.com/?q=R.+dos+Bar%C3%A9s,+46+-+Centro,+Manaus+-+AM,+69009-365'
                    },
                    {
                        type: 'card',
                        icon: 'fa-tree',
                        translationKey: 'tur4Title',
                        descKey: 'tur4Desc',
                        map: 'https://maps.google.com/?q=Av.+Margarita,+6305+-+Cidade+de+Deus,+Manaus+-+AM,+69099-415'
                    },
                    {
                        type: 'card',
                        icon: 'fa-gavel',
                        translationKey: 'tur5Title',
                        descKey: 'tur5Desc',
                        map: 'https://maps.google.com/?q=Av.+Eduardo+Ribeiro,+901+-+Centro,+Manaus+-+AM,+69400-901'
                    },
                    {
                        type: 'card',
                        icon: 'fa-eye',
                        translationKey: 'tur6Title',
                        descKey: 'tur6Desc',
                        map: 'https://maps.google.com/?q=Av.+Sete+de+Setembro,+8+-+Centro,+Manaus+-+AM,+69005-140'
                    },
                    {
                        type: 'card',
                        icon: 'fa-flask',
                        translationKey: 'tur7Title',
                        descKey: 'tur7Desc',
                        map: 'https://maps.google.com/?q=Av.+Andr%C3%A9+Ara%C3%BAjo,+2936+-+Petr%C3%B3polis,+Manaus+-+AM,+69067-375'
                    },
                    {
                        type: 'card',
                        icon: 'fa-bag-shopping',
                        translationKey: 'tur8Title',
                        descKey: 'tur8Desc',
                        map: 'https://maps.google.com/?q=Av.+M%C3%A1rio+Ypiranga,+1300+-+Adrian%C3%B3polis,+Manaus+-+AM,+69053-165'
                    }
                ]
            }
        },

        saude: {
            icon: 'fa-heartbeat',
            titleKey: 'panel5Title',
            subTabs: [],
            content: {
                'default': [
                    {
                        type: 'card',
                        icon: 'fa-pills',
                        translationKey: 'saude1Title',
                        descKey: 'saude1Desc',
                        map: 'https://maps.google.com/?q=Drogaria+Santo+Remedio+Av+Joaquim+Nabuco+1841+Centro+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-kit-medical',
                        translationKey: 'saude2Title',
                        descKey: 'saude2Desc',
                        map: 'https://maps.google.com/?q=Farmacia+Pague+Menos+Av+Joaquim+Nabuco+2305+Centro+Manaus'
                    },
                    {
                        type: 'card',
                        icon: 'fa-hospital',
                        translationKey: 'saude3Title',
                        descKey: 'saude3Desc',
                        map: 'https://maps.google.com/?q=Pra%C3%A7a+Ismael+Ben%C3%ADgno,+155+-+S%C3%A3o+Raimundo,+Manaus+-+AM,+69027-320'
                    }
                ]
            }
        },

        checkout: {
            icon: 'fa-key',
            titleKey: 'panel6Title',
            subTabs: [],
            content: {
                'default': [
                    {
                        type: 'card',
                        icon: 'fa-clock',
                        translationKey: 'checkoutTitle',
                        descKey: 'checkoutDesc'
                    },
                    {
                        type: 'whatsapp',
                        url: '#',
                        labelKey: 'checkoutBtnLabel',
                        id: 'checkoutBtn',
                        full: true
                    }
                ]
            }
        }
    }
};