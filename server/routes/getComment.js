const router = require("express").Router();

const {Forums} = require('../models/forumSchema'); 
//const { Comment} = require('../models/comment');
const {Comment} = require('../models/comment.js');

router.get("/",async(req,res)=>{
    const qid = req.cookies.getQueId;
    //const forum = await Forums.findOne({ _id: qid });
    const comment = await Comment.find({ questionId: qid });

    //const comment = forum.answers;
    //console.log(comment);
    const arr= comment.map((item)=>{
        return item;
    });
    //console.log(arr);
    res.send(arr);
});

module.exports = router;