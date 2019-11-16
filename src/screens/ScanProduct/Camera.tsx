import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {CameraKitCameraScreen} from 'react-native-camera-kit';

export default class ScanCameraScreen extends React.Component {
  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    switch (event.type) {
      case 'left':
        return this.props.navigation.goBack();
    }
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <CameraKitCameraScreen
          actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
          onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
          flashImages={{
            on: require('assets/cameraIcons/flashOn.png'),
            off: require('assets/cameraIcons/flashOff.png'),
            auto: require('assets/cameraIcons/flashAuto.png'),
          }}
          cameraFlipImage={require('assets/cameraIcons/cameraFlipIcon.png')}
          captureButtonImage={require('assets/cameraIcons/cameraButton.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
