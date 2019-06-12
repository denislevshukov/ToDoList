import React from 'react'
import style from './Input.module.css'



export default class Input extends React.Component {
    render() {
        const { addTask } = this.props.store;
        return (
            <div>
                <form onSubmit={
                    (event) => {
                        event.preventDefault();
                        let inputText = event.target.inputTask.value;

                        if (inputText.replace(/ /g, '') !== "") {
                            addTask(inputText);
                            event.target.inputTask.value = "";
                        }
                    }
                }>
                    <input className={style.input} autoComplete="off" type="text" name="inputTask" id="inputTask" placeholder="Add new Task" />
                </form>
            </div>
        )
    }

}