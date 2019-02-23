import React from "react";
import AddressBook from './AddressBook';
import AddEntryForm from './AddEntryForm'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.addresses = this.getAddresses();

    this.state = {
      addresses: this.addresses,
      isEditing: false,
      entryToEdit: null
    }

    this.saveEntry = this.saveEntry.bind(this);
    this.getAddresses = this.getAddresses.bind(this);
    this.saveAddresses = this.saveAddresses.bind(this);
    this.onDeleteEntry = this.onDeleteEntry.bind(this);
    this.onEditEntry = this.onEditEntry.bind(this);
  }

  onAddEntry() {
    this.setState({
      isEditing: true
    });
  }

  onEditEntry(entry) {
    let index = this.addresses.findIndex(addr => addr.id === entry.id);

    this.addresses[index] = entry;
    this.saveAddresses();

    this.setState({ addresses: this.getAddresses() });
  }

  onDeleteEntry(entry) {
    let index = this.addresses.findIndex(addr => addr.id === entry.id);
    this.addresses.splice(index, 1);
    this.saveAddresses();

    this.setState({ addresses: this.getAddresses() });
  }

  saveEntry(addr) {
    addr.id = new Date().getTime();
    this.addresses.push(addr);
    this.saveAddresses();

    this.setState({ 
      addresses: this.getAddresses(),
      isEditing: false
    });
  }

  getAddresses() {
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

  saveAddresses() {
    localStorage.setItem('address-book-entries', JSON.stringify(this.addresses));
  }

  render() {
    return (
      <div className='container'>
        <button onClick={() => this.onAddEntry()} className='btn btn-primary add-button'>Add</button>
        <AddEntryForm
          saveEntry={this.saveEntry}
          cancelSave={this.cancelSave}
          isEditing={this.state.isEditing}
          addr={this.state.entryToEdit || {}}
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