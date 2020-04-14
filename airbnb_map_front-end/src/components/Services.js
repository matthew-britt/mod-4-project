import React from 'react';
import '../stylesheets/Services.css';
import CloseButton from './CloseButton';

class History extends React.Component {
  render() {
    let user = {
      name: 'Lawn Service',
      phone: '(555)555-5555',
      email: 'ben@ben.com',
      hours: {
        monday: '8:00am-8:00pm',
        tuesday: '8:00am-8:00pm',
        wednesday: '8:00am-8:00pm',
        thursday: '8:00am-8:00pm',
        friday: '8:00am-8:00pm',
        saturday: '8:00am-8:00pm',
        sunday: '8:00am-8:00pm',
      },
    };

    return (
      <div id='services'>
        <CloseButton closeButton={this.props.closeButton} />
        <div className="content">
          <h2>{user.name}</h2>
          <br />
          <h3>Contact</h3>
          <br />
          <p>
            phone: {user.phone}
            <br />
            email: {user.email}
          </p>
          <br />
          <h3>Hours</h3>
          <br />
          <p>
            monday: {user.hours.monday}
            <br />
            tuesday: {user.hours.monday}
            <br />
            wednesday: {user.hours.monday}
            <br />
            thursday: {user.hours.monday}
            <br />
            friday: {user.hours.monday}
            <br />
            saturday: {user.hours.monday}
            <br />
            sunday: {user.hours.monday}
          </p>
          </div>
      </div>
    );
  }
}

export default History;
