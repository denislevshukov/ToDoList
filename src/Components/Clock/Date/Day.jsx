import React from 'react';
import style from './Day.module.css'

export default class Day extends React.Component{
    render(){
        return(
            <div className={style.day}>
                {`${this.props.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })}`}
            </div>
        )
    }
}