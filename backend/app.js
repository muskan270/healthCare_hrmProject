const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const mongoose = require('./db.js');

const app = express();
const router = require('../backend/routes.js');
const route = require('../backend/routes.js');
app.use(bodyParser.json());

app.use(cors({origin: 'http://localhost:4200'}));
app.listen(PORT, ()=>{
    console.log(`server is started on http://localhost:${PORT}`);
})

app.use('/post',route)