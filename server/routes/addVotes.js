const router = require("express").Router();

const {Forums} = require('../models/forumSchema'); 

router.post("/", async (req, res) => {
    try {
        const upVotes = req.body.upVotes;
        const downVotes = req.body.downVotes;
        const qid = req.cookies.getQueId;
        const forum = await Forums.findOne({ _id: qid });
        if (forum){
            forum.upVotes = upVotes;
            forum.downVotes = downVotes;
            forum.save();
            console.log("Saved successfully");
            
        } else {
            console.log("Id not found...");
        }
    } catch (error) {
        console.log("error");
    }
});

module.exports = router;
