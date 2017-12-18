import { Dimensions, Platform } from 'react-native';
const _height = Dimensions.get('window').height;
const { height, width } = Dimensions.get('window');
const { heightWindow } = Dimensions.get('window');
import Constants from './Constants';
import Device from './Device'
import Color from './Color';
import Config from './Config';

let Styles = {
  width: Dimensions.get('window').width,
  height: Platform.OS !== 'ios' ? _height : (_height - 20),
  navBarHeight: Platform !== 'ios' ? (height - heightWindow) : 0,
  headerHeight: Platform.OS === 'ios' ? 40 : 56,

  thumbnailRatio: 1.2,

  app: {
    flexGrow: 1,
    backgroundColor: Color.main,
    paddingTop: Device.ToolbarHeight
  },
  FontSize: {
    tiny: 12,
    small: 14,
    medium: 16,
    big: 18,
    large: 20,
  },
  IconSize: {
    TextInput: 25,
    ToolBar: 18,
    Inline: 20,
  },
  FontFamily: {}
};

Styles.Common = {
  Column: {},
  ColumnCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ColumnCenterTop: {
    alignItems: 'center',
  },
  ColumnCenterBottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ColumnCenterLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  ColumnCenterRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  Row: {
    flexDirection: 'row',

    ...Platform.select({
      ios: {
        top: !Config.showStatusBar ? (Device.isIphoneX ? -20 : -8) : (Device.isIphoneX ? -15 : 0),
      },
      android: {
        top: 0,
      }
    })
  },
  RowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  RowCenterTop: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  RowCenterBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  RowCenterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RowCenterRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  RowCenterBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: Platform.OS === 'ios' ? 180 : 300,
    height: Platform.OS === 'ios' ? 20 : 60,
    resizeMode: 'contain',
    ...Platform.select({
      ios: {
        marginTop: Device.isIphoneX ? -8 : 2,
      },
      android: {
        marginTop: 2,
      }
    })
  },

  toolbarIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',

    marginRight: 12,
    marginBottom: 12,
    marginLeft: 8,
    opacity: 0.8,
    ...Platform.select({
      ios: {
        marginTop: Config.showStatusBar ? (Device.isIphoneX ? -20 : 7) : (Device.isIphoneX ? -30 : -3 ),
      },
      android: {
        marginTop: 10
      }
    })
  },
};

export default Styles;
