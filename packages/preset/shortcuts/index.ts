import type { Preset, StaticShortcutMap } from 'unocss';
import { staticMap } from './base';
import input from './input';
import button from './button';

const shortList: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  staticMap,
  input,
  button,
];
export default shortList;

export const getSafeList = () => {
  let list: string[] = [];
  shortList.forEach((item) => {
    list.push(...Object.keys(item));
  });
  return list;
};
