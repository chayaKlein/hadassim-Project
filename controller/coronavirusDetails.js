const express = require('express');
const db = require('../model');
const coronavirusDetails =db.coronavirusDetails;

async function get(req,res) {
    try {
      const getDetails= await coronavirusDetails.find();
      console.log(getDetails);
      res.send(getDetails);
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error getting details' });
    }
}

async function getById(req, res){
  try{
    const getDetailsById = await coronavirusDetails.find({"id":id});
    res.send(getDetailsById);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting details by id' });
  }
    
}

async function addDetails(req, res) {
    try {
      const newDetails = await coronavirusDetails.create(req.body);
      res.status(201).json(newDetails);
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding details' });
    }
  }

module.exports={get,getById,addDetails};


