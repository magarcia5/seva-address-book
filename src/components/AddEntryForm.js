import React from 'react';

class AddEntryForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isSaveError: false,
      isEditing: this.props.isEditing
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prev, props) => ({
      isEditing: nextProps.isEditing
    }));
  }

  cancelSave() {
    this.setState((prev, props) => ({
      isEditing: false
    }));
  }

  render() {
    return (
      <div className={'app__add-entry ' + (this.state.isEditing ? 'show' : 'hide')}>
      <div className='list-group-item d-flex justify-content-start'>
        <input className='app__add-entry-input' type='text' id='first-name' placeholder='First Name'></input>
        <input className='app__add-entry-input' type='text' id='last-name' placeholder='Last Name'></input>
        <input className='app__add-entry-input' type='email' id='email' placeholder='Email'></input>
        <button onClick={ () => this.props.saveEntry() } className='btn-sm btn-primary'>Save</button>
        <button onClick={ () => this.cancelSave() } className='btn-sm btn-danger left-margin'>Cancel</button>
      </div>
      { this.state.isSaveError &&
        <div className='app__add-entry-error text-danger'>Please enter a valid email.</div>
      }
    </div>
    );
  }
}

module.exports = AddEntryForm;