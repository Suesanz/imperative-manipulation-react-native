import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface ButtonProps {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
}
export const Button: React.FunctionComponent<ButtonProps> = ({
  onPress,
  label,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.utilButton, style]}
      onPress={onPress}>
      <Text style={styles.utilButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  utilButton: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B83EA',
    margin: 10,
    borderRadius: 4,
  },
  utilButtonText: {
    color: '#FFFFFF',
    marginHorizontal: 12,
  },
});
