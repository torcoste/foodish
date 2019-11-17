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

export default class SelectedProductsScreen extends React.Component {
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
        name="check"
        size={24}
        color="rgba(0, 0, 0, 0.7)"
        style={{marginRight: 8}}
      />
      <Text style={{flex: 1}}>Apple</Text>
      <TextInput
        style={{height: 40}}
        value={Math.round(Math.random() * 2 + 1).toString()}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18}}>Choosen items:</Text>
        <FlatList
          data={products}
          renderItem={this.renderProductItem}
          keyExtractor={item => item.id}
        />
        <View style={{padding: 8}}>
          <Text style={{fontSize: 18, marginBottom: 8}}>Choose Action:</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 18,
            }}>
            <Icon
              name="magnify"
              size={32}
              color="rgba(0, 0, 0, 0.7)"
              style={{marginRight: 18}}
            />
            <Text style={{fontSize: 20}}>Find recipe</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 18,
            }}>
            <Icon
              name="content-save-outline"
              size={32}
              color="rgba(0, 0, 0, 0.7)"
              style={{marginRight: 18}}
            />
            <Text style={{fontSize: 20}}>Preservation inp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 18,
            }}>
            <Icon
              name="auto-fix"
              size={32}
              color="rgba(0, 0, 0, 0.7)"
              style={{marginRight: 18}}
            />
            <Text style={{fontSize: 20}}>DIY ideas</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const products = [{id: '1'}, {id: '2'}, {id: '3'}];

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
