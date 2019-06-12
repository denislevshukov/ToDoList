import React from 'react'
import style from './EditInput.module.css'

export default function EditInput(props) {
    
    return (
        <div className={style.container}>
            
           <form onSubmit={
                    (event) => {
                        event.preventDefault();
                        
                        let inputText = event.target.inputTask.value;

                        if (inputText.replace(/ /g, '') !== "") {
                            props.store.editTask(inputText, props.id);
                            event.target.inputTask.value = "";
                            props.store.closeEditMenu()
                            props.store.closeMenu(props.id);
                            
                        }
                    }
                }>
                    <input className={style.input} autoComplete="off" type="text" name="inputTask" id="inputTask" 
                    placeholder="Enter task" />
                </form>
        </div>
    )
}

