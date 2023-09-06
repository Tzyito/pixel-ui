import type { ExtractPublicPropTypes } from 'vue';

export const InputProps = defineProps({
  foo: String,
  text: {
    required: true,
    default: '',
    type: String,
  },
  css: {
    default: '',
    type: String,
  },
  arr: Array,
});
export type OInputProps = ExtractPublicPropTypes<typeof InputProps>;
