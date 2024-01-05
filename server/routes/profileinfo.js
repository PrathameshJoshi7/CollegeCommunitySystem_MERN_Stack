const router = require("express").Router();
const jwt = require('jsonwebtoken');
const { Profile } = require("../models/profile.js");
const getUserIdFromToken= require('../middleware/auth.js');

router.post("/", async (req, res) => {
    const getToken = req.cookies.gettoken;
    const fullName=req.body.fullName;
    const type=req.body.selectOption;
    const info=req.body.allValue;
    const thing= new Profile({
        fullName,type,info
    });
    //console.log(thing.info);
    try {
        const userId = getUserIdFromToken(getToken);
        //console.log(userId);
        if (userId) {
            //console.log(`User ID: ${userId}`);
            const profile = await Profile.findOne({ _id: userId });
            if (profile){
                profile.fullName = fullName;
                profile.type = type;
                profile.info = info;
                profile.save();
                console.log("Saved successfully");
                res.status(201).send({ message: "Submited Succesfully" });
            } else {
                console.log("Id not found...");
            }
        } else {
            console.log('Token verification failed or token has expired.');
        }     
    } catch (error) {
        console.log(error);
    }
    
});

module.exports = router;



