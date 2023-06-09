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
    { 'heading-lg': 'text-48px leading-48px tracking-wide font-archivo' },
    { 'heading-md': 'text-32px leading-24px tracking-wide font-archivo' },
    { 'heading-sm': 'text-24px leading-24px tracking-wide font-archivo' },
    { 'text-lg': 'text-18px leading-24px tracking-0.05em font-inter' },
    { 'text-md': 'text-16px leading-24px tracking-0.05em font-inter' },
    { link: '[&:hover:not(:active)]:underline [&:hover:not(:active)]:text-[#454545]' },
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
          inter: 'Inter',
          archivo: 'Archivo',
        },
      },
    ),
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        100: '#FAFAFA',
        300: '#',
        600: '#909090',
        900: '#D9D9D9',
      },
      green: '#00FF47',
    },
  },
})
