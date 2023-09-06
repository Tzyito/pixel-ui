import type { ExtractPublicPropTypes, PropType } from 'vue';
import { ThemeType } from '../types';

export const ButtonProps = {
  color: {
    type: String,
    default: 'primary',
  },
  icon: String,
  type: {
    type: [String, undefined] as PropType<ThemeType>,
    default: 'default',
  },
} as const;
export type OButtonProps = ExtractPublicPropTypes<typeof ButtonProps>;
