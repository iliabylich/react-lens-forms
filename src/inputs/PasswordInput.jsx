import React from 'react';
import PropTypes from 'prop-types';

import { Lens } from '../lenses.js';

class PasswordField extends React.PureComponent {
  static propTypes = {
    lens: PropTypes.instanceOf(Lens)
  };

  render() {
    const { lens } = this.props;

    return (
      <input
        type="password"
        value={lens.view()}
        onChange={e => lens.set(e.target.value)}
      />
    );
  }
}

export default PasswordField;
