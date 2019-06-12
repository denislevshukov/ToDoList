import React from 'react'
import style from './Checkbox.module.css'

export default class Checkbox extends React.Component {

    handleChange = event => {
        this.props.store.finishTask(event.target.id);
        event.target.checked = false;
    }

    render() {
        return (
            <div className={style.containerForCheckbox}>
                <form action="">
                    <input type="checkbox" onChange={this.handleChange} className={style.checkbox} name={this.props.id} id={this.props.id} />
                    <label for={this.props.id}></label>
                </form>

            </div>
        )
    }

}