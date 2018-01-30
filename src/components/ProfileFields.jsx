import React from 'react';

import TextInput from '../inputs/TextInput.jsx';
import Checkbox from '../inputs/Checkbox.jsx';

class ProfileFields extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div>
        <TextInput value={value.get('name')}  onChange={onChange} name="name" />
        <TextInput value={value.get('age')}   onChange={onChange} name="age" />
        <Checkbox  value={value.get('agree')} onChange={onChange} name="agree" />
      </div>
    );
  }
}

export default ProfileFields;
