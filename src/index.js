/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Details from './screens/Details';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Details: Details,
  },
  {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
  },
);

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
