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
      addresses
    }
  }

  render() {
    return (
      <div class='container'>
        <button className='btn btn-primary add-button'>Add</button>
        { this.state.addresses.length === 0 &&
          <div className='no-addresses'>No addresses</div>
        }

        {
          this.state.addresses &&
          <AddressBook addresses={this.state.addresses} />
        }
        
      </div>
    );
  }
}

module.exports = App;