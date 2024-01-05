const router = require("express").Router();
const jwt = require('jsonwebtoken');

const {Profile} = require("../models/profile.js");
const {Question} = require("../models/quenans.js");
const getUserIdFromToken= require('../middleware/auth.js');

router.post("/", async(req, res) => {
    const getToken = req.cookies.gettoken;
    const Tnm= req.body.Teachname;
    const qry=req.body.query;
    // const file=req.body.file;
    const studid = getUserIdFromToken(getToken);
    const stud = await Profile.findOne({ _id :studid});
    const studnm = stud.fullName;
    const qadata={
        Teachname: Tnm,
        stud_nm: studnm,
        query: qry,
        answer: '',
        //file: file
    };
    try {
        await new Question({...qadata}).save();
        res.status(201).send({ message: "Question send successfully" });
    } catch (error) {
        res.status(500).send({ message: "Question send unsuccessfully" });
    }
});

module.exports = router;