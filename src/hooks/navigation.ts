import {
  useNavigation as useNativeNavigation,
  NavigationProp,
} from '@react-navigation/native';

import { RootStackParamList } from '@/stacks/types';

export const useNavigation = () => {
  return useNativeNavigation<NavigationProp<RootStackParamList>>();
};
