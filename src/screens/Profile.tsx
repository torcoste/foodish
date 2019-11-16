import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileScreen extends React.Component {
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
            height: (Dimensions.get('screen').height / 100) * 12,
            backgroundColor: item.color ? item.color : 'white',
            borderRadius: 1000,
          }}></View>
        <Text style={{marginTop: 8, color: 'white'}}>Achievment {index}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 18,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={styles.usernameText}>
              {'Sandy'.toLocaleUpperCase()}
            </Text>
            <TouchableOpacity>
              <Icon name="cog" size={30} color="rgba(255, 255, 255, 0.7)" />
            </TouchableOpacity>
          </View>
          <View style={styles.sliderContainer}>
            <Carousel
              ref={c => (this._slider1Ref = c)}
              data={ENTRIES1}
              renderItem={this.sliderRenderItem}
              sliderWidth={Dimensions.get('screen').width}
              itemWidth={150}
              firstItem={0}
              inactiveSlideScale={0.8}
              inactiveSlideOpacity={0.9}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={2500}
              onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
            />
          </View>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.7)',
              padding: 8,
              paddingHorizontal: 24,
              borderRadius: 1000,
              alignSelf: 'center',
              alignContent: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                alignContent: 'center',
                color: '#3b5998',
              }}>
              Ambassador
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.textBlockHeaderContainer}>
              <Text
                style={[styles.textBlockHeader, styles.textBlockHeaderHeading]}>
                12 Kg
              </Text>
              <Text style={styles.textBlockHeader}>waste reduced</Text>
            </View>
            <View style={styles.textBlockHeaderContainer}>
              <Text
                style={[styles.textBlockHeader, styles.textBlockHeaderHeading]}>
                +3
              </Text>
              <Text style={styles.textBlockHeader}>new friends</Text>
            </View>
            <View style={styles.textBlockHeaderContainer}>
              <Text
                style={[styles.textBlockHeader, styles.textBlockHeaderHeading]}>
                27 eur
              </Text>
              <Text style={styles.textBlockHeader}>saved</Text>
            </View>
          </View>
        </LinearGradient>
        <FlatList
          style={styles.body}
          data={menu}
          keyExtractor={({text}) => text}
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
    minHeight: 100,
  },
  body: {
    flex: 1,
  },
  textBlockHeader: {
    color: 'white',
    fontSize: 12,
  },
  textBlockHeaderHeading: {
    fontSize: 20,
    marginBottom: 4,
  },
  textBlockHeaderContainer: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 8,
  },
  usernameText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    flex: 1,
    zIndex: 9,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  sliderContainer: {
    //
  },
  menuItem: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 48,
  },
});

const ENTRIES1 = [
  {color: 'red'},
  {color: 'blue'},
  {color: 'green'},
  {color: 'yellow'},
];

const menu = [
  {id: 1, text: 'Menu 1'},
  {id: 2, text: 'Point 2'},
  {id: 3, text: 'There is 3'},
  {id: 4, text: '4st item'},
];
