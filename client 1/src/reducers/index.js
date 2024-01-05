import { combineReducers } from "redux";
import currentUserReducer from "./currentUser";
import questionsReducer from "./forumQuestions";
import usersReducer from "./users";

export default combineReducers({
  currentUserReducer,
  questionsReducer,
  usersReducer,
});