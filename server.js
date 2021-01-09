const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
//const route = require('');
const app = express();
app.use(bodyParser.urlencoded({extended: false})); app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res,next)=>{
  
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
 });
app.use((req, res,next)=>{
   res.status(404).send('<h1> Page not found </h1>');
});
const server = http.createServer(app);
server.listen(process.env.PORT ||  3000);