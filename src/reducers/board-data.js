import { FETCH_BOARD_DATA_SUCCESS, FETCH_BOARD_DATA_ERROR } from "../actions/board-data";

const initialState = {
    boardData: '',
    error: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BOARD_DATA_SUCCESS:
        return Object.assign({}, state, {
            boardData: action.data,
            error: null
        });
        case FETCH_BOARD_DATA_ERROR:
        return Object.assign({}, state, {
            error: action.error
        });
        default: 
        return state
    }
}