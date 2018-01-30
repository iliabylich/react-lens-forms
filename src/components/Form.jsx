import React from 'react';
import PropTypes from 'prop-types';

import User from '../models/User.js';

import TextInput from '../inputs/TextInput.jsx';
import PasswordInput from '../inputs/PasswordInput.jsx';
import ProfileFields from './ProfileFields.jsx';
import AddressFields from './AddressFields.jsx';

import { statePropLens, mapPropLens, compose } from '../lenses.js';

class Form extends React.PureComponent {
  static childContextTypes = {
    root: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      user: new User()
    };
  }

  getChildContext() {
    return { root: this };
  }

  render() {
    const userLens = statePropLens('user');

    return (
      <div className="form">
        <div>state.user: {this.state.user.toString()}</div>

        <TextInput     lens={compose(userLens, mapPropLens('email'))} />
        <PasswordInput lens={compose(userLens, mapPropLens('password'))} />

        <ProfileFields lens={compose(userLens, mapPropLens('profile'))} />
        <AddressFields lens={compose(userLens, mapPropLens('address'))} />
      </div>
    );
  }
}

export default Form;
