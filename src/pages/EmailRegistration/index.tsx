import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import MainContainer from '@/components/MainContainer';
import Header from '@/components/Header';
import FormInput from '@/components/FormInput';
import { isValidEmail } from '@/utils/emailValidation';
import { useRegistrationStore } from '@/store/store';

const EmailRegistration = () => {
  const { updateUserData } = useRegistrationStore();

  const [email, setEmail] = React.useState('');
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (!isValidEmail(email)) {
      setHasError(true);
      return;
    }
    setHasError(false);
  }, [email]);

  return (
    <MainContainer isDarkColor>
      <Header />

      <View style={styles.containerContent}>
        <FormInput
          hasLowerCase
          fieldDescription="Para notificações, informe seu"
          fieldName="E-MAIL"
          inputPlaceholder="exemplo@exemplo.com"
          navigateTo="PasswordRegistration"
          value={email}
          setValue={setEmail}
          hasError={hasError}
          buttonDisabled={hasError}
          onPress={() => updateUserData('email', email)}
        />
      </View>
    </MainContainer>
  );
};

export default EmailRegistration;

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    marginTop: -50,
    justifyContent: 'center',
  },
});
