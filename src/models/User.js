import { Record } from 'immutable';

import Profile from './Profile.js';
import Address from './Address.js';

const userDefaults = {
  email: '',
  password: '',
  profile: new Profile(),
  address: new Address()
};

class User extends Record(userDefaults) {

}

export default User
