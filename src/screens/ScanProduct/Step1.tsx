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
  Dimensions,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import RoundedButton from 'components/Buttons/RoundedButton';
import RegularButton from 'components/Buttons/RegularButton';

export default class ScanStep1Screen extends React.Component {
  static navigationOptions = {
    title: 'What you have?',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            this.props.navigation.navigate('ScanCamera');
            //this.props.navigation.navigate('SelectProducts');
          }}>
          <Icon name="camera-outline" size={64} color="rgba(0, 0, 0, 0.7)" />
          <Text style={styles.cardHeading}>Scan a Product</Text>
        </TouchableOpacity>

        <Text
          style={{
            alignSelf: 'center',
            padding: (Dimensions.get('screen').height / 100) * 5,
            fontSize: 18,
          }}>
          OR
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardHeading}>Enter Manually ✍️</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 18,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: (Dimensions.get('screen').height / 100) * 27,
    maxHeight: 180,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeading: {
    fontSize: 22,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 8,
  },
  cardSubheading: {
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 8,
  },
});
