import React from "react";
import AddressBookEntry from './AddressBookEntry';

class AddressBook extends React.Component {
  
  render() {
    let entries = [];

    this.props.addresses.forEach(addr => {
      entries.push(
        <AddressBookEntry 
          address={addr}
          onEditEntry={this.props.onEditEntry}
          onDeleteEntry={this.props.onDeleteEntry}
        />
      )
    });

    return (
      <ul className='address-book list-group'>
        { entries }
      </ul>
    );

  }
}

module.exports = AddressBook;