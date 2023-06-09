import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [],
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
