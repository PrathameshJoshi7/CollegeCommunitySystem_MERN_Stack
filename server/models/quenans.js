const mongoose = require("mongoose");

const quetionSchema = new mongoose.Schema({
	Teachname: { type: String, required: true },
	stud_nm: { type: String, required: true },
	query: { type: String, required: true },
	answer: {type: String},
	created_at: { type: Date, default: Date.now,},
	//file: {type: file,required: true },
});

const Question = mongoose.model("question", quetionSchema);

module.exports={Question};