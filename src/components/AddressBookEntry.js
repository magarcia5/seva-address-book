import React from "react";

class AddressBookEntry extends React.Component {
  render() {

    return (
      <li className='list-group-item'>
        <label className='first-name'>{ this.props.firstName }</label>
        <label className='last-name'>{ this.props.lastName }</label>
        <label className='email'>{ this.props.email }</label>
        <button className='btn'>Delete</button>
      </li>
    );
  }
}

module.exports = AddressBookEntry;