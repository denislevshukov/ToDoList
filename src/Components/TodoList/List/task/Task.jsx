import React from 'react'
import style from './Task.module.css'
import Menu from './Menu/Menu';
import Checkbox from './Checkbox/Checkbox';


export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);


        this.state = {
            isHovering: false,
            isClick: false,
            finishedTasks: []
        };
    }

    updateData = (value) => {
        this.props.updateData(value);
    }

    handleMouseHover() {
        this.setState({
            isHovering: !this.state.isHovering
        })
    }
    handleMouseClick() {
        this.setState({
            isClick: !this.state.isClick
        })
    }



    render() {
        return (

            <div className={style.container}
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}>
                <div className={style.task}>
                    <Checkbox updateData={this.updateData} id={this.props.task.key} />
                    <div className={style.textTask}>
                        {this.props.task.tTask}
                    </div>

                    <div>
                        {
                            this.state.isHovering &&
                            <div>
                                <div className={style.settingIcon} onClick={this.handleMouseClick}></div>
                            </div>
                        }
                    </div>
                </div>


                <div>
                    {this.state.isClick &&
                        <Menu />
                    }
                </div>

            </div>
        )
    }
}