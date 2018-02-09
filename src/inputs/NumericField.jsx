import React from 'react';
import PropTypes from 'prop-types';
import { Lens, PropertyLens } from 'react-state-focus';

class NumericField extends React.PureComponent {
  static propTypes = {
    lens: PropTypes.instanceOf(Lens)
  };

  render() {
    const { lens } = this.props;

    return (
      <input
        type="number"
        value={lens.view()}
        onChange={e => lens.set(e.target.value)}
      />
    );
  }
}

export default NumericField;
