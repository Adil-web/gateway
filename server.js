require('dotenv').config()

const express = require('express')

const {ROUTES} = require("./routes");
const {setupLogging} = require("./logging");
const {setupRateLimit} = require("./ratelimit");
const {setupCreditCheck} = require("./creditcheck");
const {setupProxies} = require("./proxy");
const {setupAuth} = require("./auth");

const app = express()
const port = process.env.PORT || 3001;
setupLogging(app);
setupRateLimit(app, ROUTES);
setupAuth(app, ROUTES);
setupCreditCheck(app, ROUTES);
setupProxies(app, ROUTES);

app.get('/', (req, res) => res.end(`Server started on ${PORT}...`))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
