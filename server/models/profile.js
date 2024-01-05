const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const profileSchema = new mongoose.Schema({
	fullName: { type: String, required: true },
	email: { type: String, required: true , unique:true},
	contact: { type: String, required: true },
	password: { type: String, required: true },
	type: {type: String},
	info : {type: Object},
	created_at: { type: Date, default: Date.now,},
});

profileSchema.methods.generateAuthToken = (currId) => {
	try{
		const token = jwt.sign({ _id : currId}, process.env.JWTPRIVATEKEY, {
			expiresIn: "7d",
		});
		return token;
	}
	catch(err){
		console.log('err :>> ', err);
	}
};

const Profile = mongoose.model("profiles", profileSchema);


const validate = (rValue) => {
	const schema = Joi.object({
		fullName: Joi.string().required().label("fullName"),
		email: Joi.string().email().required().label("email"),
        contact: Joi.string().required().label("contact"),
		password: passwordComplexity().required().label("password"),
	});
	return schema.validate(rValue);
};

module.exports = { Profile, validate};




