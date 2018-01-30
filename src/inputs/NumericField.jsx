import React from 'react';
import PropTypes from 'prop-types';

import { view, set } from '../lenses.js';

class NumericField extends React.PureComponent {
  static contextTypes = {
    root: PropTypes.object.isRequired
  }

  render() {
    const { lens } = this.props;
    const root = this.context.root;
    const value = view(lens, root);
    const onChange = e => set(lens, e.target.value, root);

    return (
      <input type="number" value={value} onChange={onChange} />
    );
  }
}

export default NumericField;
