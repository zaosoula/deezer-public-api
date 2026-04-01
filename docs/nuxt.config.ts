export default defineNuxtConfig({
  extends: ['docus'],
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: '/deezer-public-api/'
  }
})
