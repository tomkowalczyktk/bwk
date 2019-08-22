import React from 'react';


export default class TimeDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date()

    }
    this.timeChange = this.timeChange.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.timeChange, 1000)

  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  timeChange() {
    this.setState({
      time: new Date()
    })

  }

  render() {
    const { time } = this.state;
    return (
      <div>time={time} </div>
    );
  }
}
const 