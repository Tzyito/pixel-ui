import type { StaticShortcutMap } from 'unocss';

export const staticMap = {
  'border-base': 'border-solid border-dark rounded',
  'placeholder-transition': 'placeholder:transition placeholder:duration-250 placeholder:ease-in',
  // common box container
  'box-base': 'px-4 border-2 h-3em border-base inline-flex items-center',
  'bg-base': 'bg-dark',
} as StaticShortcutMap;
// export const variantMap = [
//   [
//     /^border-primary-(\d+)?$/,
//     ([, op]) => `
//     border-primary
//   `,
//   ],
// ];
