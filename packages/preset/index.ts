import type { Preset } from 'unocss';
import shortcuts from './shortcuts';
import theme from './theme';
import variants from './variants';
import { rules } from './rules';

export function presetPixel(): Preset {
  return {
    name: '@pixel-ui/preset',
    shortcuts,
    theme,
    rules,
    variants,
  };
}

export default presetPixel;

export * from './colors';
export * from './shortcuts';
