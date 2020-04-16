import React from 'react';
import CloseButton from './CloseButton';
import '../stylesheets/History.css';

class History extends React.Component {

  state = {
    history: []
  }

  componentDidMount = () => {
    this.fetchHistory(this.props.user.id);
  };

  fetchHistory = (userId) => {
    fetch(`http://localhost:4000/api/users/${userId}/history`)
      .then((resp) => resp.json())
      .then((history) => this.setState({ history: history.slice(0, 3) }));
  };

  render() {
    let spanStyles = {
      color: 'red'
    }
    
    return (
      <div id='history'>
        <CloseButton closeButton={this.props.closeButton} />
        <h2>History</h2>
        <br/>
        <div className="items">
        {this.state.history.map(service => {
          return (
              <div className='content' key={service.id}>
                <h2>{service.name}</h2>
                <br />
                <h4>Contact</h4>
                <span style={spanStyles}> {service.provided_by} </span>
                <p>
                  phone: {service.phone}
                  <br />
                  email: {service.email}
                </p>
                <br/>
                <hr/>
              </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default History;
