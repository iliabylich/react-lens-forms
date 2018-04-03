import React from 'react';
import PropTypes from 'prop-types';
import { Lens, LensBoundComponent } from 'react-state-focus';

const PasswordField = ({ lens }) => {
  console.log('PasswordField')

  return (
    <input
      type="password"
      value={lens.view()}
      onChange={e => lens.set(e.target.value)}
    />
  );
}

PasswordField.propTypes = {
  lens: PropTypes.instanceOf(Lens)
}

export default LensBoundComponent(PasswordField);
