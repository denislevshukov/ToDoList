import React from 'react'
import style from './FinishedTask.module.css'

export default class FinishedTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseClick = this.handleMouseClick.bind(this);
    }

    handleMouseClick() {
        this.props.store.removefinishTask(this.props.task.key - 0)
    }
    render() {
        return (
            <div className={style.container}>
                <div className={style.task}>
                    <div className={style.textTask}>
                        {this.props.task.tTask}
                    </div>
                    <div>
                        <div className={style.removeIcon} onClick={this.handleMouseClick}></div>
                    </div>
                </div>

            </div>
        )
    }
}