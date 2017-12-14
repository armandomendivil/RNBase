import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const Constants = {
  Language: 'en',
  EmitCode: {
    SideMenuOpen: 'emit.side.open',
    sideMenuClode: 'emit.side.close',
    Toast: 'toast',
    MenuReload: 'menu.reload',
  },
};

export default Constants;
