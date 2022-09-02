import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }
  timerID = null;

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
