const router = require("express").Router();
const jwt = require('jsonwebtoken');

const {Profile} = require("../models/profile.js");
const {Question} = require("../models/quenans.js");
const getUserIdFromToken= require('../middleware/auth.js');

router.get("/",async(req,res)=>{
    try {
        const getToken=req.cookies.gettoken;    
        const userId = getUserIdFromToken(getToken);
        const profile = await Profile.findOne({ _id: userId});
        const tnm=profile.fullName;
        //console.log(tnm);
        const ques= await Question.find({Teachname: tnm});
        console.log(ques);
        const arr= ques.map((item,index)=>{
            return item;
        });
        res.send(arr);   
    } catch (error) {
        console.log(error);
    } 
});

module.exports = router;