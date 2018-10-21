import {
  createItem,
  updateItem,
  destroyItem
} from "../lib/itemServices";
import { showMessage } from "./messages";

const initState = {
  items: [],
  currentItem: ""
};

const CURRENT_UPDATE = "CURRENT_UPDATE";
export const ITEM_ADD = "ITEM_ADD";
export const ITEMS_LOAD = "ITEMS_LOAD";
export const ITEM_REPLACE = "ITEM_REPLACE";
export const ITEM_REMOVE = "ITEM_REMOVE";

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });
export const loadItems = items => ({ type: ITEMS_LOAD, payload: items });
export const addItem = item => ({ type: ITEM_ADD, payload: item });
export const replaceItem = item => ({ type: ITEM_REPLACE, payload: item });
export const removeItem = id => ({ type: ITEM_REMOVE, payload: id });

/* export const fetchItems = (projectId) => {
  return (dispatch) => {
    dispatch(showMessage("Loading Item List..."));
    //getItems returns promise
    getItems(projectId).then(items => dispatch(loadItems(items)));
  };
}; */

export const fetchedItems = (items) => {
  return(dispatch) => {
    dispatch(loadItems(items));
  }
};


export const saveItem = (description, projectId) => {
  return dispatch => {
    dispatch(showMessage("Saving Item"));
    createItem(description, projectId)
      .then(response => dispatch(addItem(response)))
      .catch(error => console.log(error));
  };
};

export const toggleItem = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage("Saving item update..."));
    const { items } = getState().item;
    const item = items.find(t => t.id === id);
    const toggled = { ...item, isComplete: !item.isComplete };
    updateItem(toggled)
      .then(response => dispatch(replaceItem(response)))
      .catch(error => console.log(error));
  };
};

export const deleteItem = (id, project_id) => {
  return dispatch => {
    dispatch(showMessage("Removing item..."));
    destroyItem(id, project_id)
      .then(() => dispatch(removeItem(id, project_id)))
      .catch(error => console.log(error));
  };
};

/* export const getVisibleItems = (items, filter) => {
  switch(filter) {
    case 'active':
    return items.filter(t => !t.isComplete)
    case 'complete':
    return items.filter(t => t.isComplete)
    default: 
    return items
  }
} */

// is clearing currentItem field here a side effect, or ok since
// that is the state change that needs to happen?
export default (state = initState, action) => {
  switch (action.type) {
    case ITEM_ADD:
      return {
        ...state,
        currentItem: "",
        items: state.items.concat(action.payload)
      };
    case CURRENT_UPDATE:
      return { ...state, currentItem: action.payload };
    case ITEMS_LOAD:
      return { ...state, items: action.payload };
    case ITEM_REPLACE:
      return {
        ...state,
        items: state.items.map(
          t => (t.id === action.payload.id ? action.payload : t)
        )
      };
    case ITEM_REMOVE:
      return {
        ...state,
        items: state.items.filter(t => t.id !== action.payload)
      };
    default:
      return state;
  }
};
