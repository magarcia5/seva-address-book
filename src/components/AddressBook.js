import React from "react";
import AddressBookEntry from './AddressBookEntry';

class AddressBook extends React.Component {
  
  render() {
    let entries = [];

    this.props.addresses.forEach(addr => {
      entries.push(
        <AddressBookEntry 
          firstName={addr.name}
          lastName={addr.last_name}
          email={addr.email}
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