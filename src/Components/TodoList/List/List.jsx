import React from 'react'
import Task from './task/Task';
import style from './List.module.css'
import FinishedTask from './FinishedTask/FinishedTask';

export default function List(props) {

    function updateData(value) {
        props.updateFinishData(value);
    }

    const list = props.tasks.map((item, index) => {
        let objTask = {
            key: index,
            tTask: item
        }
        return <Task updateData={updateData} key={index} task={objTask} />
    });

    const finishedList = props.finishedTasks.map((item, index) => {
        let objTask = {
            key: index,
            tTask: item
        }

        return <FinishedTask key={index} task={objTask} />
    });

    return (
        <div className={style.container}>
            {list}
            <div className={style.FinishedTask} ><p>
                Finished Tasks
                </p></div>
            {finishedList}


        </div>
    )
}
