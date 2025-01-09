import * as React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';

import Button from '../Button';
import { theme } from '@/theme';
import { RootStackParamList } from '@/stacks/types';
import { useNavigation } from '@/hooks/navigation';

interface FormInputProps {
  onPress: () => void;
  navigateTo?: keyof RootStackParamList;
  inputPlaceholder: string;
  hasError: boolean;
  errorText?: string;
  fieldDescription: string;
  fieldName: string;
  value: string;
  setValue: (value: string) => void;
  buttonDisabled: boolean;
  hasLowerCase?: boolean;
  isPassword?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  onPress,
  navigateTo,
  inputPlaceholder = 'Not filled',
  hasError,
  errorText,
  fieldDescription,
  fieldName = 'Not filled',
  value,
  setValue,
  buttonDisabled,
  hasLowerCase,
  isPassword,
}) => {
  const navigation = useNavigation();

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{fieldDescription}</Text>
        <Text style={styles.fieldName}>{fieldName}</Text>
      </View>

      <View>
        <TextInput
          autoFocus
          autoCapitalize={hasLowerCase ? 'none' : undefined}
          secureTextEntry={!isPasswordVisible && isPassword}
          value={value}
          onChangeText={setValue}
          placeholder={inputPlaceholder}
          placeholderTextColor={theme.COLORS.GRAY}
          style={styles.input}
        />

        {isPassword && (
          <Pressable
            style={styles.iconContainer}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? (
              <Icon
                name="eye-slash"
                size={24}
                color={theme.COLORS.ORANGE}
                iconStyle="solid"
              />
            ) : (
              <Icon
                name="eye"
                size={24}
                color={theme.COLORS.ORANGE}
                iconStyle="solid"
              />
            )}
          </Pressable>
        )}
      </View>

      {hasError && errorText && (
        <Text style={styles.errorText}>{errorText}</Text>
      )}

      <View style={styles.buttonContainer}>
        <Button
          title="PRÓXIMA"
          disabled={buttonDisabled}
          onPress={() => {
            onPress();
            navigateTo && navigation.navigate(navigateTo);
          }}
        />
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 32,
    backgroundColor: theme.COLORS.WHITE,
  },
  buttonContainer: { marginTop: 32 },
  input: {
    height: 40,
    fontSize: 13,
    fontFamily: 'SofiaPro-Bold',
    borderBottomWidth: 1,
    borderBottomColor: theme.COLORS.LIGHTBLUE,
  },
  errorText: {
    marginTop: 16,
    fontSize: 13,
    fontFamily: 'SofiaPro-Bold',
    color: theme.COLORS.RED,
  },
  label: {
    fontSize: 13,
    fontFamily: 'SofiaPro-Bold',
    color: theme.COLORS.DARKBLUE,
  },
  fieldName: {
    marginTop: 8,
    fontSize: 24,
    lineHeight: 24,
    fontFamily: 'SofiaPro-Bold',
    color: theme.COLORS.ORANGE,
  },
  textContainer: { marginTop: 24 },
  iconContainer: {
    width: 40,
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
  },
});
