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
  TextInput,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from 'react-native-check-box';

import RoundedButton from 'components/Buttons/RoundedButton';
import RegularButton from 'components/Buttons/RegularButton';
import {FlatList} from 'react-native-gesture-handler';

export default class SelectProductsScreen extends React.Component {
  readonly state = {};

  static navigationOptions = {
    title: 'Select products',
  };

  renderProductItem = ({item, index}) => (
    <View
      key={index}
      style={{
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
        paddingVertical: 18,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon
        name={item.icon}
        size={24}
        color="rgba(0, 0, 0, 0.7)"
        style={{marginRight: 8}}
      />
      <Text style={{flex: 1}}>{item.name}</Text>
      <TextInput style={{height: 40}} value={item.count.toString()} />
      <CheckBox style={{padding: 10}} onClick={() => {}} isChecked={true} />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: Dimensions.get('screen').width,
          }}>
          <Text style={{fontSize: 18}}>Select items to use</Text>
          <RegularButton
            text="Select all"
            color="gray"
            style={{width: 130, marginRight: 30}}
          />
        </View>
        <FlatList
          data={products}
          renderItem={this.renderProductItem}
          keyExtractor={item => item.id}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: Dimensions.get('screen').width,
            paddingRight: 40,
          }}>
          <RegularButton
            text="New Scan"
            onPress={() => this.props.navigation.goBack()}
            style={{flex: 1, marginRight: 4}}
          />
          <RegularButton
            text="Next"
            onPress={() => this.props.navigation.navigate('SelectedProducts')}
            style={{flex: 1, marginLeft: 4}}
          />
        </View>
      </View>
    );
  }
}

const products = [
  {id: '1', name: 'Egg', icon: 'egg', count: 3},
  {id: '2', name: 'Milk', icon: 'cup-water', count: 1},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 18,
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
