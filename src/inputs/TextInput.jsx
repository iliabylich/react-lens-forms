import React from 'react';
import PropTypes from 'prop-types';

import { Lens } from '../lenses.js';

class TextInput extends React.PureComponent {
  static propTypes = {
    lens: PropTypes.instanceOf(Lens)
  };

  render() {
    const { lens } = this.props;

    return (
      <input
        type="text"
        value={lens.view()}
        onChange={e => lens.set(e.target.value)}
      />
    );
  }
}

export default TextInput;
