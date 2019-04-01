import React, { Component } from 'react';

import '../styles/addProperties.css';

class AddProperties extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        title: '',
        type: 'Select Property Type',
        bedrooms: '',
        bathrooms: '',
        city: 'Select City',
        price: '',
        email: '',
      },
    };
  }

  handleAddProperty = event => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h1 className="addProps">Add Properties</h1>
        <main>
          <form onSubmit={this.handleAddProperty}>
            <label>Title
              <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} />
            </label>
            <p />
            <label>Property Type
              <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
                <option value="Studio Apartment">Studio Apartment</option>
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
              </select>
            </label>
            <p />
            <label>Bedrooms
              <input name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} />
            </label>
            <p />
            <label>Bathrooms
              <input name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} />
            </label>
            <p />
            <label>City
              <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
                <option value="Manchester">Manchester</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Chester">Chester</option>
              </select>
            </label>
            <p />
            <label>Price
              <input name="price" value={this.state.fields.price} onChange={this.handleFieldChange} />
            </label>
            <p />
            <label>Email
              <input name="email" value={this.state.fields.email} onChange={this.handleFieldChange} />
            </label>
            <p />
            <button>Add</button>
          </form>
        </main>
      </div>
    );
  }
}

export default AddProperties;
