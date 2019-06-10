import React from 'react'
import style from './FinishedTask.module.css'
import Menu from './Menu/Menu';



export default class FinishedTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);


        this.state = {
            isHovering: false,
            isClick: false,

        };
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