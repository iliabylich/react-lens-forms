import React from 'react';

import User from '../models/User.js';

import TextInput from '../inputs/TextInput.jsx';
import PasswordInput from '../inputs/PasswordInput.jsx';
import ProfileFields from './ProfileFields.jsx';
import AddressFields from './AddressFields.jsx';

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: new User()
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let { user }  = this.state;
    const attributeName = event.target.name;

    switch(attributeName) {
      case 'email':
      case 'password':
        user = user.set(attributeName, event.target.value);
        break;
      case 'name':
        user = user.setIn(['profile', attributeName], event.target.value);
        break;
      case 'age':
        user = user.setIn(['profile', attributeName], parseInt(event.target.value, 10));
        break;
      case 'agree':
        user = user.setIn(['profile', attributeName], event.target.checked);
        break;
      case 'country':
      case 'city':
      case 'street':
        user = user.setIn(['address', attributeName], event.target.value);
        break;
      default:
        throw new Error(`Unsupported attribute ${attributeName}`);
    }

    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="form">
        <div>state.user: {user.toString()}</div>

        <TextInput     value={user.get('email')}    onChange={this.onChange} name="email" />
        <PasswordInput value={user.get('password')} onChange={this.onChange} name="password" />

        <ProfileFields value={user.get('profile')}  onChange={this.onChange} />
        <AddressFields value={user.get('address')}  onChange={this.onChange} />
      </div>
    );
  }
}

export default Form;
