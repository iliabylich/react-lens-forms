import React from 'react';
import PropTypes from 'prop-types';
import { Lens, PropertyLens } from 'react-state-focus';

class Checkbox extends React.PureComponent {
  static propTypes = {
    lens: PropTypes.instanceOf(Lens)
  };

  render() {
    const { lens } = this.props;

    return (
      <input
        type="checkbox"
        checked={lens.view()}
        onChange={e => lens.set(e.target.checked)}
      />
    );
  }
}

export default Checkbox;
