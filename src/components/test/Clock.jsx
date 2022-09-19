import React from 'react';

export default class Clock extends React.Component {
  timerID = null;

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
