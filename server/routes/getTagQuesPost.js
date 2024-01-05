const router = require("express").Router();

router.post("/",async(req,res)=>{
    ForumTag = req.body.tag;
    //console.log(ForumId);
});

module.exports = router;
