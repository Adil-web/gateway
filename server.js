const express = require('express')

const {ROUTES} = require("./routes");

const {setupLogging} = require("./logging");
const {setupRateLimit} = require("./ratelimit");
const {setupCreditCheck} = require("./creditcheck");
const {setupProxies} = require("./proxy");
const {setupAuth} = require("./auth");

const app = express()
const port = 3001;

app.get('/', (req, res) => res.send("It's working..."))
setupLogging(app);
setupRateLimit(app, ROUTES);
setupAuth(app, ROUTES);
setupCreditCheck(app, ROUTES);
setupProxies(app, ROUTES);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
