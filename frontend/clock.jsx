import React from "react";
import ReactDOM from "react-dom";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    this.interverId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interverId);
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    return (
      <div>
        <h1>CLOCK</h1>
        <h1>{`${hours}:${minutes}:${seconds}`}</h1>
      </div>
    );
  }
}
