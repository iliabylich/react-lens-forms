import React from 'react';

import TextInput from '../inputs/TextInput.jsx';

class AddressFields extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div>
        <TextInput value={value.get('country')} onChange={onChange} name="country" />
        <TextInput value={value.get('city')}    onChange={onChange} name="city" />
        <TextInput value={value.get('street')}  onChange={onChange} name="street" />
      </div>
    );
  }
}

export default AddressFields;
