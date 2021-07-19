const ROUTES = [
    {
        url: '/login',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "api/login",
            changeOrigin: true,
            pathRewrite: {
                [`^/login`]: '',
            },
        },
    },
    {
        url: '/registration',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "api/registration",
            changeOrigin: true,
            pathRewrite: {
                [`^/registration`]: '',
            },
        },
    },
    {
        url: '/todos',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "api/todos",
            changeOrigin: true,
            pathRewrite: {
                [`^/todos`]: '',
            },
        },
    },
    {
        url: '/settodos',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "api/settodos",
            changeOrigin: true,
            pathRewrite: {
                [`^/settodos`]: '',
            },
        },
    },
    {
        url: '/newUser',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "api/user",
            changeOrigin: true,
            pathRewrite: {
                [`^/newUser`]: '',
            },
        },
    },
    {
        url: '/users',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "api/users",
            changeOrigin: true,
            pathRewrite: {
                [`^/users`]: '',
            },
        },
    },
    {
        url: '/clients',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: "https://back-pgsql.herokuapp.com/a/client",
            changeOrigin: true,
            pathRewrite: {
                [`^/clients`]: '',
            },
        },
    },
    {
        url: '/client/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "a/client",
            changeOrigin: true,
            pathRewrite: {
                [`^/client`]: '',
            },
        },
    },
    {
        url: '/disconnecting-client',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "a/disconnecting-client",
            changeOrigin: true,
            pathRewrite: {
                [`^/disconnecting-client`]: '',
            },
        },
    },
    {
        url: '/disconnecting-client/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "a/disconnecting-client",
            changeOrigin: true,
            pathRewrite: {
                [`^/disconnecting-client`]: '',
            },
        },
    },
    {
        url: '/client-info',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "a/client-info",
            changeOrigin: true,
            pathRewrite: {
                [`^/client-info`]: '',
            },
        },
    },
    {
        url: '/client-info/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "a/client-info",
            changeOrigin: true,
            pathRewrite: {
                [`^/client-info`]: '',
            },
        },
    },
    {
        url: '/buyer',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "b/buyer",
            changeOrigin: true,
            pathRewrite: {
                [`^/buyer`]: '',
            },
        },
    },
    {
        url: '/buyer/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "b/buyer",
            changeOrigin: true,
            pathRewrite: {
                [`^/buyer`]: '',
            },
        },
    },
    {
        url: '/esf-eavr',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "b/esf-eavr",
            changeOrigin: true,
            pathRewrite: {
                [`^/esf-eavr`]: '',
            },
        },
    },
    {
        url: '/esf-eavr/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "b/esf-eavr",
            changeOrigin: true,
            pathRewrite: {
                [`^/esf-eavr`]: '',
            },
        },
    },
    {
        url: '/seller',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "b/seller",
            changeOrigin: true,
            pathRewrite: {
                [`^/seller`]: '',
            },
        },
    },
    {
        url: '/seller/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "b/seller",
            changeOrigin: true,
            pathRewrite: {
                [`^/seller`]: '',
            },
        },
    },
    {
        url: '/status',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "b/status",
            changeOrigin: true,
            pathRewrite: {
                [`^/status`]: '',
            },
        },
    },
    {
        url: '/status/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "b/status",
            changeOrigin: true,
            pathRewrite: {
                [`^/status`]: '',
            },
        },
    },
    {
        url: '/declared-income',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "c/declared-income",
            changeOrigin: true,
            pathRewrite: {
                [`^/declared-income`]: '',
            },
        },
    },
    {
        url: '/declared-income/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "c/declared-income",
            changeOrigin: true,
            pathRewrite: {
                [`^/declared-income`]: '',
            },
        },
    },
    {
        url: '/declared-income-confirmation',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "c/declared-income-confirmation",
            changeOrigin: true,
            pathRewrite: {
                [`^/declared-income-confirmation`]: '',
            },
        },
    },
    {
        url: '/declared-income-confirmation/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "c/declared-income-confirmation",
            changeOrigin: true,
            pathRewrite: {
                [`^/declared-income-confirmation`]: '',
            },
        },
    },
    {
        url: '/paying-taxes/',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "c/paying-taxes",
            changeOrigin: true,
            pathRewrite: {
                [`^/paying-taxes`]: '',
            },
        },
    },
    {
        url: '/paying-taxes/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "c/paying-taxes",
            changeOrigin: true,
            pathRewrite: {
                [`^/paying-taxes`]: '',
            },
        },
    },
    {
        url: '/paying-taxes-confirmation/',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "c/paying-taxes-confirmation",
            changeOrigin: true,
            pathRewrite: {
                [`^/paying-taxes-confirmation`]: '',
            },
        },
    },
    {
        url: '/paying-taxes-confirmation/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "c/paying-taxes-confirmation",
            changeOrigin: true,
            pathRewrite: {
                [`^/paying-taxes-confirmation`]: '',
            },
        },
    },
    {
        url: '/status-tax-reporting/',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "c/status-tax-reporting",
            changeOrigin: true,
            pathRewrite: {
                [`^/status-tax-reporting`]: '',
            },
        },
    },
    {
        url: '/status-tax-reporting/:id',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000,
            max: 1
        },
        proxy: {
            target: process.env.BASE_URL + "c/status-tax-reporting",
            changeOrigin: true,
            pathRewrite: {
                [`^/status-tax-reporting`]: '',
            },
        },
    },
]

exports.ROUTES = ROUTES;
