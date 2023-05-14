const bodyParser = require('body-parser');
const express= require('express');
const port = 6767;
const app = express();
const db=require("./model");
const MemberRouter = require("./router/member");
const DetailsRouter = require("./router/coronavirusDetails");
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

db.mongoose.connect(db.url).then(()=>{
    console.log("connected to db");
})
.catch(err => {
    console.log("cannot connect to db", err);
    process.exit();
}) 

app.listen(port, ()=>{
    console.log("server is up port: "+port);
})           

app.use("/api/members",MemberRouter);   
app.use("/api/coronavirusDetails",DetailsRouter);   

