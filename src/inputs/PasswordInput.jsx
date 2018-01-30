import React from 'react';
import { view, set } from '../lenses.js';

class PasswordField extends React.Component {
  render() {
    const { root, lens } = this.props;
    const value = view(lens, root);
    const onChange = e => set(lens, e.target.value, root);

    return (
      <input type="password" value={value} onChange={onChange} />
    );
  }
}

export default PasswordField;
