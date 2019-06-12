import { combineReducers } from 'redux'
import { tasksReducer } from './Tasks/reducers'
import { menuReducer } from './Menu/reducers'


export default combineReducers({
    tasks: tasksReducer,
    menu: menuReducer
});
