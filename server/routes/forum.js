const router = require("express").Router();

const {Forums} = require('../models/forumSchema'); 

router.get("/", async (req, res) => {
    try {
        const quetions = await Forums.find({});
        const arr= quetions.map((item)=>{
            return item;
        });
        //console.log(arr);
        res.send(arr);
    } catch (error) {
        console.log("error");
    }
});

module.exports = router;
