const router = require("express").Router();

const {Question} = require("../models/quenans.js");
//const getUserIdFromToken= require('../middleware/auth.js');

router.post("/", async(req, res) => {
    const id = req.body.queryId;
    const ans = req.body.answer;
    //console.log(id);
    //console.log(ans);
    try {
        const que = await Question.findOne({_id: id});
        if(que){
            que.answer = ans;
            que.save();
            res.status(201).send({ message: "Answer send successfully" });
        }
    } catch (error) {
        res.status(500).send({ message: "Answer send unsuccessfully" });
    }
});

module.exports = router;