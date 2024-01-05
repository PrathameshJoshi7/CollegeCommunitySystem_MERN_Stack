const router = require("express").Router();

const getUserIdFromToken= require('../middleware/auth.js');
const { Profile } = require("../models/profile.js");
//const {Forums} = require('../models/forumSchema'); 
const {Comment} = require('../models/comment.js');
router.post("/", async (req, res) => {
    try {
        const getToken = req.cookies.gettoken;
        const userId = getUserIdFromToken(getToken);
        const Cbody = req.body.answerBody;
        const qid = req.cookies.getQueId;
        const profile = await Profile.findOne({ _id: userId });
        const userNm = profile.fullName;    
        const ans = {
            questionId: qid,
            answerBody: Cbody,
            userName: userNm,
            userId: userId,
        };
        //console.log(answers);
         //const comment = await Comment.findOne({ _id: qid });
        //if (comment){
            await new Comment({ ...ans}).save();
            console.log("Comment added..");
		//res.status(201).send({ message: "User created successfully" });
            
        // } else {
        //     console.log("Id not found...");
        // }
    } catch (error) {
        console.log("error");
    }
});

module.exports = router;
