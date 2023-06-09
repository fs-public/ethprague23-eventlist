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
    // Typography
    { 'heading-lg': 'text-48px leading-48px tracking-wide font-archivo' },
    { 'heading-md': 'text-32px leading-24px tracking-wide font-archivo' },
    { 'heading-sm': 'text-24px leading-24px tracking-wide font-archivo' },
    { 'text-lg': 'text-18px leading-24px tracking-0.05em font-inter' },
    { 'text-md': 'text-16px leading-24px tracking-0.05em font-inter' },
    // Gradients
    { 'bg-shiny-gradient': 'bg-gradient-to-r bg-gradient-shape-[110deg] from-[#A0E9F1] from-13% via-[#E4F7EC] via-49% to-[#F7F1E1] to-88%' },
    // Utilities
    { link: '[&:hover:not(:active)]:underline [&:hover:not(:active)]:text-gray-300' },
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
      bggray: {
        100: '#FAFAFA',
        300: '#D9D9D9',
      },
      gray: {
        300: '#454545',
        600: '#909090',
      },
      green: '#00FF47',
    },
  },
})
