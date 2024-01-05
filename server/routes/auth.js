const router = require("express").Router();
const { Profile } = require("../models/profile.js");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
	let token;
	const myemail = req.body.email;
	const mypass = req.body.password;
	const check ={
		email: myemail,
		password : mypass
	}
	try {
		const { error } = validate(check);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const profile = await Profile.findOne({ email: myemail });
		if (!profile)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			mypass,
			profile.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });
		
		token = profile.generateAuthToken(profile._id);
		//console.log(token);
		res.cookie("gettoken",token,
			{
				withCredentials: true,
				httpOnly: true,
				maxAge:2000000,
			}
		);
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;