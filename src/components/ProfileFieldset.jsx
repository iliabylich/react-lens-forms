import React from 'react';
import PropTypes from 'prop-types';
import { LensBoundComponent, Lens } from 'react-state-focus';

import TextInput from '../inputs/TextInput.jsx';
import Checkbox from '../inputs/Checkbox.jsx';
import NumericField from '../inputs/NumericField.jsx';

const ProfileFieldset = ({ lens }) => {
  console.log('ProfileFieldset');

  return (
    <div>
      <TextInput    lens={lens.chainProperty('name')} />
      <NumericField lens={lens.chainProperty('age')} />
      <Checkbox     lens={lens.chainProperty('agree')} />
    </div>
  );
}

ProfileFieldset.propTypes = {
  lens: PropTypes.instanceOf(Lens)
}

export default LensBoundComponent(ProfileFieldset);
