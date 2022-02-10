const express = require('express')
const path = require('path')

const clientApp = path.join(__dirname, "client/build");

const app = express()

app.listen("80", (req, res) => {
  console.log("start server")
})

app
  .use(express.json())
  .use(express.urlencoded({extended: false}))
  .use(express.static(path.join(__dirname, "public")))

app
  .get("/", (req, res) => {
    return res.render(path.join(clientApp, "index.ejs"), { link: "main" });
  })
  .get("/Room", (req, res) => {
    return res.render(path.join(clientApp, "index.ejs"), { link: "Room" });
  })
  .get("/Intro", (req, res) => {
    return res.render(path.join(clientApp, "index.ejs"), { link: "Intro" });
  })
  .get("/Search", (req, res) => {
    return res.render(path.join(clientApp, "index.ejs"), { link: "Search" });
  })
  .get("/WishList", (req, res) => {
    return res.render(path.join(clientApp, "index.ejs"), { link: "WishList" });
  })


app
  .use((req, res, next) => {
    next();
  })
  .use((err, req, res, next) => {
    console.error(err);
    return res.status(err.status || 500).json({ result: "error" });
  });

module.exports = app;