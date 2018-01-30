import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../inputs/TextInput.jsx';
import { mapPropLens, compose } from '../lenses.js';

class AddressFields extends React.PureComponent {
  static contextTypes = {
    root: PropTypes.object.isRequired
  }

  render() {
    const { lens } = this.props;

    return (
      <div>
        <TextInput lens={compose(lens, mapPropLens('country'))} />
        <TextInput lens={compose(lens, mapPropLens('city'))} />
        <TextInput lens={compose(lens, mapPropLens('street'))} />
      </div>
    );
  }
}

export default AddressFields;
