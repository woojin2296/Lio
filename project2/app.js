const express = require('express')
const path = require('path')

const app = express()

app
  .use(express.json())
  .use(express.urlencoded({extended: false}))

app
  .get("/", (req, res) => {
      return res.sendFile
  })