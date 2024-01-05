const mongoose = require("mongoose");

const ForumSchema = new mongoose.Schema({
            questionTitle: {type: String, required: true},
            questionBody: {type: String, required: true},
            questionTags:{type: [String], require: true},
            noOfAnswers:{type: Number, default: 0},
            upVotes:{type: Number , default: 0},
            downVotes:{type : Number, default: 0},
            userPosted: { type: String, required: true },
            userId: { type: String },
            askedOn:{ type: Date, default: Date.now,},
            answers : {type: Object},
            // answers:[{
            //     answerBody: String, 
            //     userName : String,
            //     userId: String,
            //     answeredOn:{ type: Date, default: Date.now,}
            // }]
});

const Forums = mongoose.model("Forums", ForumSchema);

module.exports = {Forums};