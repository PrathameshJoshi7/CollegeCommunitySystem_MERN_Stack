const router = require("express").Router();

router.post("/",async(req,res)=>{
    ForumId = req.body.qid;
    //console.log(ForumId);
});

module.exports = router;
