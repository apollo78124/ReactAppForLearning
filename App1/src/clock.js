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
        <div className="col-md-5 offset-md-1">
          <br />
          <h2>Clock is ticking... Hurry up! <br /> Current Time: {this.state.time}</h2>
          <br />
        </div>
      );
    }
  }

export default Clock;