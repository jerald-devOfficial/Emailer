import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form"; // to just name the reducer
import authReducer from "./authReducer";
import surveyReducer from "./surveysReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveyReducer,
});
