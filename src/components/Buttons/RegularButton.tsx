import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  color?: string;
  textColor?: string;
  onPress?: () => void;
  text: string;
}

export default class RegularButton extends React.Component<Props> {
  render() {
    const {
      style,
      color = 'red',
      onPress,
      text,
      textColor = 'white',
    } = this.props;

    const colorStyle = {backgroundColor: color};

    return (
      <TouchableOpacity
        onPressIn={onPress}
        style={[styles.container, colorStyle, style]}>
        <Text
          style={{color: textColor, fontWeight: '700', textAlign: 'center'}}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4000,
    minHeight: 40,
    marginBottom: 4,
    paddingVertical: 18,
    paddingHorizontal: 32,
  },
});
