import React from 'react';

class PasswordField extends React.Component {
  render() {
    const { value, onChange, name } = this.props;

    return (
      <input type="password" value={value} onChange={onChange} name={name} />
    );
  }
}

export default PasswordField;
