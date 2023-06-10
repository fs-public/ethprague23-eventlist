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
    // Containers
    { 'page-container': 'w-full flex flex-col px-12px md:px-60px lg:px-100px' },
    // Typography
    { 'heading-lg': 'text-36px leading-36px md:text-42px md:leading-42px lg:text-48px lg:leading-48px tracking-wide font-archivo' },
    { 'heading-md': 'text-22px leading-22px md:text-26px md:leading-26px lg:text-32px lg:leading-48px tracking-wide font-archivo' },
    { 'heading-sm': 'text-16px leading-16px md:text-20px md:leading-20px lg:text-24px lg:leading-32px tracking-wide font-archivo' },
    { 'text-lg': 'text-14px leading-18px md:text-16px md:leading-22px lg:text-18px lg:leading-24px tracking-0.05em font-inter' },
    { 'text-md': 'text-12px leading-16px md:text-14px md:leading-22px lg:text-16px lg:leading-24px tracking-0.05em font-inter' },
    // Gradients
    { 'bg-shiny-gradient': 'bg-gradient-to-r bg-gradient-shape-[110deg] from-[#A0E9F1] from-13% via-[#E4F7EC] via-49% to-[#F7F1E1] to-88%' },
    // Utilities
    { 'gray-link': '[&:hover:not(:active)]:underline [&:hover:not(:active)]:text-gray-300' },
    { 'blue-link': 'text-blue [&:hover:not(:active)]:underline [&:hover:not(:active)]:text-blue-dark' },
    { 'black-bold-no-resize': 'text-shadow-[0px_0px_1px_black]' },
    { 'white-bold-no-resize': 'text-shadow-[0px_0px_1px_white]' },
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
    breakpoints: {
      sm: '450px',
      md: '800px',
      lg: '1124px',
      xl: '1444px',
    },
    colors: {
      white: '#FFFFFF',
      black: {
        DEFAULT: '#000000',
        lighter: '#141414',
      },
      bggray: {
        50: '#F8F8F8',
        100: '#F0F0F0',
        200: '#E0E0E0',
        300: '#D9D9D9',
      },
      gray: {
        300: '#454545',
        600: '#909090',
      },
      green: '#00FF47',
      blue: {
        DEFAULT: '#0019FF',
        dark: '#111F99',
      },
    },
  },
})
