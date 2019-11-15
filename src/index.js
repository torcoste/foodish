/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import React from 'react';
import {name as appName} from '../app.json';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import DiscoverScreen from './screens/Discover';
import LocationsScreen from './screens/Locations';
import OrdersScreen from './screens/Orders';
import ProfileScreen from './screens/Profile';

const AppNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarLabel: 'Discover',
        tabBarIcon: ({tintColor}) => <Text>sda</Text>,
      },
    },
    Locations: {
      screen: LocationsScreen,
      navigationOptions: {
        tabBarLabel: 'Locations',
        tabBarIcon: ({tintColor}) => <Text>sda</Text>,
      },
    },
    Orders: {
      screen: OrdersScreen,
      navigationOptions: {
        tabBarLabel: 'Orders',
        tabBarIcon: ({tintColor}) => <Text>sda</Text>,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => <Text>sda</Text>,
      },
    },
  },
  {
    initialRouteName: 'Discover',
    header: null,
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {},
    },
  },
);

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
