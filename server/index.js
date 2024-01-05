require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connection = require("./db");
const profileRoutes = require("./routes/profiles");
const authRoutes = require("./routes/auth");
const profileInfoRoutes = require("./routes/profileinfo");
const queansRoutes = require("./routes/queans");
const queanspostRoutes = require("./routes/queanspost");
const queansTeach = require("./routes/queansT");
const forumRoutes =require("./routes/forum");
const home = require("./routes/home");
const forumQuest = require("./routes/askQues");
const finalQARoutes = require("./routes/finalQA");
const answerRoutes = require("./routes/answer");
const queansTeachPost =require("./routes/queansTPost");
const getQuesRouter = require("./routes/getques");
//const getQuesPost = require("./routes/getquesPost");
const getVotesRoutes = require("./routes/addVotes");
const addCommentRoutes = require('./routes/addComment');
const getCommentRoutes = require("./routes/getComment");
const getTagsRoutes = require("./routes/getTag");
const getTagQuesRouter = require("./routes/getTagQues");
const ForumId ='';
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

// routes
app.use("/college/profile",profileRoutes);
app.use("/college/auth",authRoutes); 
app.use("/college/profileinfo",profileInfoRoutes);
app.use("/college/finalQA",finalQARoutes);
app.use("/college/queans",queansRoutes);
app.use("/college/queans",queanspostRoutes);
app.use("/college/queansTeach",queansTeach);
app.use("/college/queansTeach",queansTeachPost);
app.use("/college/answer",answerRoutes);
app.use("/college/fourums",forumRoutes);
app.use('/college/homepage',home);
app.use("/college/askquestion", forumQuest);
app.use("/college/getques",getQuesRouter);
app.use("/college/addVotes",getVotesRoutes);
app.use("/college/addComment",addCommentRoutes);
app.use("/college/getComment",getCommentRoutes);
app.use("/college/getTag",getTagsRoutes);
app.use("/college/getTagQues",getTagQuesRouter);


//app.use("/college/getques",getQuesPost);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));