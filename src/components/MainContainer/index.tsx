import { theme } from '@/theme';
import * as React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MainContainerProps {
  children: React.ReactNode;
  isDarkColor?: boolean;
}

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  isDarkColor,
}) => {
  return (
    <SafeAreaView
      edges={['right', 'left', 'top', 'bottom']}
      style={[styles.container, isDarkColor && styles.darkContainer]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardAvoidingView}>
          {children}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: theme.COLORS.LIGHTGRAY,
  },
});
