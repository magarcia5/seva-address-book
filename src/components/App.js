import React from "react";
import AddressBook from './AddressBook';


class App extends React.Component {

  constructor(props) {
    super(props);

    const addresses = [
      {
        name: 'Mel',
        last_name: 'Alrajhi',
        email: 'alrajhi.mel@gmail.com'
      },
      {
        name: 'Fares',
        last_name: 'Alrajhi',
        email: 'alrajhi.fares@gmail.com'
      }
    ];
    this.state = {
      addresses,
      isEditing: true,
      entryToEdit: null
    }
  }

  onAddEntry() {
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
    this.setState((prev, props) => ({
      isEditing: false
    }));
  }

  render() {
    return (
      <div className='container'>
        <button onClick={() => this.onAddEntry()} className='btn btn-primary add-button'>Add</button>
        { this.state.isEditing &&
          <div className='app__add-entry'>
            <div className='list-group-item d-flex justify-content-start'>
              <input className='app__add-entry-input' type='text' id='first-name' placeholder='First Name'></input>
              <input className='app__add-entry-input' type='text' id='last-name' placeholder='Last Name'></input>
              <input className='app__add-entry-input' type='email' id='email' placeholder='Email'></input>
              <button onClick={ () => this.saveEntry() } className='btn-sm btn-primary'>Save</button>
              <button onClick={ () => this.cancelSave() } className='btn-sm btn-danger left-margin'>Cancel</button>
            </div>
            { this.state.isSaveError &&
              <div className='app__add-entry-error text-danger'>Please enter a valid email.</div>
            }
          </div>
        }
        { this.state.addresses.length === 0 &&
          <div className='no-addresses'>No addresses</div>
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