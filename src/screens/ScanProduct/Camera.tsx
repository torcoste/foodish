import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import RoundedButton from 'components/Buttons/RoundedButton';
import RegularButton from 'components/Buttons/RegularButton';

export default class ScanCameraScreen extends React.Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
