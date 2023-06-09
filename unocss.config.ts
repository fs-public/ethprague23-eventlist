import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'heading-lg': 'text-48px leading-48px tracking-wide font-[archivo]' },
    { 'heading-md': 'text-32px leading-24px tracking-wide font-[archivo]' },
    { 'heading-sm': 'text-24px leading-24px tracking-wide font-[archivo]' },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.0,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts(
      {
        provider: 'google',
        fonts: {
          robot: 'Roboto',
        },
      },
    ),
  ],
  theme: {
    colors: {

    },
  },
})
