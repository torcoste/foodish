/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import React from 'react';
import {name as appName} from '../app.json';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DiscoverScreen from 'screens/Discover';
import LocationsScreen from 'screens/Locations';
import OrdersScreen from 'screens/Orders';
import ProfileScreen from 'screens/Profile';

const AppNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarLabel: 'Discover',
        tabBarIcon: ({tintColor}) => (
          <Icon name={'silverware-fork-knife'} size={24} color={tintColor} />
        ),
      },
    },
    Locations: {
      screen: LocationsScreen,
      navigationOptions: {
        tabBarLabel: 'Locations',
        tabBarIcon: ({tintColor}) => (
          <Icon name={'home'} size={24} color={tintColor} />
        ),
      },
    },
    Orders: {
      screen: OrdersScreen,
      navigationOptions: {
        tabBarLabel: 'Orders',
        tabBarIcon: ({tintColor}) => (
          <Icon name={'package-variant'} size={24} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon name={'account'} size={24} color={tintColor} />
        ),
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
