import {
  getProjects,
  createProject,
  destroyProject,
  createItem,
  updateItem,
  destroyItem
} from "../lib/apiServices";
//import showMessage from "./messages";

const initState = {
  projects: [],
  items: [],
  currentProject: "",
  currentItem: ""
};

// actions; action creators; associated functions

export const PROJECTS_LOAD = "PROJECTS_LOAD";
export const loadProjects = projects => ({
  type: PROJECTS_LOAD,
  payload: projects
});
export const fetchProjects = () => {
  return dispatch => {
    //    dispatch(showMessage("Loading Project List..."));
    getProjects().then(projects => dispatch(loadProjects(projects)));
  };
};

const CURRENT_PROJECT_UPDATE = "CURRENT_PROJECT_UPDATE";
export const updateCurrentProject = val => ({
  type: CURRENT_PROJECT_UPDATE,
  payload: val
});

export const PROJECT_ADD = "PROJECT_ADD";
export const addProject = project => ({ type: PROJECT_ADD, payload: project });
export const saveProject = title => {
  return dispatch => {
    //    dispatch(showMessage("Saving Project"));
    createProject(title)
      .then(response => dispatch(addProject(response)))
      .catch(error => console.log(error));
  };
};

export const PROJECT_REPLACE = "PROJECT_REPLACE";
export const replaceProject = project => ({
  type: PROJECT_REPLACE,
  payload: project
});

export const PROJECT_REMOVE = "PROJECT_REMOVE";
export const removeProject = id => ({ type: PROJECT_REMOVE, payload: id });
export const deleteProject = id => {
  return dispatch => {
    //    dispatch(showMessage("Removing project..."));
    destroyProject(id)
      .then(() => dispatch(removeProject(id)))
      .catch(error => console.log(error));
  };
};

const ITEMS_LOAD = "ITEMS_LOAD";
export const loadItems = items => ({ type: ITEMS_LOAD, payload: items });
export const setProjectItems = (project_id) => (dispatch, getState) => {
  // screw the linter -- better to use == here vs ===, otherwise you have
  // to recast the integer to string or vice versa, which you shouldn't be
  // forced to do if you're not using TypeScript. Truthy works. Quack quack.
  const items = getState().project.projects.find(p => p.id == project_id).items
      dispatch(loadItems(items))
      return items
  }


const CURRENT_ITEM_UPDATE = "CURRENT_ITEM_UPDATE";
export const updateCurrentItem = val => ({
  type: CURRENT_ITEM_UPDATE,
  payload: val
});

export const ITEM_ADD = "ITEM_ADD";
export const addItem = item => ({ type: ITEM_ADD, payload: item });
export const saveItem = (description, projectId) => {
  return dispatch => {
    //    dispatch(showMessage("Saving Item"));
    createItem(description, projectId)
      .then(response => dispatch(addItem(response)))
      .catch(error => console.log(error));
  };
};

export const ITEM_REPLACE = "ITEM_REPLACE";
export const replaceItem = item => ({ type: ITEM_REPLACE, payload: item });
export const toggleItem = id => {
  return (dispatch, getState) => {
    //    dispatch(showMessage("Saving item update..."));
    const { items } = getState().item;
    const item = items.find(t => t.id === id);
    const toggled = { ...item, isComplete: !item.isComplete };
    updateItem(toggled)
      .then(response => dispatch(replaceItem(response)))
      .catch(error => console.log(error));
  };
};

export const ITEM_REMOVE = "ITEM_REMOVE";
export const removeItem = id => ({ type: ITEM_REMOVE, payload: id });
export const deleteItem = (id, project_id) => {
  return dispatch => {
    //    dispatch(showMessage("Removing item..."));
    destroyItem(id, project_id)
      .then(() => dispatch(removeItem(id, project_id)))
      .catch(error => console.log(error));
  };
};

// reducers
export default (state = initState, action) => {
  switch (action.type) {
    case PROJECT_ADD:
      return {
        ...state,
        currentProject: "",
        projects: state.projects.concat(action.payload)
      };
    case CURRENT_PROJECT_UPDATE:
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
    case ITEMS_LOAD:
      return {
        ...state,
        items: action.payload
      };
    case ITEM_ADD:
      return {
        ...state,
        currentItem: "",
        projects: state.projects
          .find(p => p.id === action.payload.project_id)
          .concat(action.payload)
        //items: state.items.concat(action.payload)
      };
    case CURRENT_ITEM_UPDATE:
      return { ...state, currentItem: action.payload };
    case ITEM_REPLACE:
      return {
        ...state,
        projects: state.projects
          .find(p => p.id === action.payload.project_id)
          .items.map(i => (i.id === action.payload.id ? action.payload : i))
        /* items: state.items.map(
          i => (i.id === action.payload.id ? action.payload : i)
        ) */
      };
    case ITEM_REMOVE:
      return {
        ...state,
        projects: state.projects
          .find(p => p.id === action.payload.project_id)
          .items.filter(i => i.id !== action.payload)
        //items: state.items.filter(i => i.id !== action.payload)
      };
    default:
      return state;
  }
};
