import React from 'react';
import './form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Form extends React.Component {
  static propTypes = {
    offerAddress: PropTypes.string.isRequired,
    hasLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      values: {
        hasName: "",
        hasPhoneNo: "",
        isSubmited: false,

      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    // numb=a.match(/\d/gm).map(Number)


    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value
      }

    }));
  }

  handleSubmit(e) {
    this.setState(
      { isSubmited: true }
    )
    alert('Twoje zgłoszenie zostało wysłane');
    e.preventDefault()
  }



  render() {
    const { hasName, hasPhoneNo } = this.state.values;
    const { isSubmited } = this.state;
    const { offerAddress, hasLabel, onClick } = this.props;
    console.log(onClick);
    return (
      <div className={classnames("form-canvas", { "form-canvas--hiden": isSubmited })} >
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form">
            <span onClick={onClick}  >< FontAwesomeIcon icon={faTimes} /></span>

            <label>{hasLabel}

              <input type="text" name="hasName" placeholder="Imię i nazwisko" value={hasName} onChange={this.handleChange} required />
              <input type="text" name="hasPhoneNo" placeholder="Nr telefonu" value={hasPhoneNo} required onChange={this.handleChange} />
              <input type="text" name="hasOfferAddress" placeholder={offerAddress} readOnly />

            </label>

            <input type="submit" name="isSubmited" value="Wyślij" />

          </form>
        </div>
      </div>
    )

  }

}
export default Form;