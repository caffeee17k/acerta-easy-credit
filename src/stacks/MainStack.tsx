import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateAccount from '@/pages/CreateAccount';
import CPFRegistration from '@/pages/CPFRegistration';
import NameRegistration from '@/pages/NameRegistration';
import EmailRegistration from '@/pages/EmailRegistration';
import PasswordRegistration from '@/pages/PasswordRegistration';
import SucessfulRegistration from '@/pages/SucessfulRegistration';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="CPFRegistration" component={CPFRegistration} />
      <Stack.Screen name="NameRegistration" component={NameRegistration} />
      <Stack.Screen name="EmailRegistration" component={EmailRegistration} />
      <Stack.Screen
        name="PasswordRegistration"
        component={PasswordRegistration}
      />
      <Stack.Screen
        name="SucessfulRegistration"
        component={SucessfulRegistration}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
