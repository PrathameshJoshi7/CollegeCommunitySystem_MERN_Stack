const router = require("express").Router();

const getUserIdFromToken= require('../middleware/auth.js');
const { Profile } = require("../models/profile.js");

router.get("/", async (req,res) => {
    const gettoken = req.cookies.gettoken;
    //console.log(gettoken);
    const userId = getUserIdFromToken(gettoken);
    const profile = await Profile.findOne({ _id: userId });
    //console.log(profile);
    res.send(profile);
});

module.exports = router;
