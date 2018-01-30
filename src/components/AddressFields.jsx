import React from 'react';

import TextInput from '../inputs/TextInput.jsx';
import { mapPropLens, compose } from '../lenses.js';

class AddressFields extends React.Component {
  render() {
    const { root, lens } = this.props;

    return (
      <div>
        <TextInput root={root} lens={compose(lens, mapPropLens('country'))} />
        <TextInput root={root} lens={compose(lens, mapPropLens('city'))} />
        <TextInput root={root} lens={compose(lens, mapPropLens('street'))} />
      </div>
    );
  }
}

export default AddressFields;
