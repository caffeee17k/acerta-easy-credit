import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import MainContainer from '@/components/MainContainer';
import Header from '@/components/Header';
import FormInput from '@/components/FormInput';
import { isValidPassword } from '@/utils/passwordValidation';
import { useRegistrationStore } from '@/store/store';
import { useNavigation } from '@/hooks/navigation';
import { createUser } from '@/controllers/CreateUser';

const PasswordRegistration = () => {
  const navigation = useNavigation();

  const { clearUserData, updateUserData } = useRegistrationStore();

  const [password, setPassword] = React.useState('');
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setHasError(!isValidPassword(password));
  }, [password]);

  return (
    <MainContainer isDarkColor>
      <Header />

      <View style={styles.containerContent}>
        <FormInput
          isPassword
          fieldDescription="Para segurança, crie uma"
          fieldName="SENHA"
          inputPlaceholder="Escolha uma senha segura"
          value={password}
          setValue={setPassword}
          errorText={
            '• Mínimo de 8 caracteres.\n• Pelo menos uma letra maiúscula, uma letra minúscula e um caractere especial.'
          }
          hasError={hasError}
          buttonDisabled={hasError}
          onPress={() => {
            updateUserData('password', password, userData => {
              createUser({
                document: userData.cpf,
                name: userData.name,
                email: userData.email,
                password: userData.password,
              }).then(() => {
                clearUserData();
                navigation.navigate('SucessfulRegistration');
              });
            });
          }}
        />
      </View>
    </MainContainer>
  );
};

export default PasswordRegistration;

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    marginTop: -50,
    justifyContent: 'center',
  },
});
