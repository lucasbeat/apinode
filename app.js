const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("seja bem vindo ao app")
})
app.get("/sobre", function (req, res) {
    res.send("minha pagina sobre");
})
app.get("/blog", function (req, res) {
    res.send("pagina blog");
})


app.listen(8081, () => {
    console.log("servidor rodando");
});