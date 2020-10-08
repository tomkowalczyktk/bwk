import React from 'react';
import './form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Form extends React.Component {
  static propTypes = {
    offer: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      values: {
        name: "",
        phoneNo: "",
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
    const { close } = this.props;
    this.setState(
      { isSubmited: true }
    )
    alert('Twoje zgłoszenie zostało wysłane');
    e.preventDefault()
    close();
  }


  render() {
    const { name, phoneNo } = this.state.values;
    const { isSubmited } = this.state;
    const { label, close, offer } = this.props;

    return (
      <div className={classnames("form-canvas", { "form-canvas--hiden": isSubmited })} >

        
 
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form" action="/oferty" method="POST">
            <span onClick={close}  >< FontAwesomeIcon icon={faTimes} /></span>

            <h4>{label}</h4>

            <input type="text" name="name" placeholder="Imię i nazwisko" value={name} onChange={this.handleChange} required />
            <input type="text" name="phoneNo" placeholder="Nr telefonu" value={phoneNo} required onChange={this.handleChange} />
            <input type="text" name="offerAddress" placeholder={`ul. ${offer.street} ${offer.city}`} readOnly />


            <input type="submit" name="isSubmited" value="Wyślij" />

          </form>
        </div>
      </div>
    )

  }

}
export default Form;
{/* <script type='text-php'>


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  if(isset($_POST['name'])) {
    $name = $_POST['name'];
  } else {
    $name = '';
  }
  if(isset($_POST['phoneNo'])){
    $phoneNo=$_POST['phoneNo'];
  }else{
    $phoneNo='';
  }
  if(isset($_POST['offerAddress'])){
    $offerAddress=$_POST['offerAddress'];
  }else{
    $offerAddress='';
  }

  


  require '../../data/rents.json';  
  $rent=array(
  'name'=> $name,
  'phoneNo'=> $phoneNo,
  'offerAddress'=> $offerAddress,
  );
  $rentsJSON=file_get_contents('../../data/rents');
  $rents=json_decode($rentsJSON,true);
  $rents[]=$rent;

  $json = json_encode($rents, JSON_PRETTY_PRINT);
  file_put_contents('../../data/rents.json', $json);

  header('location:/');
}

</script> */}