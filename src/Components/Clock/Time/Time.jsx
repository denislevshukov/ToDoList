import React from 'react';
import style from './Time.module.css'

export default class Time extends React.Component{
    render(){
        return(
            <div className = {style.time}>
                {`
                ${this.props.date.getHours()   < 10 ? '0' + this.props.date.getHours(): this.props.date.getHours()} : 
                ${this.props.date.getMinutes() < 10 ? '0' + this.props.date.getMinutes(): this.props.date.getMinutes()} : 
                ${this.props.date.getSeconds() < 10 ? '0' + this.props.date.getSeconds(): this.props.date.getSeconds()}`
                }
            </div>
        )
    }
}