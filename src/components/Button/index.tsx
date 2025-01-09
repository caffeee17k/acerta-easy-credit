import { theme } from '@/theme';
import * as React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, disabled, onPress }) => {
  return (
    <Pressable
      style={[styles.button, disabled && styles.buttonDisabled]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title ? title : 'Empty title'}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.COLORS.ORANGE,
    padding: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: theme.COLORS.GRAY,
  },
  buttonText: {
    color: theme.COLORS.WHITE,
    fontSize: 13,
    fontFamily: 'SofiaPro-Bold',
  },
});
