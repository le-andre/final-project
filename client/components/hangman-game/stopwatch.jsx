import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.timeTick = this.timeTick.bind(this);
    this.timeReset = this.timeReset.bind(this);
    this.timeInterval = this.timeInterval.bind(this);
    this.state = {
      running: false,
      counter: 0,
      status: ''
    };

  }

  timeInterval() {
    if (this.state.running === false) {
      this.setState({ running: true, counter: 0, status: '' });
      setInterval(this.timeTick, 1000);
    }
  }

  timeTick() {
    if (this.state.running === true) {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  timeReset() {
    if (this.state.counter === 10) {
      this.setState({ status: 'You Lose!', running: false, counter: '' });
    } else {
      this.setState({ status: '', running: false, counter: 0 });
    }

  }

  render() {

    let buttonClass = 'button hidden';
    if (this.state.counter === 5) {
      buttonClass = 'button';

    }
    return (
      <div>
        <span onClick={this.timeInterval}>{this.state.counter}</span>
        <span onClick={this.timeReset}>{this.state.status}</span>
        <div>
          <button onClick={this.timeReset}className={buttonClass}>retry</button>
        </div>
      </div>
    );
  }
}
