import React from 'react';
import PropTypes from 'prop-types';
import { Lens, LensBoundComponent } from 'react-state-focus';

const TextInput = ({ lens }) => {
  console.log('TextInput')

  return (
    <input
      type="text"
      value={lens.view()}
      onChange={e => lens.set(e.target.value)}
    />
  );
}

TextInput.propTypes = {
  lens: PropTypes.instanceOf(Lens)
}

export default LensBoundComponent(TextInput);
