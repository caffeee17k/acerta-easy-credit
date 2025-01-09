import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

import MainContainer from '@/components/MainContainer';
import Header from '@/components/Header';
import FormInput from '@/components/FormInput';
import { cpfApplyMask } from '@/utils/cpfMask';
import { useRegistrationStore } from '@/store/store';

const CPFRegistration = () => {
  const { userData, updateUserData } = useRegistrationStore();

  const [cpf, setCPF] = React.useState('');
  const [hasError, setHasError] = React.useState(false);

  function applyMask(input: string) {
    const onlyNumbers = input.replace(/\D/g, '');

    if (onlyNumbers.length > 11) {
      return;
    }

    const maskedValue = cpfApplyMask(onlyNumbers);
    setCPF(maskedValue);
  }

  React.useEffect(() => {
    const unmaskedCPF = cpf.replace(/\D/g, '');

    setHasError(!cpfValidator.isValid(unmaskedCPF));
  }, [cpf]);

  React.useEffect(() => {
    if (userData.cpf) {
      setCPF(userData.cpf);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer isDarkColor>
      <Header />

      <View style={styles.containerContent}>
        <FormInput
          fieldDescription="Digite seu"
          fieldName="CPF"
          inputPlaceholder="000.000.000-00"
          navigateTo="NameRegistration"
          errorText="Informe um CPF válido"
          value={cpf}
          setValue={applyMask}
          hasError={hasError}
          buttonDisabled={hasError}
          onPress={() => updateUserData('cpf', cpf)}
        />
      </View>
    </MainContainer>
  );
};

export default CPFRegistration;

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    marginTop: -50,
    justifyContent: 'center',
  },
});
