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

import HomeScreen from 'screens/Home';
import DiscoverScreen from 'screens/Discover';
import ProfileScreen from 'screens/Profile';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon name={'home'} size={24} color={tintColor} />
        ),
      },
    },
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarLabel: 'Discover',
        tabBarIcon: ({tintColor}) => (
          <Icon name={'silverware-fork-knife'} size={24} color={tintColor} />
        ),
      },
    },
    Achievements: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Achievements',
        tabBarIcon: ({tintColor}) => (
          <Icon name={'trophy-variant'} size={24} color={tintColor} />
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
    initialRouteName: 'Home',
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
