import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [presetUno({ attributifyPseudo: true }), presetAttributify()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: [{ 'my-flex': 'flex c-blue' }],
});
