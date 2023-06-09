import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
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
      { type: true, name: 'TestInterface', from: './types' },
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
