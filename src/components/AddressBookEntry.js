import React from "react";

class AddressBookEntry extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: `${this.props.firstName} ${this.props.lastName}`
    }
  }
  render() {

    return (
      <li className='list-group-item address-book-entry d-flex justify-content-between'>
      
      <div>
        <div className='first-name'>
          <label className='address-book-entry__label'>Name</label>
          <label>{ this.state.name }</label>
        </div>
        <div className='email'>
          <label class='address-book-entry__label'>Email</label>
          <label>{ this.props.email }</label>
        </div>
      </div>
      <div className='address-book-entry__actions'>
        <button className='btn btn-secondary'>Edit</button>
        <button className='btn btn-danger address-book-entry__delete'>Delete</button>
      </div>
      </li>
    );
  }
}

module.exports = AddressBookEntry;