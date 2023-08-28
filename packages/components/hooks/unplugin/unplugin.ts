import type { PluginOption } from 'vite'

export default function generateCss(): PluginOption {
  //   const filter = createFilter(options.include, options.exclude);
  return {
    name: 'vite-plugin-css-generate',
    enforce: 'pre',
    async transform(code) {
      // if (id.endsWith('.vue')) {
      //   const { descriptor } = parse(code)
      //   // @TODO 获取unocss config
      //   const config = unocss.resolveConfig()
      //   const ctx = unocss.createGenerator(config)
      //   const output = await ctx.generate(descriptor.template?.content as string)
      // }
      return code
    },
  }
}
