import React from 'react';
import PropTypes from 'prop-types';
import { Lens, LensBoundComponent } from 'react-state-focus';

const Checkbox = ({ lens }) => {
  console.log('Checkbox')

  return (
    <input
      type="checkbox"
      checked={lens.view()}
      onChange={e => lens.set(e.target.checked)}
    />
  );
}

Checkbox.propTypes = {
  lens: PropTypes.instanceOf(Lens)
}

export default LensBoundComponent(Checkbox);
