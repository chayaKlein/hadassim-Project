const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/coronavirus";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = url;
db.member = require("./member.model");
db.coronavirusDetails=require("./coronavirusDetails.model");

module.exports = db;
