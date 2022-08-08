import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditProfileScreen} from '../screens/edit-profile-screen';
import {ProfileScreen} from '../screens/profile-screen';

const ProfileStack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
