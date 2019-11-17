/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from '../app.json';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from 'screens/Home';
import DiscoverScreen from 'screens/Discover';
import ProfileScreen from 'screens/Profile';

import ScanStep1Screen from 'screens/ScanProduct/Step1';
import ScanCameraScreen from 'screens/ScanProduct/Camera';
import SelectProductsScreen from 'screens/ScanProduct/SelectProducts';
import SelectedProductsScreen from 'screens/ScanProduct/SelectedProducts';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerMode: 'none',
        header: null,
      },
    },
    ScanStep1: {
      screen: ScanStep1Screen,
    },
    ScanCamera: {
      screen: ScanCameraScreen,
      navigationOptions: {
        headerMode: 'none',
        header: null,
      },
    },
    SelectProducts: {
      screen: SelectProductsScreen,
    },
    SelectedProducts: {
      screen: SelectedProductsScreen,
    },
  },
  {initialRouteName: 'Home'},
);

HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'ScanCamera') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
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
