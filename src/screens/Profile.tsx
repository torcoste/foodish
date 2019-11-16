import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import {FlatList} from 'react-native-gesture-handler';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    // title: "Home",
    headerTitle: () => <Text> Details </Text>,
    headerRight: () => (
      <Button
        onPress={() => Alert.alert('This is a button!')}
        title="Info"
        color="#000"
      />
    ),
  };

  usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;

  sliderRenderItem({item, index}) {
    return (
      <View
        style={{
          paddingHorizontal: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            aspectRatio: 1,
            height: 100,
            backgroundColor: item.color ? item.color : 'white',
            borderRadius: 1000,
          }}></View>
        <Text style={{marginTop: 8}}>Achievment {index}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.header}>
          <Text style={styles.usernameText}>{'Sandy'.toLocaleUpperCase()}</Text>
          <View style={styles.sliderContainer}>
            <Carousel
              ref={c => (this._slider1Ref = c)}
              data={ENTRIES1}
              renderItem={this.sliderRenderItem}
              sliderWidth={Dimensions.get('screen').width}
              itemWidth={150}
              firstItem={1}
              inactiveSlideScale={0.7}
              inactiveSlideOpacity={0.7}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={2000}
              onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
            />
          </View>
        </LinearGradient>
        <FlatList
          style={styles.body}
          data={menu}
          keyExtractor={({text}) => (text)}
          renderItem={({item, index}) => (
            <TouchableOpacity style={styles.menuItem} key={index}>
              <Text style={{fontSize: 18}}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  body: {
    flex: 1,
  },
  usernameText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    marginTop: Platform.OS === 'android' ? 10 : 40,
  },
  sliderContainer: {
    paddingVertical: 30,
  },
  menuItem: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    padding: 10,
    paddingLeft: 24
  },
});

const ENTRIES1 = [
  {color: 'red'},
  {color: 'blue'},
  {color: 'green'},
  {color: 'yellow'},
];

const menu = [{id: 1, text: 'Menu 1'}, {id: 2, text: 'Point 2'}, {id: 3, text: 'There is 3'}, {id: 4, text: '4st item'}];
