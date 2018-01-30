import { Record } from 'immutable';

const addressDefaults = {
  country: '',
  city: '',
  street: ''
};

class Address extends Record(addressDefaults) {

}

export default Address;
