import axios from "axios";
import React, {  Component } from "react";
import classes from './CardForm.module.scss';
class CardForm extends Component {
  userNameInput = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'deepatsage',
      isLoading: false,
      isError: false,
      errorMessage: null
    }
    //this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler = async(event)=> {
    event.preventDefault();
    this.setState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const resp = await axios.get(`https://api.github.com/users/${this.state.inputValue}`);
      console.log(resp.data);
      this.setState((prevState) => ({ ...prevState, isLoading: false }));
      this.props.addNewProfile(resp.data);
    } catch (error) {
      this.setState((prevState) => ({ ...prevState, isLoading: false, isError: true, errorMessage: error.message }));
    }
  }
  componentDidMount() {
    this.userNameInput.current.focus();
  }
  render() {

    return (this.state.isLoading ? <div>Loading...</div> : (
      <div>
      <form onSubmit={this.submitHandler}>
        <input type="text" placeholder="Enter GitHub user id" value={this.state.inputValue}
          onChange={(event) => { this.setState({ inputValue: event.target.value }) }}
          ref={this.userNameInput}
        />
        <button className={classes.buttonsubmit}>Add GitHub Profile</button>
        </form>
        <div>{this.state.isError? this.state.errorMessage : ''}</div>
    </div>));
  }
}
export default CardForm;