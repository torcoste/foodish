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
  icon?: string;
  onPress?: () => void;
  text: string;
}

export default class RoundedButton extends React.Component<Props> {
  render() {
    const {style, color = 'red', icon, onPress, text} = this.props;

    const colorStyle = {backgroundColor: color};

    return (
      <TouchableOpacity
        onPressIn={onPress}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={[styles.container, colorStyle, style]}>
        <Icon name={icon} size={24} color="rgba(255, 255, 255, 0.7)" />
        </View>
        <Text style={{color: "rgba(0, 0, 0, 0.4)"}}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    borderRadius: 4000,
    minHeight: 40,
    marginBottom: 4,
  },
});
