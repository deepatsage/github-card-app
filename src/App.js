import {React, Component} from 'react';
import './App.css';
import CardList from './Component/CardList';
import CardForm from "./Component/CardForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: []
    }
  }
  addNewProfile = (profile) => {
    this.setState((prevState) => ({
      profileData: [...prevState.profileData, profile],
    }))
  }

  render() {
    
    return (
      <div className="App">
        <div className="header">Git Hub Card App</div>
        <CardForm addNewProfile={this.addNewProfile}/>
        <CardList profiles={this.state.profileData}/>
      </div>
  );
}
}

export default App;
