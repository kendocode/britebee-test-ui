import {
  getProjects,
  createProject,
  destroyProject,
  updateProject,
  createItem,
  updateItem,
  destroyItem
} from "../lib/apiServices";
//import showMessage from "./messages";

const initState = {
  projects: [],
  items: [],
  activeProjectId: 0,
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
    createProject(title)
      .then(response => dispatch(addProject(response)))
      .catch(error => console.log(error));
  };
};

export const PROJECT_PATCH = "PROJECT_PATCH";
export const patchProject = project => ({
  type: PROJECT_PATCH,
  payload: project
});
export const toggleProject = id => {
  return (dispatch, getState) => {
    const projects = getState().project.projects
    const project = projects.find(p => p.id === id);
    const toggled = { ...project, isComplete: !project.isComplete };
    updateProject(toggled.id, toggled.isComplete)
      .then(response => dispatch(patchProject(response)))
      .catch(error => console.log(error));
  };
};


export const PROJECT_REMOVE = "PROJECT_REMOVE";
export const removeProject = id => ({ type: PROJECT_REMOVE, payload: id });
export const deleteProject = id => {
  return dispatch => {
    destroyProject(id)
      .then(() => dispatch(removeProject(id)))
      .catch(error => console.log(error));
  };
};

export const ACTIVE_PROJECT_ID_SET = 'ACTIVE_PROJECT_ID_SET'
export const setActiveProjectId = id => ({ type: ACTIVE_PROJECT_ID_SET, payload: id})

const ITEMS_LOAD = "ITEMS_LOAD";
export const loadItems = items => ({ type: ITEMS_LOAD, payload: items })
export const setProjectItems = (project_id) => (dispatch, getState) => {
  // screw the linter -- better to use == here vs ===, otherwise you have
  // to recast the integer to string or vice versa, which you shouldn't be
  // forced to do if you're not using TypeScript. Truthy works. Quack quack.
  const items = getState().project.projects.find(p => p.id == project_id).items
      // set active project explicitly vs reading from loaded item for case
      // where new project created with no items -- this will always be defined
      dispatch(setActiveProjectId(project_id))
      dispatch(loadItems(items))
      return items
  }


const CURRENT_ITEM_UPDATE = "CURRENT_ITEM_UPDATE";
export const updateCurrentItem = val => ({
  type: CURRENT_ITEM_UPDATE,
  payload: val
});

export const ITEM_ADD = "ITEM_ADD";
export const addItem = item => ({ type: ITEM_ADD, payload: item })
export const saveItem = (description)=> {
  return (dispatch, getState) => {
    createItem(description, getState().project.activeProjectId)
      .then(response => dispatch(addItem(response)))
      .catch(error => console.log(error))
  }
}

export const ITEM_REPLACE = "ITEM_REPLACE";
export const replaceItem = item => ({ type: ITEM_REPLACE, payload: item });
export const toggleItem = id => {
  return (dispatch, getState) => {
    //    dispatch(showMessage("Saving item update..."));
    const items = getState().project.items;
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
    case PROJECT_PATCH:
    // payload = project
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
      case ACTIVE_PROJECT_ID_SET:
        return {
          ...state,
          activeProjectId: action.payload
        }
    case ITEMS_LOAD:
      return {
        ...state,
        items: action.payload
      };
    case ITEM_ADD:
    // payload = item
      return {
        ...state,
        currentItem: "",
        items: state.items.concat(action.payload)
      };
    case CURRENT_ITEM_UPDATE:
      return { ...state, currentItem: action.payload };
    case ITEM_REPLACE:
    // payload = item
       return {
        ...state,
        items: state.items.map(
          i => (i.id === action.payload.id ? action.payload : i)
        )
      };
    case ITEM_REMOVE:
    //payload = id
      return {
        ...state,
         items: state.items.filter(i => i.id !== action.payload)
      };
    default:
      return state;
  }
};
