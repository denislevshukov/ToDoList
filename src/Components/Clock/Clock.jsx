import React from 'react'

import c from './Clock.module.css'
import Time from './Time/Time';
import Day from './Date/Day';
//import Date from './Date/Date';




export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(), 
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div className = {c.clock}>
                <Day date={this.state.date}  />
                <Time date={this.state.date} />
            </div>
        )
    


}
}