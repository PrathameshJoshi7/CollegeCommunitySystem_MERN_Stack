const router = require("express").Router();

const {Forums} = require('../models/forumSchema'); 
//const { Comment} = require('../models/comment');
//const {Comment} = require('../models/comment.js');

router.get("/",async(req,res)=>{
    const forum = await Forums.find();
    const tags= forum.map((tag,index)=>{
        return forum[index].questionTags;
    });
    //onsole.log(tags)
    const finalTag=[...new Set(tags.flat())];
    //console.log(finalTag);
    const arr= finalTag.map((item)=>{
        return item;
    });
    //console.log(arr);
    res.send(arr);
});

module.exports = router;