const {
  createConnection,
  insertData,
  connectionFunction,
} = require("../Database/connection");
const { player }  = require('../Models/PlayerModel');
const {Mongoose} = require('../Database/MongoosePlugin');
const cors = require('cors')

const express = require("express");
const PORT = 1000;

const app = express();
app.use(cors());
app.post("/addName", express.json(), async (req, res) => {

  const  {name, team , ranking}  = req.body;
  const x = new player({name,team ,ranking});
  const query = await x.save();
 res.status(200).send({query});


});


app.post("/update", express.json(), async (req, res) => {
  
  const query = await player.updateOne({name:"Giggs"},{$set:{name:"Scholes"}},{returnOriginal:false});
 res.status(200).send({query});


});
app.get("/showAll", express.json(), async (req, res) => {
  
  const query = await player.find();
 res.status(200).send({query});


});

app.get("/showbyName", express.json(), async (req, res) => {
  
  const query = await player.findOne({"name":"pogba"});
 res.status(200).send({query});


});

app.post("/delete", express.json(), async (req, res) => {
  
  const query = await player.deleteOne({"name":"pogba"});
 res.status(200).send({query});


});

app.listen(PORT, function () {
  console.info(`Service started successfully. Listening on port ${PORT}`);
});
