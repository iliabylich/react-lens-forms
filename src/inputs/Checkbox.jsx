import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { value, onChange, name } = this.props;

    return (
      <input type="checkbox" checked={value} onChange={onChange} name={name} />
    );
  }
}

export default Checkbox;
