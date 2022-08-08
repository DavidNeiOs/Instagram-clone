import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';

//@ts-ignore
import logo from '../assets/images/logo.png';
import {CommentsScreen} from '../screens/comments-screen';
import BottomTabNavigator from './bottom-tab-navigator';

const MainStack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={BottomTabNavigator} />
        <MainStack.Screen name="Comments" component={CommentsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{width: 120, height: 40}}
    />
  );
};
