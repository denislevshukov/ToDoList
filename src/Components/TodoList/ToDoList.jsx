import React from 'react';
import style from './ToDoList.module.css'
import Input from './Input/Input';
import List from './List/List';


export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            finishedTasks: []
        };
    }

    updateData = (value) => {
        this.setState(() => {
            this.state.tasks.push(value);
        });
        this.forceUpdate();
    }

    updateFinishData = (value) => {
        this.setState(() => {
            this.state.finishedTasks.push(this.state.tasks[value]);
            this.state.tasks.splice(value, 1);
        });
        this.forceUpdate();
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.wrap}>
                    <Input updateData={this.updateData} />
                    <List tasks={this.state.tasks} finishedTasks={this.state.finishedTasks} updateFinishData={this.updateFinishData} />
                </div>
            </div>
        )
    }

}