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
import RegularButton from '../components/Buttons/RegularButton';

export default class HomeScreen extends React.Component {
  renderInner = () => (
    <View style={styles.panel}>
      <View style={styles.roundedButtonsContainer}>
        <RoundedButton
          color="#fb5b83"
          text="Meals"
          icon={'silverware-fork-knife'}
        />
        <RoundedButton
          color="#f3a407"
          text="Bread"
          icon={'bread-slice-outline'}
        />
        <RoundedButton color="#ae66ff" text="Sweets" icon={'cake-variant'} />
        <RoundedButton color="#3585bd" text="Groceryes" icon={'food-variant'} />
      </View>
      <View style={styles.separator} />
      <View style={styles.card}>
        <Text style={styles.cardHeading}>Extra Ingridients? 😏</Text>
        <Text style={styles.cardSubheading}>Do you have something... 😉</Text>
        <RegularButton text="SCAN PRODUCTS" color="#f3a407" />
      </View>
      <View style={[styles.card]}>
        <Text style={styles.cardHeading}>Give ingrisients, get Potnts ⚪️</Text>
        <RegularButton text="Help Find New home for Products" color="#fb5b83" />
      </View>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();

  render() {
    return (
      <View style={styles.container}>
        <BottomSheet
          ref={this.bs}
          snapPoints={['63%', 130]}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={0}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            this.bs.current.snapTo(0);
          }}>
          <Image style={styles.map} source={require('assets/map-bg.jpg')} />
        </TouchableWithoutFeedback>
        <View style={styles.leftButtonsGroup}>
          <TouchableOpacity style={styles.burgerButton}>
            <Icon name="menu" size={30} color="rgba(0, 0, 0, 0.7)" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.yourLocationButton}>
            <Icon
              name="map-marker-outline"
              size={24}
              color="rgba(200, 30, 30, 0.7)"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.notificationsButton}>
          <Icon name="bell" size={30} color="rgba(7, 10, 180, 0.68)" />
        </TouchableOpacity>
      </View>
    );
  }
}

const IMAGE_SIZE = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  roundedButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  notificationsButton: {
    height: 60,
    width: 100,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    top: Platform.OS === 'android' ? 10 : 40,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButtonsGroup: {
    height: 60,
    position: 'absolute',
    top: Platform.OS === 'android' ? 10 : 40,
    left: 10,
    alignItems: 'center',
  },
  burgerButton: {
    height: 60,
    width: 60,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yourLocationButton: {
    height: 45,
    width: 45,
    marginTop: 10,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: 540,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    shadowColor: '#000000',
    paddingTop: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  map: {
    height: '100%',
    width: '100%',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    marginHorizontal: -18,
    marginVertical: 18,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 180,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    marginBottom: 30,
    padding: 18,
    justifyContent: 'space-evenly',
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
