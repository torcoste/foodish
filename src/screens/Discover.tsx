/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    // title: "Home",
    headerTitle: () => <Text> Home </Text>,
    headerRight: () => (
      <Button
        onPress={() => Alert.alert('This is a button!')}
        title="Button"
        color="#000"
      />
    ),
  };

  usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;

  renderInner = () => <View style={styles.panel}></View>;

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
          snapPoints={['70%', '60%', '50%', 250, 50]}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={1}
        />
        <TouchableWithoutFeedback onPress={() => this.bs.current.snapTo(0)}>
          <Image style={styles.map} source={require('../assets/map-bg.jpg')} />
        </TouchableWithoutFeedback>
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
    height: 600,
    padding: 20,
    backgroundColor: '#f7f5eeee',
  },
  header: {
    backgroundColor: '#f7f5eee8',
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
});
