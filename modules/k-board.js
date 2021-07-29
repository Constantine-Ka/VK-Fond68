const { button }    = require('node-vk-bot-api/lib/markup');
const Markup        = require('node-vk-bot-api/lib/markup');

module.exports.main = Markup.keyboard
    ([
        Markup.button({
            action: {
                type: 'text',
                label: '🌷О нас',
                payload:{button:'about'}
            },
            color: 'positive',
        }),
        Markup.button({
            action: {
                type: 'text',
                label: '🌷Контакты',
                payload:{button: 'contacts'}
            },
            color: 'positive',
        }),
        Markup.button({
            action: {
            type: 'text',
                label: '🌷Хочу помочь',
                payload:{button: 'wish_help'}
            },
            color: 'positive',
        }),
    ]
)
module.exports.helper =Markup.keyboard([
        [
            Markup.button({
                action: {
                    type: 'text',
                    label: '🔄Главное меню',
                    payload:{button:'start'}
                },
                color: 'negative',
            })
        ],
        [
            Markup.button({
                action: {
                    type: 'text',
                    label: '💊Предметами первой необходимости',
                    payload:{button: 'items'}
                },
                color: 'primary',
            })

        ],
        [

            Markup.button({
                action: {
                type: 'text',
                    label: '💰Деньгами',
                    payload:{button: 'money'}
                },
                color: 'positive',
            }),
            Markup.button({
                action: {
                type: 'text',
                    label: '🙏Делами',
                    payload:{button: 'volunteer'}
                },
                color: 'secondary',
            })

        ]
    ]
)
module.exports.qrCode =Markup.keyboard
([   [
    Markup.button({
        action:{
            type:'text',
            label:'Назад',
            payload:{button:'wish_help'}
        },
        color: 'negative'
    }),
    Markup.button({
        action: {
            type: 'text',
            label: '🔄Главное меню',
            payload:{button:'start'}
        },
        color: 'negative',
    })
],
[
    Markup.button({
        action: {
            type: 'text',
            label: '📔На уставные цели',
            payload:{button:'rule_task'}
        },
        color: 'positive',
    }),
    Markup.button({
        action: {
            type: 'text',
            label: '📝Указать лично',
            payload:{button: 'choose_task'}
        },
        color: 'positive',
    })
]]
)
module.exports.helperTwo = Markup.keyboard([
    [
        Markup.button({
            action:{
                type:'text',
                label:'Назад',
                payload:{button:'wish_help'}
            },
            color: 'negative'
        }),
        Markup.button({
            action: {
                type: 'text',
                label: '🔄Главное меню',
                payload:{button:'start'}
            },
            color: 'negative',
        })
    ],
    [
        Markup.button({
            action: {
                type: 'text',
                label: '📔На уставные цели',
                payload:{button:'rule_task'}
            },
            color: 'positive',
        }),
        Markup.button({
            action: {
                type: 'text',
                label: '📝Указать лично',
                payload:{button: 'choose_task'}
            },
            color: 'positive',
        })
    ]
]
)
module.exports.volonters_name=Markup.keyboard
        ([    [
            Markup.button({
                action:{
                    type:'text',
                    label:'Назад',
                    payload:{button:'wish_help'}
                },
                color: 'negative'
            }),
            Markup.button({
                action: {
                    type: 'text',
                    label: '🔄Главное меню',
                    payload:{button:'start'}
                },
                color: 'negative',
            })
        ],
        [
            Markup.button({
                action: {
                    type: 'text',
                    label: '✅Моя настоящая страница',
                    payload:{button:'real_page'}
                },
                color: 'positive',
            }),
        ]

    ]
)
module.exports.volonters_step=Markup.keyboard
        ([    [
            Markup.button({
                action:{
                    type:'text',
                    label:'Назад',
                    payload:{button:'wish_help'}
                },
                color: 'negative'
            }),
            Markup.button({
                action: {
                    type: 'text',
                    label: '🔄Главное меню',
                    payload:{button:'start'}
                },
                color: 'negative',
            })

        ]

    ]
)
module.exports.helper_items  =Markup.keyboard([
    [
        Markup.button({
            action: {
                type: 'text',
                label: '🔄Наш адрес',
                payload:{button:'location'}
            },
            color: 'negative',
        })
    ],
    [
        Markup.button({
            action: {
                type: 'text',
                label: '💊Предметами первой необходимости',
                payload:{button: 'items'}
            },
            color: 'primary',
        })

    ],
    [

        Markup.button({
            action: {
            type: 'text',
                label: '💰Деньгами',
                payload:{button: 'money'}
            },
            color: 'positive',
        }),
        Markup.button({
            action: {
            type: 'text',
                label: '🙏Делами',
                payload:{button: 'volunteer'}
            },
            color: 'secondary',
        })

    ]
]
)
module.exports.contact =Markup.keyboard([
    [
        Markup.button({
            action: {
                type: 'text',
                label: '🔄Главное меню',
                payload:{button:'start'}
            },
            color: 'positive',
        })
    ],

    [

        Markup.button({
            action: {
                type: 'open_link',
                link: 'https://fond68.ru/',
                label: '🌍Наш сайт',
                // payload:{button: 'money'}
            },
        }),
        Markup.button({
            action: {
                type: 'open_link',
                label: '📗Whatsapp',
                link:'http://wa.me/79156775577',
                // payload:{button: 'volunteer'}
            },
            // color: 'secondary',
        })

    ]
]
)
