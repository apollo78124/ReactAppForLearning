import React from 'react';
import ReactDOM from 'react-dom';

class Today extends React.Component {
    constructor () {
        super();
        this.state={
            curTime : new Date().toLocaleString(),
        }
    }
    
    render() {
    return <h2>Hi, today is {this.state.curTime}</h2>;
    
        }
}

export default Today;