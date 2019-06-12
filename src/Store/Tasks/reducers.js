import {
    ACTION_ADD_TASK, ACTION_FINISH_TASK, ACTION_REMOVE_TASK, ACTION_EDIT_TASK,
    ACTION_MOVE_TASK, ACTION_REMOVE_FINISH_TASK
} from './actions'

const initialState = {
    taskInProgress: [],
    taskFinished: [],
    isTaskEdit: { state: false, id: null }
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_ADD_TASK:
            console.log(action)
            let arr = [...state.taskInProgress];
            arr.push(action.payload);
            return { ...state, taskInProgress: arr }

        case ACTION_FINISH_TASK:
            console.log(action)
            let finishArr = [...state.taskFinished];
            finishArr.push(state.taskInProgress[action.id]);
            state.taskInProgress.splice(action.id, 1);
            return { ...state, taskFinished: finishArr }
        case ACTION_REMOVE_TASK:
            console.log(action)
            let newArr = [...state.taskInProgress];
            newArr.splice(action.id, 1);
            return { ...state, taskInProgress: newArr }
        case ACTION_EDIT_TASK:
            console.log(action)
            let newArrEdit = [...state.taskInProgress];
            newArrEdit[action.id] = action.newTask;
            return { ...state, taskInProgress: newArrEdit }
        case ACTION_MOVE_TASK:
            console.log(action)
            let newArrBeforeMove = [...state.taskInProgress];
            let temp = newArrBeforeMove[action.id];
            newArrBeforeMove.splice(action.id, 1);
            newArrBeforeMove.unshift(temp);
            return { ...state, taskInProgress: newArrBeforeMove }

        case ACTION_REMOVE_FINISH_TASK:
            console.log(action)
            let finishArrAfterRemove = [...state.taskFinished];
            finishArrAfterRemove.splice(action.id, 1);
            return { ...state, taskFinished: finishArrAfterRemove }
        default:
    }
    return state;
};