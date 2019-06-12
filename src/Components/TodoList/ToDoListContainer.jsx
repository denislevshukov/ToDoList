import React from 'react';
import { connect } from 'react-redux'
import { addTask, finishTask, removeTask, editTask, moveTask, removefinishTask } from '../../Store/Tasks/actions'
import { openMenu, closeMenu, openEditMenu, closeEditMenu } from '../../Store/Menu/actions'
import ToDoList from './ToDoList';


class ToDoListContainer extends React.Component {
    render() {
        return (
            <ToDoList store={this.props} />
        )
    }
}

const putStateToProps = (state) => {
    return {
        taskInProgress: state.tasks.taskInProgress,
        taskFinished: state.tasks.taskFinished,
        isClick: state.menu.isClick,
        isOpenEditMenu: state.menu.isOpenEditMenu

    };
};

const putActionsToProps = {
    addTask,
    finishTask,
    removeTask,
    openMenu,
    closeMenu,  
    openEditMenu,
    closeEditMenu,
    editTask,
    moveTask,
    removefinishTask
};

export default connect(putStateToProps, putActionsToProps)(ToDoListContainer)