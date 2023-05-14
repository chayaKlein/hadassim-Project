const express=require('express');
const router=express.Router();
const controllerMembers=require('../controller/member');

router.get("/",controllerMembers.getMembers);
router.get("/:id",controllerMembers.getById);
router.post("/",controllerMembers.addMember);

module.exports=router;