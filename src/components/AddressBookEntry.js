import React from "react";

class AddressBookEntry extends React.Component {

  constructor(props) {
    super(props);

    this.addr = this.props.address;

    console.log(props);
    this.state = {
      name: `${this.addr.name} ${this.addr.last_name}`
    }
  }
  render() {

    return (
      <li className='list-group-item address-book-entry d-flex justify-content-between'>
        <div>
          <div id='name'>
            <label className='address-book-entry__label'>Name</label>
            <label>{ this.state.name }</label>
          </div>
          <div id='email'>
            <label className='address-book-entry__label'>Email</label>
            <label>{ this.props.address.email }</label>
          </div>
        </div>
        <div className='address-book-entry__actions d-flex align-items-start'>
          <button onClick={() => this.props.onEditEntry(this.addr)} className='btn btn-sm btn-secondary'>Edit</button>
          <button onClick={() => this.props.onDeleteEntry(this.addr)} className='btn btn-sm btn-danger left-margin'>Delete</button>
        </div>
      </li> 
    );
  }
}

module.exports = AddressBookEntry;