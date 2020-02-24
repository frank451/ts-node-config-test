console.log("server 12345");

const express = require('express')
const app = express()
import "./index.ts";

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000);