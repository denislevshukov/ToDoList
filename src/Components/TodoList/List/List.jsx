import React from 'react'
import Task from './task/Task';
import style from './List.module.css'
import FinishedTask from './FinishedTask/FinishedTask';
import EditInput from './EditInput/EditInput';



export default function List(props) {

    const list = props.store.taskInProgress.map((item, index) => {
        let objTask = {
            key: index,
            tTask: item
        }
        return (
            <div>
                {props.store.isOpenEditMenu.state && (props.store.isOpenEditMenu.id === index) ?
                    <EditInput key={index} store={props.store} id={index} /> :
                    <Task key={index} store={props.store} task={objTask} />}
            </div>)
    });

    const finishedList = props.store.taskFinished.map((item, index) => {
        let objTask = {
            key: index,
            tTask: item
        }
        return (
            <div>
                <FinishedTask key={index} store={props.store} task={objTask} />
            </div>

        )
    });

    return (
        <div className={style.container}>
            {list}
            {props.store.taskFinished.length > 0 && <div className={style.FinishedTask} >
                <p>
                    Finished Tasks
                </p>
            </div>}

            {finishedList}
        </div>
    )
}
