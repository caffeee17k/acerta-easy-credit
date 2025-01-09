import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import MainContainer from '@/components/MainContainer';
import Header from '@/components/Header';
import FormInput from '@/components/FormInput';
import { useRegistrationStore } from '@/store/store';

const NameRegistration = () => {
  const { updateUserData } = useRegistrationStore();

  const [name, setName] = React.useState('');
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (name.length <= 3) {
      setHasError(true);
      return;
    }
    setHasError(false);
  }, [name]);

  return (
    <MainContainer isDarkColor>
      <Header />

      <View style={styles.containerContent}>
        <FormInput
          fieldDescription="Tudo certo, agora informe seu"
          fieldName="NOME"
          inputPlaceholder="Digite aqui"
          navigateTo="EmailRegistration"
          value={name}
          setValue={setName}
          hasError={hasError}
          buttonDisabled={hasError}
          onPress={() => updateUserData('name', name)}
        />
      </View>
    </MainContainer>
  );
};

export default NameRegistration;

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    marginTop: -50,
    justifyContent: 'center',
  },
});
