import React from "react";
import AddressBook from './AddressBook';
import AddEntryForm from './AddEntryForm'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.addresses = this.getAddressesFromLocalStorage();

    this.state = {
      addresses: this.addresses,
      isEditing: false,
      entryToEdit: null
    }

    this.saveEntry = this.saveEntry.bind(this);
    this.getAddressesFromLocalStorage = this.getAddressesFromLocalStorage.bind(this);
  }

  onAddEntry() {
    this.setState({
      isEditing: true
    });
  }

  onEditEntry(entry) {
    console.log('edting ' + entry.name);
  }

  onDeleteEntry(entry) {
    console.log('delete ' + entry.name);
  }

  saveEntry(addr) {
    this.addresses.push(addr);
    localStorage.setItem('address-book-entries', JSON.stringify(this.addresses));

    this.setState({ 
      addresses: this.getAddressesFromLocalStorage(),
      isEditing: false
    });
  }

  getAddressesFromLocalStorage() {
    let addresses = JSON.parse(localStorage.getItem('address-book-entries')) || [];
    addresses.sort((a,b) => {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    });
    return addresses;
  }

  render() {
    return (
      <div className='container'>
        <button onClick={() => this.onAddEntry()} className='btn btn-primary add-button'>Add</button>
        <AddEntryForm
          saveEntry={this.saveEntry}
          isEditing={this.state.isEditing}
          addr={this.state.addressToEdit || {}}
        />

        { this.state.addresses.length === 0 &&
          <div className='top-margin alert alert-light'>No addresses</div>
        }

        {
          this.state.addresses &&
          <AddressBook 
            addresses={this.state.addresses}
            onEditEntry={this.onEditEntry}
            onDeleteEntry={this.onDeleteEntry}
          />
        }
        
      </div>
    );
  }
}

module.exports = App;