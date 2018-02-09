import React from 'react';
import PropTypes from 'prop-types';
import { Lens, PropertyLens } from 'react-state-focus';

import TextInput from '../inputs/TextInput.jsx';
import Checkbox from '../inputs/Checkbox.jsx';
import NumericField from '../inputs/NumericField.jsx';

class ProfileFields extends React.PureComponent {
  static propTypes = {
    lens: PropTypes.instanceOf(Lens)
  };

  render() {
    const { lens } = this.props;

    return (
      <div>
        <TextInput    lens={lens.chain(new PropertyLens('name'))} />
        <NumericField lens={lens.chain(new PropertyLens('age'))} />
        <Checkbox     lens={lens.chain(new PropertyLens('agree'))} />
      </div>
    );
  }
}

export default ProfileFields;
