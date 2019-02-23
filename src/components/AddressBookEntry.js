import React from "react";
import AddEntryForm from './AddEntryForm'
import { timingSafeEqual } from "crypto";
import { runInThisContext } from "vm";

class AddressBookEntry extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      addr: this.props.address,
      isEditing: false,
    }

    this.cancelSave = this.cancelSave.bind(this);
    this.onEditEntry = this.onEditEntry.bind(this);
    this.onSaveEntry = this.onSaveEntry.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isEditing: nextProps.isEditing});
  }

  onEditEntry() {
    this.setState({ isEditing: true });
  }

  onSaveEntry() {
    this.props.onEditEntry(this.state.addr);

    //this.setState({ isEditing: false });
  }

  cancelSave() {
    this.setState({ isEditing: false});
  }

  render() {
    return (
      <div>
        <div className={'' + (!this.state.isEditing && 'hide')}>
          <AddEntryForm
            saveEntry={this.onSaveEntry}
            cancelSave={this.cancelSave}
            isEditing={this.state.isEditing}
            addr={this.state.addr}
          />
        </div>

        <li className={'list-group-item address-book-entry d-flex justify-content-between ' + (this.state.isEditing && 'hide')}>
          <div>
            <div id='name'>
              <label className='address-book-entry__label'>Name</label>
              <label>{`${this.state.addr.firstName} ${this.state.addr.lastName}` }</label>
            </div>
            <div id='email'>
              <label className='address-book-entry__label'>Email</label>
              <label>{ this.state.addr.email }</label>
            </div>
          </div>
          <div className='address-book-entry__actions d-flex align-items-start'>
            <button onClick={() => this.onEditEntry()} className='btn btn-sm btn-secondary'>Edit</button>
            <button onClick={() => this.props.onDeleteEntry(this.state.addr)} className='btn btn-sm btn-danger left-margin'>Delete</button>
          </div>
        </li> 
      </div>
    );
  }
}

module.exports = AddressBookEntry;