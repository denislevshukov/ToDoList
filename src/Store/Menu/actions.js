export const ACTION_OPEN_MENU = 'ACTION_OPEN_MENU';
export const ACTION_CLOSE_MENU = 'ACTION_ClOSE_MENU';
export const ACTION_OPEN_EDIT_MENU = 'ACTION_OPEN_EDIT_MENU';
export const ACTION_CLOSE_EDIT_MENU = 'ACTION_CLOSE_EDIT_MENU';

export const openMenu = (id) => {
    return {
        type: ACTION_OPEN_MENU,
        id: id
    }
}

export const closeMenu = () => {
    return {
        type: ACTION_CLOSE_MENU,
    }
}

export const openEditMenu = (id) => {
    return {
        type: ACTION_OPEN_EDIT_MENU,
        id: id
    }
}

export const closeEditMenu = () => {
    return {
        type: ACTION_CLOSE_EDIT_MENU,
    }
}


