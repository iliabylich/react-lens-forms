import React from 'react';

import TextInput from '../inputs/TextInput.jsx';
import Checkbox from '../inputs/Checkbox.jsx';
import NumericField from '../inputs/NumericField.jsx';
import { mapPropLens, compose } from '../lenses.js';

class ProfileFields extends React.Component {
  render() {
    const { root, lens } = this.props;

    return (
      <div>
        <TextInput    root={root} lens={compose(lens, mapPropLens('name'))} />
        <NumericField root={root} lens={compose(lens, mapPropLens('age'))} />
        <Checkbox     root={root} lens={compose(lens, mapPropLens('agree'))} />
      </div>
    );
  }
}

export default ProfileFields;
