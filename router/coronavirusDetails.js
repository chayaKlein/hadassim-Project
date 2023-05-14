const express=require('express');
const router=express.Router();
const controllerDetails=require('../controller/coronavirusDetails');

router.get("/",controllerDetails.get);
router.get("/:id",controllerDetails.getById);
router.post("/",controllerDetails.addDetails);

module.exports=router;