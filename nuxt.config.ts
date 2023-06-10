import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/devtools',
    'nuxt-headlessui',
  ],
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    reactivityTransform: true,
    // typedPages: true,
  },
  imports: {
    imports: [
      { type: true, name: 'DTimeStatus', from: './types' },
      { type: true, name: 'DEvent', from: './types' },
      { type: true, name: 'DStage', from: './types' },
      { type: true, name: 'DActivity', from: './types' },
    ],
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs', 'skipHydrate'],
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  unocss: {
    configFile: resolve('./unocss.config.ts'),
  },
})
