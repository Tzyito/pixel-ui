import { Theme } from './types';
import { getPresetColors } from '../colors';

export default {
  colors: getPresetColors(),
  fontFamily: {
    pixel: 'Press Start 2P',
  },
  boxShadow: {
    light: {
      DEFAULT: '',
      primary: '#fff',
    },
    dark: {
      DEFALUT: '',
      primary: '',
    },
  },
} satisfies Theme;
