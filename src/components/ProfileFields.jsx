import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../inputs/TextInput.jsx';
import Checkbox from '../inputs/Checkbox.jsx';
import NumericField from '../inputs/NumericField.jsx';
import { mapPropLens, compose } from '../lenses.js';

class ProfileFields extends React.Component {
  static contextTypes = {
    root: PropTypes.object.isRequired
  }

  render() {
    const { lens } = this.props;

    return (
      <div>
        <TextInput    lens={compose(lens, mapPropLens('name'))} />
        <NumericField lens={compose(lens, mapPropLens('age'))} />
        <Checkbox     lens={compose(lens, mapPropLens('agree'))} />
      </div>
    );
  }
}

export default ProfileFields;
