import {
    ACTION_OPEN_MENU, ACTION_CLOSE_MENU, ACTION_OPEN_EDIT_MENU,
    ACTION_CLOSE_EDIT_MENU
} from './actions'

const initialState = {
    isHovering: { state: false, id: null },
    isClick: { state: false, id: null },
    isOpenEditMenu: { state: false, id: null }
};

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_OPEN_MENU:
            console.log(action)
            return { ...state, isClick: { state: true, id: action.id } }
        case ACTION_CLOSE_MENU:
            console.log(action)
            return { ...state, isClick: { state: false, id: action.id } }
        case ACTION_OPEN_EDIT_MENU:
            console.log(action)
            return { ...state, isOpenEditMenu: { state: true, id: action.id } }
        case ACTION_CLOSE_EDIT_MENU:
            console.log(action)
            return { ...state, isOpenEditMenu: { state: false, id: null } }
        default:
    }
    return state;
};