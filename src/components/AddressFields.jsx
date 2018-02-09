import React from 'react';
import PropTypes from 'prop-types';
import { Lens, PropertyLens } from 'react-state-focus';

import TextInput from '../inputs/TextInput.jsx';

class AddressFields extends React.PureComponent {
  static propTypes = {
    lens: PropTypes.instanceOf(Lens)
  };

  render() {
    const { lens } = this.props;

    return (
      <div>
        <TextInput lens={lens.chain(new PropertyLens('country'))} />
        <TextInput lens={lens.chain(new PropertyLens('city'))} />
        <TextInput lens={lens.chain(new PropertyLens('street'))} />
      </div>
    );
  }
}

export default AddressFields;
