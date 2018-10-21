import {
    getProjects,
    createProject,
    destroyProject
  } from "../lib/projectServices";
  import { showMessage } from "./messages";
  
  const initState = {
    projects: [],
    currentProject: ""
  };
  
  const CURRENT_UPDATE = "CURRENT_UPDATE";
  export const PROJECT_ADD = "PROJECT_ADD";
  export const PROJECTS_LOAD = "PROJECTS_LOAD";
  export const PROJECT_REPLACE = "PROJECT_REPLACE";
  export const PROJECT_REMOVE = "PROJECT_REMOVE";
  
  export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });
  export const loadProjects = projects => ({ type: PROJECTS_LOAD, payload: projects });
  export const addProject = project => ({ type: PROJECT_ADD, payload: project });
  export const replaceProject = project => ({ type: PROJECT_REPLACE, payload: project });
  export const removeProject = id => ({ type: PROJECT_REMOVE, payload: id });
  
  export const fetchProjects = () => {
    return dispatch => {
      dispatch(showMessage("Loading Project List..."));
      //getProjects returns promise
      getProjects()
      .then(projects => dispatch(loadProjects(projects)))
    };
  };

  export const saveProject = title => {
    return dispatch => {
      dispatch(showMessage("Saving Project"));
      createProject(title)
        .then(response => dispatch(addProject(response)))
        .catch(error => console.log(error));
    };
  };
  
  export const deleteProject = id => {
    return dispatch => {
      dispatch(showMessage("Removing project..."));
      destroyProject(id)
        .then(() => dispatch(removeProject(id)))
        .catch(error => console.log(error));
    };
  };

  export default (state = initState, action) => {
    switch (action.type) {
      case PROJECT_ADD:
        return {
          ...state,
          currentProject: "",
          projects: state.projects.concat(action.payload)
        };
      case CURRENT_UPDATE:
        return { ...state, currentProject: action.payload };
      case PROJECTS_LOAD:
        return { ...state, projects: action.payload };
      case PROJECT_REPLACE:
        return {
          ...state,
          projects: state.projects.map(
            p => (p.id === action.payload.id ? action.payload : p)
          )
        };
      case PROJECT_REMOVE:
        return {
          ...state,
          projects: state.projects.filter(p => p.id !== action.payload)
        };
      default:
        return state;
    }
  };
  