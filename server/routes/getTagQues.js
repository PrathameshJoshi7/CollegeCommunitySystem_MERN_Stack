const router = require("express").Router();

const {Forums} = require('../models/forumSchema'); 
//const { Comment} = require('../models/comment');
const {Comment} = require('../models/comment.js');

router.get("/",async(req,res)=>{
    const tagnm = req.cookies.getQueTag;
    
    const forum = await Forums.find({ questionTags: tagnm });
    // console.log(forum);
    const arr= forum.map((item)=>{
        return item;
    });
    //console.log(arr);
    res.send(arr);
    
});

module.exports = router;