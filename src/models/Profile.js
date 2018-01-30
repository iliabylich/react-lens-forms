import { Record } from 'immutable';

const profileDefaults = {
  name: '',
  age: 0,
  agree: false
};

class Profile extends Record(profileDefaults) {

}

export default Profile;
