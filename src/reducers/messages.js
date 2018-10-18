import { ITEM_ADD, ITEMS_LOAD, ITEM_REPLACE, ITEM_REMOVE } from "./item";

const MESSAGE_SHOW = "MESSAGE_SHOW";

export const showMessage = msg => ({ type: MESSAGE_SHOW, payload: msg });

export default function(state = "", action) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    case ITEM_ADD:
      return "";
    case ITEMS_LOAD:
      return "";
    case ITEM_REPLACE:
      return "";
      case ITEM_REMOVE:
      return '';
    default:
      return state;
  }
}
