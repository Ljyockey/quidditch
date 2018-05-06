'use strict';

const express = require('express');

const app = express();
const PORT = 8080;

app.listen(PORT);

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));