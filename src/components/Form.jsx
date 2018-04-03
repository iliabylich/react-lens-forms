import React from 'react';
import PropTypes from 'prop-types';
import { StateBoundLens, LensChain } from 'react-state-focus';

import User from '../models/User.js';

import TextInput from '../inputs/TextInput.jsx';
import PasswordInput from '../inputs/PasswordInput.jsx';
import ProfileFieldset from './ProfileFieldset.jsx';
import AddressFieldset from './AddressFieldset.jsx';

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

  componentDidMount() {
    console.groupEnd()
  }

  componentDidUpdate() {
    console.groupEnd()
  }

  render() {
    const lens = this.lens;
    const { user } = this.state;

    console.group('render');
    console.log('Form');

    return (
      <div className="form">
        <div>state.user: {this.state.user.toString()}</div>

        <TextInput     lens={lens.chainProperty('email')} />
        <PasswordInput lens={lens.chainProperty('password')} />

        <ProfileFieldset lens={lens.chainProperty('profile')} />
        <AddressFieldset lens={lens.chainProperty('address')} />
      </div>
    );
  }
}

export default Form;
