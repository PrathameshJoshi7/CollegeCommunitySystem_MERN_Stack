import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/college",
});

// export const postQuestion = async(questionData) => {
//       await axios.post("http://localhost:3000/college/Ask", 
//         {
//           questionTitle: questionData.questionTitle, 
//           questionBody: questionData.questionBody,
//           questionTags: questionData.questionTags
//         });
// }        
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value) =>
  API.patch(`/questions/vote/${id}`, { value });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
  API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const getAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

