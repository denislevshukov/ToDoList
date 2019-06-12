import React from 'react'
import style from './Menu.module.css'

export default function Menu(props) {

    return (
        <div className={style.container}>
            <div className={style.settingsBlock}>
                Edit Task
            </div>
            <div className={style.settingsBlock}>
                Remove Task
            </div>
            <div className={style.settingsBlock}>
                Move in start
            </div>
        </div>
    )
} 