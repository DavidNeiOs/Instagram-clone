import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import {HomeScreen} from '../screens/home-screen';
import {ProfileScreen} from '../screens/profile-screen';
//@ts-ignore
import logo from '../assets/images/logo.png';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Feed">
      <HomeStack.Screen
        name="Feed"
        component={HomeScreen}
        options={{headerTitle: HeaderTitle}}
      />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{width: 150, height: 40}}
    />
  );
};

export default HomeStackNavigator;
