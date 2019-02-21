import React from "react";

class AddressBookEntry extends React.Component {
  render() {

    return (
      <div className='book-entry'>
        <label className='first-name'>{ this.props.firstName }</label>
        <label className='last-name'>{ this.props.lastName }</label>
        <label className='email'>{ this.props.email }</label>
        <button>Delete</button>
      </div>
    );
  }
}

module.exports = AddressBookEntry;