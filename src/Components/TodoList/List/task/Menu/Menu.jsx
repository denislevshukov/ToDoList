import React from 'react'
import style from './Menu.module.css'

export default function Menu(props) {
    return (
        <div className={style.container}>
            <div title="Remove this task" id={props.id} onClick={(event) => {
                props.store.removeTask(props.id);
                props.store.closeMenu(props.id);
            }} className={style.settingsBlock + " " + style.remove} >

            </div>

            <div title="Change this task" id={props.id} onClick={(event) => {

                props.store.openEditMenu(props.id)
            }} className={style.settingsBlock + " " + style.edit}>

            </div>


            <div title="Move this task in start position" className={style.settingsBlock + " " + style.move} onClick={(event) => {
                props.store.moveTask(props.id)
                props.store.closeMenu(props.id);
            }}>

            </div>
        </div>
    )
} 