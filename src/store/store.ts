import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserData {
  cpf: string;
  name: string;
  email: string;
  password: string;
}

interface RegistrationStore {
  userData: UserData;
  updateUserData: (
    key: keyof UserData,
    value: string,
    callback?: (data: UserData) => void,
  ) => void;
  clearUserData: () => void;
}

export const useRegistrationStore = create<RegistrationStore>()(
  persist(
    set => ({
      userData: {
        cpf: '',
        name: '',
        email: '',
        password: '',
      },
      updateUserData: (key, value, callback) =>
        set(state => {
          const updateData = { ...state.userData, [key]: value };
          callback?.(updateData);
          return { userData: updateData };
        }),
      clearUserData: () =>
        set({
          userData: {
            cpf: '',
            name: '',
            email: '',
            password: '',
          },
        }),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
