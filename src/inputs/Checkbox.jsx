import React from 'react';
import { view, set } from '../lenses.js';

class Checkbox extends React.Component {
  render() {
    const { root, lens } = this.props;
    const value = view(lens, root);
    const onChange = e => set(lens, e.target.checked, root);

    return (
      <input type="checkbox" checked={value} onChange={onChange} />
    );
  }
}

export default Checkbox;
