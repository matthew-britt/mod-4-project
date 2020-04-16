import React from 'react';
import '../stylesheets/Services.css';
import CloseButton from './CloseButton';

class History extends React.Component {
  state = {
    services: [],
    newService: false,
  };

  componentDidMount = () => {
    this.fetchServices(this.props.user.id);
  };

  fetchServices = (userId) => {
    fetch(`http://localhost:4000/api/users/${userId}/history`)
      .then((resp) => resp.json())
      .then((services) => this.setState({ services }));
  };

  editService = (service) => {
    service.price = 666;
    fetch(`http://localhost:4000/api/services/${service.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        price: service.price,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
      });
  };

  deleteService = (serviceId) => {
    fetch(`http://localhost:4000/api/services/${serviceId}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  };

  closeNewService = () => {
    console.log('CLOSE NEW SERVICE');
    this.setState({ newService: false });
  };

  newService = () => {
    console.log('NEW SERVICE');
    this.setState({ newService: true });
  };

  displayServices = (services) => {
    return services.map((s) => {
      return (
        <div className='content' key={s.id}>
          <h2>{s.name}</h2>
          <br />
          <h3>{this.props.user.name}</h3>
          <br />
          <p>
            phone: {s.phone}
            <br />
            email: {s.email}
          </p>
          <br />
          <button
            onClick={() => {
              this.editService(s);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              this.deleteService(s.id);
            }}
          >
            Delete
          </button>
          <hr />
        </div>
      );
    });
  };

  render() {
    let buttonStyles = {
      paddingTop: '50px',
    };
    return (
      <div id='services'>
        <CloseButton closeButton={this.props.closeButton} />
        {this.displayServices(this.state.services)}
        <br />
        <div style={buttonStyles}>
          <button onClick={this.newService}>New Service</button>
        </div>
        {this.state.newService ? (
          <div className='blade'>
            <button onClick={() => this.closeNewService()}>Help</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default History;
