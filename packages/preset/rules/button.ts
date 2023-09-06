import { Theme } from '@unocss/preset-uno';
import { Rule, RuleContext } from 'unocss';
interface Selection {
  default: string;
  hover: string;
}
type PresetColor = {
  default: Selection;
  primary: Selection;
};
const shadowColor = {
  default: { default: '#D6D6D6', hover: '#C0C0C0' },
  primary: { default: '#6E9A36', hover: '#56721F' },
  success: { default: '#1673B1', hover: '#00607A' },
  warning: { default: '#C5A919', hover: '#A18812' },
  error: { default: '#B85744', hover: '#933E34' },
} as PresetColor;
const backGroundColor = {
  default: { default: '#fff5f5', hover: '#ffebeb' },
  primary: { default: '#92CC41', hover: '#6A9B30' },
  success: { default: '#209cee', hover: '#0081A6' },
  warning: { default: '#F7D51D', hover: '#D4B817' },
  error: { default: '#E76E55', hover: '#C65542' },
} as PresetColor;
export default [
  [
    /^click-shadow(?:-(.+))?$/,
    ([, d]: string[], { rawSelector }: RuleContext) => {
      const value = (d as keyof PresetColor) || 'default';
      const selector = `.${rawSelector}`;
      console.log('selector2: ', selector);
      return {
        'box-shadow': `inset -4px -4px 0 2px ${shadowColor[value].default}`,
        'background-color': backGroundColor[value].default,
      };
    },
  ],
  [
    /^click-hover-shadow(?:-(.+))?$/,
    ([, d]: string[], { rawSelector }: RuleContext) => {
      const value = (d as keyof PresetColor) || 'default';
      const selector = `.${rawSelector}`;
      console.log('selector: ', selector);
      return `
        ${selector}:hover {
            box-shadow: inset -4px -4px 0 0px ${shadowColor[value].hover};
            background-color: ${backGroundColor[value].hover};
        }
      `;
    },
  ],
] as unknown as Rule<Theme>[];
