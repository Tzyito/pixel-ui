import type { Rule } from 'unocss';
import Input from './input';
import Button from './button';

export const rules: Rule[] = [Input, Button].flat(1);
