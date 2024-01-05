const router = require("express").Router();
const jwt = require('jsonwebtoken');

const {Question} = require("../models/quenans.js");
const getUserIdFromToken= require('../middleware/auth.js');
const {Profile} = require("../models/profile.js");

router.get("/",async(req,res)=>{
    const getToken=req.cookies.gettoken;    
    const userId = getUserIdFromToken(getToken);
    const profile = await Profile.findOne({_id: userId});
    //console.log(profile);
    const nm=profile.fullName;
    //console.log(nm);
    const answer= await Question.find({stud_nm : nm});
    //console.log(answer);
    const arr= answer.map((item)=>{
        return item;
    });
    //console.log(arr);
    res.send(arr);
});

module.exports = router;