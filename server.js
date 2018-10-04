const express = require("express");
const { join, resolve } = require("path");
const app = express();
app.use((req, _, next) => { console.log(`%s %s`, req.method, req.url); next(); });
app.get("/node_modules/*", (req, res) => {
    return res.sendFile(join(__dirname, req.path));
});
app.get("/*", express.static(join(__dirname, "public")));
const server = app.listen(parseInt(process.env.PORT) || 5001, (err) => {
    if (err) {
        console.err(err);
        process.exit(-1);
    }
    const { port, address, family } = server.address();
    console.log("Express listening on %s://%s:%s", family, address, port);
})