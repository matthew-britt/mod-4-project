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
    this.setState({ newService: false });
  };

  displayNewService = () => {
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

    let newService = 
    <div>
      <form>
        <input type="text" id="name" defaultValue="Service Name"></input>
        <input type="text" id="phone" defaultValue="Phone Number"></input>
        <input type="text" id="email" defaultValue="Email Address"></input>
        <br/>
        <input type="submit" value="Submit Changes"></input>
      </form>
      <br />
      <br />
      <button onClick={() => this.closeNewService()}>Cancel Edits</button>
    </div>

    return (
      <div id='services'>
        <CloseButton closeButton={this.props.closeButton} />
        <h1>My Services</h1>
        <br />
        <br />
        <div className="items">
          {this.state.newService ? (
            <div>
              {newService}
            </div>
          ) : (
            <div>
              {this.displayServices(this.state.services)}
            </div>
          )}
        </div>
        <button className="newButton" onClick={this.displayNewService}>New Service</button>
      </div>
    );
  }
}

export default History;
