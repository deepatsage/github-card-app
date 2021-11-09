import { React, Component } from "react";
import './Card.css';
class Card extends Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    const profile = this.props.profile;
    console.log(profile);
    return (
      <div className='github-profile'>
        <img src={profile.avatar_url} alt="img"></img>
        <div className="info">
          <div className="name">
            {profile.name}
          </div>
          <div className="company">
            {profile.bio}
          </div>
        </div>
      </div>
    );
  }
}
export default Card;