import React from 'react';
import { statePropLens, mapPropLens, compose } from '../lenses.js';

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
  }

  render() {
    const { user } = this.state;
    const userLens = statePropLens('user');

    return (
      <div className="form">
        <div>state.user: {user.toString()}</div>

        <TextInput     root={this} lens={compose(userLens, mapPropLens('email'))} />
        <PasswordInput root={this} lens={compose(userLens, mapPropLens('password'))} />

        <ProfileFields root={this} lens={compose(userLens, mapPropLens('profile'))} />
        <AddressFields root={this} lens={compose(userLens, mapPropLens('address'))} />
      </div>
    );
  }
}

export default Form;
