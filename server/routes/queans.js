const router = require("express").Router();

const {Profile} = require("../models/profile.js");

router.get("/",async(req,res)=>{
    const teacher= await Profile.find({type:'Teacher'});
    //console.log(teacher[0].fullName);
    //console.log(teacher[1].fullName);
    const arr= teacher.map((item)=>{
        return item.fullName;
    });
    res.send(arr);
});

module.exports = router;