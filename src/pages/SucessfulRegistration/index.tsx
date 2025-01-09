import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import MainContainer from '@/components/MainContainer';
import SucessImage from '@/assets/sucess.png';
import { useNavigation } from '@/hooks/navigation';

const SucessfulRegistration = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'CreateAccount' }],
      });
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <MainContainer>
      <View style={styles.containerContent}>
        <Image source={SucessImage} style={styles.image} resizeMode="contain" />
      </View>
    </MainContainer>
  );
};

export default SucessfulRegistration;

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
