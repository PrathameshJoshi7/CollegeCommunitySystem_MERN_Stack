const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    questionId: {type: String, required: true},
	answerBody: {type: String, required: true}, 
    userName : {type: String, required: true},
    userId: {type: String, required: true},
    answeredOn:{ type: Date, default: Date.now,}
});

const Comment = mongoose.model("comment", commentSchema);

module.exports={Comment};