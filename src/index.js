const express = require("express");
const nunjucks = require("nunjucks");

const server = express();


// nunjucks config
nunjucks.configure("./", {
  express: server,
  noCache: true
});

//server config
server.use(express.static("public"));

// habilitar o body
server.use(express.urlencoded({ extended: true }))

const routes = require("./routes");
server.use(routes);

server.listen(3333);