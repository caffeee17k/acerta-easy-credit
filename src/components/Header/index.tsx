import * as React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';

import { theme } from '@/theme';
import { useNavigation } from '@/hooks/navigation';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backContainer}
        onPress={() => navigation.goBack()}>
        <Icon
          name="angle-left"
          size={24}
          color={theme.COLORS.ORANGE}
          iconStyle="solid"
        />
      </Pressable>

      <Text style={styles.title}>Criar conta</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: Platform.OS === 'ios' ? 16 : 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backContainer: {
    width: 40,
    height: 40,
    left: 24,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: theme.COLORS.WHITE,
  },
  title: {
    color: theme.COLORS.DARKBLUE,
    fontSize: 13,
    fontFamily: 'SofiaPro-Bold',
  },
});
