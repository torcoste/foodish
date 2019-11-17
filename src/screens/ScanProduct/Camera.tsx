import React from 'react';
import {StyleSheet, View, Alert, PermissionsAndroid} from 'react-native';
import {CameraKitCameraScreen} from 'react-native-camera-kit';

interface State {
  isPermitted: boolean;
}

export default class ScanCameraScreen extends React.Component<State> {
  readonly state: State = {
    isPermitted: false,
  };

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

  componentDidMount() {
    this.checkPremission();
  }

  checkPremission() {
    // TODO: move premissionsRequest to separated module
    var that = this;
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'We need your camera',
              message: 'Shall we?',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            //Calling the WRITE_EXTERNAL_STORAGE permission function
            requestExternalWritePermission();
          } else {
            Alert.alert('Camera acces denied!');
          }
        } catch (err) {
          Alert.alert('Camera permissions error', err);
          console.warn(err);
        }
      }
      async function requestExternalWritePermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'We need to write your storage',
              message: 'Shall we?',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If WRITE_EXTERNAL_STORAGE Permission is granted
            //Calling the READ_EXTERNAL_STORAGE permission function
            requestExternalReadPermission();
          } else {
            Alert.alert('Write External storage acces denied!');
          }
        } catch (err) {
          Alert.alert('Write External storage error', err);
          console.warn(err);
        }
      }
      async function requestExternalReadPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title: 'We need to read your storage',
              message: 'Shall we?',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If READ_EXTERNAL_STORAGE Permission is granted
            //changing the state to re-render and open the camera
            //in place of activity indicator
            that.setState({isPermitted: true});
          } else {
            Alert.alert('Read External storage acces denied!');
          }
        } catch (err) {
          Alert.alert('Read External storage error', err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    } else {
      this.setState({isPermitted: true});
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isPermitted ? (
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
        ) : null}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
