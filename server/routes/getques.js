const router = require("express").Router();
const {Forums} = require("../models/forumSchema.js");
//const id = "";
router.get("/",async(req,res)=>{
    const qid = req.cookies.getQueId;
    //console.log(qid);
    const question = await Forums.findOne({_id: qid});
    //console.log(question);
    res.send(question);
});

module.exports = router;