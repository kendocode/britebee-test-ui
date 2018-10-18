import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import itemReducer from "./item";
import messageReducer from "./messages";
import projectReducer from "./project"

export default combineReducers({
  auth,
  form: formReducer,
  item: itemReducer,
  message: messageReducer,
  project: projectReducer
});
