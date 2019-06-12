export const ACTION_ADD_TASK = 'ACTION_ADD_TASK';
export const ACTION_FINISH_TASK = 'ACTION_FINISH_TASK';
export const ACTION_REMOVE_TASK = 'ACTION_REMOVE_TASK';
export const ACTION_EDIT_TASK = 'ACTION_EDIT_TASK';
export const ACTION_MOVE_TASK = 'ACTION_MOVE_TASK';
export const ACTION_REMOVE_FINISH_TASK = 'ACTION_REMOVE_FINISH_TASK';


export const addTask = (newTask) => {

    return {
        type: ACTION_ADD_TASK,
        payload: newTask
    }
}

export const finishTask = (id) => {
    return {
        type: ACTION_FINISH_TASK,
        id: id
    }
}

export const removeTask = (id) => {
    return {
        type: ACTION_REMOVE_TASK,
        id: id
    }
}

export const editTask = (newTask, id) => {
    return {
        type: ACTION_EDIT_TASK,
        newTask: newTask,
        id: id
    }
}

export const moveTask = (id) => {
    return {
        type: ACTION_MOVE_TASK,
        id: id
    }
}

export const removefinishTask = (id) => {
    return {
        type: ACTION_REMOVE_FINISH_TASK,
        id: id
    }
}