import React from 'react'
import style from './Input.module.css'

export default class Input extends React.Component{

    sendTask = event => {
        event.preventDefault();
        let inputText = event.target.inputTask.value;
        
        if(inputText.replace(/ /g,'') !== "") 
        {
            this.props.updateData(inputText);
            event.target.inputTask.value = "";
        }
        
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.sendTask}>
                    <input className={style.input} autoComplete="off" type="text" name="inputTask" id="inputTask" placeholder="Add new Task"/>
                </form>
            </div>
        )
    }

}