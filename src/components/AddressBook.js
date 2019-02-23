import React from "react";
import AddressBookEntry from './AddressBookEntry';

class AddressBook extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      entries: this.buildBook(props)
    };

    this.buildBook = this.buildBook.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      entries: this.buildBook(nextProps)
    })
  }

  buildBook(props) {
    let entries = [];

    props.addresses.forEach(addr => {
      entries.push(
        <AddressBookEntry 
          address={addr}
          onEditEntry={props.onEditEntry}
          onDeleteEntry={props.onDeleteEntry}
          key={addr.id}
        />
      )
    });

    return entries;
  }
  
  render() {
    return (
      <ul className='address-book list-group'>
        { this.state.entries }
      </ul>
    );

  }
}

module.exports = AddressBook;