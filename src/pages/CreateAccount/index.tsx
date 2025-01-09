import * as React from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import ViaCertaLogo from '@/assets/viacerta.svg';
import MainContainer from '@/components/MainContainer';
import Button from '@/components/Button';
import { useNavigation } from '@/hooks/navigation';
import { useRegistrationStore } from '@/store/store';
import { RootStackParamList } from '@/stacks/types';

const CreateAccount = () => {
  const navigation = useNavigation();

  const { clearUserData, userData } = useRegistrationStore();

  const [hasAlertBeenShown, setHasAlertBeenShown] = React.useState(false);

  const getNextScreen = (): keyof RootStackParamList => {
    if (!userData.name) {
      return 'NameRegistration';
    }
    if (!userData.email) {
      return 'EmailRegistration';
    }
    if (!userData.password) {
      return 'PasswordRegistration';
    }
    return 'CreateAccount';
  };

  React.useEffect(() => {
    const hasData = Object.values(userData).some(value => value !== '');
    if (hasData && !hasAlertBeenShown) {
      setHasAlertBeenShown(true);
      Alert.alert(
        'Continuar cadastro?',
        'Deseja continuar o cadastro já iniciado ou começar um novo?',
        [
          {
            text: 'Não',
            onPress: () => clearUserData(),
            style: 'destructive',
          },
          {
            text: 'Sim',
            onPress: () => {
              const nextScreen = getNextScreen();
              navigation.navigate(nextScreen);
            },
          },
        ],
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, hasAlertBeenShown]);

  return (
    <MainContainer>
      <View style={styles.containerContent}>
        <View />

        <View style={styles.logoContainer}>
          <ViaCertaLogo />
        </View>

        <Button
          title="CRIAR CONTA"
          onPress={() => navigation.navigate('CPFRegistration')}
        />
      </View>
    </MainContainer>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  logoContainer: {
    marginTop: -40,
    padding: 32,
    borderRadius: 100,
    alignItems: 'center',
    boxShadow: '0 10 10 0 rgba(0, 0, 0, 0.1)',
  },
});
