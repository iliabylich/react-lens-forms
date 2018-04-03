import React from 'react';
import PropTypes from 'prop-types';
import { Lens, LensBoundComponent } from 'react-state-focus';

const NumericField = ({ lens }) => {
  console.log('NumericField')

  return (
    <input
      type="number"
      value={lens.view()}
      onChange={e => lens.set(e.target.value)}
    />
  );
}

NumericField.propTypes = {
  lens: PropTypes.instanceOf(Lens)
}

export default LensBoundComponent(NumericField);
