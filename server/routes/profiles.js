const router = require("express").Router();
const { Profile, validate } = require("../models/profile.js");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	const myname = req.body.fullName;
	const myemail = req.body.email;
	const mycontact = req.body.contact;
	const mypassword = req.body.password;
	const data ={
		fullName:myname,
		email:myemail,
		contact:mycontact,
		password:mypassword
	}
	try{
		const { error } = validate(data);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
		const profile = await Profile.findOne({ email: myemail });
		if (profile)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(mypassword, salt);

		await new Profile({ ...data, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;