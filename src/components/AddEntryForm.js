import React from 'react';

class AddEntryForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isSaveError: false,
      isEditing: this.props.isEditing,
      addr: this.props.addr,
      validationError: ''
    };

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isEditing: nextProps.isEditing,
      addr: !nextProps.isEditing ? {} : nextProps.addr
    });
  }

  cancelSave() {
    this.setState({
      isEditing: false,
      validationError: '',
      addr: {}
    });

    this.props.cancelSave();
  }

  updateAddr(e) {
    this.setState({
      addr: Object.assign(
        this.state.addr, 
        { [e.target.name] : e.target.value })
    });
  }

  validateAndSave(addr) {
    if(!addr.firstName && !addr.lastName && !addr.email) {
      this.setState({
        validationError: 'Please enter at least one field.'
      });
      return;
    }
    if (addr.email && !this.validateEmail(addr.email)) {
        this.setState({
          validationError: 'Please enter a valid email.'
        });
        return;
    }
   
    this.setState({ validationError: '' });
    this.props.saveEntry(addr);
  }

  // taken from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    return (
      <div className={'app__add-entry ' + (this.state.isEditing ? 'show' : 'hide')}>
      <div className='list-group-item d-flex justify-content-start'>
        <input
          className='app__add-entry-input'
          type='text'
          name='firstName'
          placeholder='First Name'
          value={this.state.addr.firstName || ''}
          onChange={(e) => this.updateAddr(e) }
        />
        <input
          className='app__add-entry-input'
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={this.state.addr.lastName || ''}
          onChange={(e) => this.updateAddr(e) }
        />
        <input 
          className='app__add-entry-input' 
          type='text' 
          name='email'
          placeholder='Email' 
          value={this.state.addr.email || ''} 
          onChange={(e) => this.updateAddr(e) }
        />

        <button onClick={ () => this.validateAndSave(this.state.addr) } className='btn-sm btn-primary'>Save</button>
        <button onClick={ () => this.cancelSave() } className='btn-sm btn-danger left-margin'>Cancel</button>
      </div>

      { this.state.validationError &&
        <div className='app__add-entry-error text-danger'>{ this.state.validationError }</div>
      }
    </div>
    );
  }
}

module.exports = AddEntryForm;