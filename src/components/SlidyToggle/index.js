import React from 'react'
import './slidy-toggle.scss'

class SlidyToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOn: false
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange = () => {
    this.setState(prevState => ({ isOn: !prevState.isOn }))
  }

  render() {
    const { isOn } = this.state;

    return (
      <React.Fragment>
        {!isOn && <div className='slidy-toggle slidy-toggle--off' onClick={this.onChange}></div>}
        {isOn && <div className='slidy-toggle slidy-toggle--on' onClick={this.onChange}></div>}
      </React.Fragment>
    )
  }
}
export default SlidyToggle;