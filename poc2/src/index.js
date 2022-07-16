const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
require("../db/data.js");
require('../model/model.js');
const rout = require('../routes/routes.js')
const port = process.env.PORT || 4000;
const staticFile = path.join(__dirname,'../static_files/html/index.html');
app.use(express.static(staticFile));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',rout.router);
//app.set()
// app.use('/studentregistration',rout);


app.listen(port,()=>{
    console.log("server is online",port);
})