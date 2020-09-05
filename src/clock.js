import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString(),
        clockColor: "blue"
      };
    }
    static getDerivedStateFromProps(props, state) {
        return {clockColor: props.favcol };
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
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <div className="App-clock">
          <h1>Clock is ticking... Hurry up! <br /> {this.state.time}</h1>
        </div>
      );
    }
  }

export default Clock;