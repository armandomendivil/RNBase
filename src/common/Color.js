import { Platform } from 'react-native';

export default {
  error: '#f44336',
  main: '#fff',
  primary: Platform.OS !== 'ios' ? '#00BCD4' : 'rgb(251, 251, 251)',

  lightTextPrimary: 'rgba(255,255,255,1)',
}
