import React from 'react';
import PropTypes from 'prop-types';
import { Lens, LensBoundComponent } from 'react-state-focus';

import TextInput from '../inputs/TextInput.jsx';

const AddressFieldset = ({ lens }) => {
  console.log('AddressFieldset');

  return (
    <div>
      <TextInput lens={lens.chainProperty('country')} />
      <TextInput lens={lens.chainProperty('city')} />
      <TextInput lens={lens.chainProperty('street')} />
    </div>
  );
}

AddressFieldset.propTypes = {
  lens: PropTypes.instanceOf(Lens)
}

export default LensBoundComponent(AddressFieldset);
