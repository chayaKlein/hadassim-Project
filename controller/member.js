const express = require('express');
const db = require('../model');
const member = db.member;

async function getMembers(req,res) {
    try {
      const getMembers= await member.find();
      res.send(getMembers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error gettingmember' });
    }
  }

async function getById(req, res){
    try{
      const getMemberById = await member.find({"id":id});
      res.send(getMemberById);
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error getting member by id' });
    }
      
}

async function addMember(req, res) {
  try {
    const newMember = await member.create(req.body);
    res.status(201).json(newMember);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding member' });
  }
}

module.exports={getMembers,getById,addMember};