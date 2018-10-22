import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
//import messageReducer from "./messages";
import projectReducer from "./project"


 export default combineReducers({
  auth,
  form: formReducer,
  project: projectReducer
});
 