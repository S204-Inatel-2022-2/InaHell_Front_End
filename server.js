const express = require("express");
const path = require("path");

const app = express();

app.get("/*", (req, res) => { //Responsible for keeping it an actual SPA
    res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(process.env.PORT || 8080, () => console.log("Server running..."))