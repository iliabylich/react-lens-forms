import React from 'react';
import PropTypes from 'prop-types';
import { StateBoundLens, PropertyLens, LensChain } from 'react-state-focus';

import User from '../models/User.js';

import TextInput from '../inputs/TextInput.jsx';
import PasswordInput from '../inputs/PasswordInput.jsx';
import ProfileFields from './ProfileFields.jsx';
import AddressFields from './AddressFields.jsx';

class Form extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: new User()
    };

    this.lens = new LensChain(
      new StateBoundLens(this, 'user')
    );
  }

  render() {
    const lens = this.lens;

    return (
      <div className="form">
        <div>state.user: {this.state.user.toString()}</div>

        <TextInput     lens={lens.chain(new PropertyLens('email'))} />
        <PasswordInput lens={lens.chain(new PropertyLens('password'))} />

        <ProfileFields lens={lens.chain(new PropertyLens('profile'))} />
        <AddressFields lens={lens.chain(new PropertyLens('address'))} />
      </div>
    );
  }
}

export default Form;
