import React from 'react';
import style from './ToDoList.module.css'
import Input from './Input/Input';
import List from './List/List';


export default class ToDoList extends React.Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.wrap}>
                    <Input store={this.props.store} />
                    <List store={this.props.store} />
                </div>
            </div>
        )
    }

}