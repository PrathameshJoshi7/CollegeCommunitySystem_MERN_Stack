const express = require("express");
var router = express.Router();
//const {Forums} = require("../models/forumSchema.js");


// router.post("/", async (req, res) => {
//   const postQuestionData = req.body;
//   console.log(postQuestionData)
//   const postQuestion = new Forums.post({ ...postQuestionData });
//   try {
//     await postQuestion.save();
//     res.status(200).json("Posted a question successfully");
//   } catch (error) {
//     console.log(error);
//     res.status(409).json("Couldn't post a new question");
//   }
// });

// router.get("/get", async (req, res) => {
//   try {
//     const questionList = await Forums.find().sort({ askedOn: -1 });
//     res.status(200).json(questionList);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });


// router.delete("/delete/:id", async (req, res) => {
//   const { id: _id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send("question unavailable...");
//   }

//   try {
//     await Forums.findByIdAndRemove(_id);
//     res.status(200).json({ message: "successfully deleted..." });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

// router.patch("/vote/:id", async (req, res) => {
//   const { id: _id } = req.params;
//   const { value } = req.body;
//   const userId = req.userId;

//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send("question unavailable...");
//   }

//   try {
//     const question = await Questions.findById(_id);
//     const upIndex = question.upVote.findIndex((id) => id === String(userId));
//     const downIndex = question.downVote.findIndex(
//       (id) => id === String(userId)
//     );

//     if (value === "upVote") {
//       if (downIndex !== -1) {
//         question.downVote = question.downVote.filter(
//           (id) => id !== String(userId)
//         );
//       }
//       if (upIndex === -1) {
//         question.upVote.push(userId);
//       } else {
//         question.upVote = question.upVote.filter((id) => id !== String(userId));
//       }
//     } else if (value === "downVote") {
//       if (upIndex !== -1) {
//         question.upVote = question.upVote.filter((id) => id !== String(userId));
//       }
//       if (downIndex === -1) {
//         question.downVote.push(userId);
//       } else {
//         question.downVote = question.downVote.filter(
//           (id) => id !== String(userId)
//         );
//       }
//     }
//     await Questions.findByIdAndUpdate(_id, question);
//     res.status(200).json({ message: "voted successfully..." });
//   } catch (error) {
//     res.status(404).json({ message: "id not found" });
//   }
// });

module.exports = router;