import React from 'react'
import style from './Task.module.css'
import Menu from './Menu/Menu';
import Checkbox from './Checkbox/Checkbox';


export default class Task extends React.Component {
    constructor(props) {
        super(props);
        //this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);
    }


    handleMouseClick(event) {
        let id = event.target.id - 0;
        if(id === this.props.store.isClick.id){
            this.props.store.closeMenu(this.props.task.key)
        }else{
            this.props.store.closeMenu(this.props.task.key)
            this.props.store.openMenu(this.props.task.key)
        }
         
        
       
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.task}>
                    <Checkbox store={this.props.store} id={this.props.task.key} />
                    <div className={style.textTask}>
                        {this.props.task.tTask}
                    </div>

                    <div>
                        {
                            
                            <div>
                                <div title="Settings" id={this.props.task.key} className={style.settingIcon} onClick={this.handleMouseClick}></div>
                            </div>
                        }
                    </div>
                </div>

                <div>
                    {this.props.store.isClick.state && (this.props.store.isClick.id === this.props.task.key) &&
                        <Menu store={this.props.store} id={this.props.task.key} />
                    }
                </div>

            </div>
        )
    }
}