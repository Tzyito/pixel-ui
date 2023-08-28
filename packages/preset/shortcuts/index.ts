import type { Preset, StaticShortcutMap } from 'unocss'
import { staticMap } from './base'
import input from './input'

const shortList: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [staticMap, input]
export default shortList

// export const getSafeList = () => {
//   shortList.map((short) => Object.keys());
//   return [];
// };
