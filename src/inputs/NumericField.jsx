import React from 'react';
import { view, set } from '../lenses.js';

class NumericField extends React.Component {
  render() {
    const { root, lens } = this.props;
    const value = view(lens, root);
    const onChange = e => set(lens, e.target.value, root);

    return (
      <input type="number" value={value} onChange={onChange} />
    );
  }
}

export default NumericField;
