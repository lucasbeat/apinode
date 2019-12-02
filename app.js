const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html")
})
app.get("/sobre", function (req, res) {
    res.sendFile(__dirname + "/html/sobre.html");
})
app.get("/blog", function (req, res) {
    res.send("pagina blog");
})


app.listen(8081, () => console.log("servidor rodando"))
