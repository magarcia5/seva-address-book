import React from "react";
import AddressBook from './AddressBook';
import AddEntryForm from './AddEntryForm'


class App extends React.Component {

  constructor(props) {
    super(props);

    // let addresses = [
    //   {
    //     name: 'Mel',
    //     last_name: 'Alrajhi',
    //     email: 'alrajhi.mel@gmail.com'
    //   },
    //   {
    //     name: 'Fares',
    //     last_name: 'Alrajhi',
    //     email: 'alrajhi.fares@gmail.com'
    //   }
    // ];
    let addresses = localStorage.getItem('address-book-entries') || [];

    this.state = {
      addresses,
      isEditing: false,
      entryToEdit: null
    }
  }

  onAddEntry() {
    console.log('add')
    this.setState((prev, props) => ({
      isEditing: true
    }));
  }

  onEditEntry(entry) {
    console.log('edting ' + entry.name);
  }

  onDeleteEntry(entry) {
    console.log('delete ' + entry.name);
  }

  saveEntry() {
    console.log('save');
  }

  cancelSave() {

  }

  render() {
    console.log('render')
    return (
      <div className='container'>
        <button onClick={() => this.onAddEntry()} className='btn btn-primary add-button'>Add</button>
        <AddEntryForm
          saveEntry={this.saveEntry}
          isEditing={this.state.isEditing}
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