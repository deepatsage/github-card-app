import { React } from 'react';
import Card from './Card';

const CardList =(props)=> {
    console.log(props.profiles);
    return (<div style={{ border: '1px solid blue'}}>
      {props.profiles.map(profile => <Card key={profile.id} profile={profile} />)}
    </div>);
 }

export default CardList;