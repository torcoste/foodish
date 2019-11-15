/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import React from 'react';
import {name as appName} from '../app.json';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './screens/Home';
import Details from './screens/Details';

const AppNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Discover',
        tabBarIcon: ({tintColor}) => <Text>sda</Text>,
      },
    },
    Locations: {
      screen: Details,
      navigationOptions: {
        tabBarLabel: 'Locations',
        tabBarIcon: ({tintColor}) => <Text>sda</Text>,
      },
    },
    Orders: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Orders',
        tabBarIcon: ({tintColor}) => <Text>sda</Text>,
      },
    },
    Profile: {
      screen: Details,
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
