const router = require("express").Router();
const jwt = require('jsonwebtoken');

const {Profile} = require("../models/profile.js");
const getUserIdFromToken= require('../middleware/auth.js');

router.get("/",async(req,res)=>{
    //console.log("helllo");
    const getToken = req.cookies.gettoken;
    const userId = getUserIdFromToken(getToken);
    const types= await Profile.findOne({_id: userId});
    console.log(types.type);
    res.send(types.type);
});

module.exports = router;