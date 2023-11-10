const express = require('express');
const app = express();
require("dotenv/config")
app.use(express.static('public'));

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en puerto: ' + PORT);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/position', (req,res)=>{
    res.sendFile(__dirname + '/views/position.html');
});

app.get('/contactanos', (req,res)=>{
    res.sendFile(__dirname + '/views/position.html');
});