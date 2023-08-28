import type { CSSEntries, Preset } from 'unocss'

const variants: Preset['variants'] = [
  (matcher: string) => {
    if (!matcher.startsWith('em'))
      return matcher

    return {
      matcher: matcher.slice(3),
      body: (body: CSSEntries) => {
        return body
      },
    }
  },
]
export default variants
