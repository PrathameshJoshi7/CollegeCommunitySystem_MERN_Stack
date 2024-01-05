const router = require("express").Router();
const jwt = require('jsonwebtoken');

const {Forums} = require('../models/forumSchema'); 
const getUserIdFromToken= require('../middleware/auth.js');
const {Profile} = require('../models/profile.js');

router.post("/",async(req,res)=>{
    const getToken = req.cookies.gettoken;
    const userId = getUserIdFromToken(getToken);

    const questionTitle= req.body.questionTitle;
    const questionBody = req.body.questionBody;
    const questionTags=req.body.questionTags;
    // console.log("shravani");
    // console.log(questionTitle);
    // console.log(questionBody);
    // console.log(questionTags);
    //console.log(data);
    try {
        const profile = await Profile.findOne({_id: userId});
        const userNm = profile.fullName;
        const data ={
            questionTitle: questionTitle, 
            questionBody: questionBody,
            questionTags: questionTags,
            userPosted: userNm,
            userId: userId,
        };
        await new Forums({...data}).save();
        console.log("hello");
        res.status(201).send({message:"Posted a question successfully"});
    } catch (error) {
        res.status(405).send({message:"Can't post a question successfully"});
    }
});

module.exports = router;