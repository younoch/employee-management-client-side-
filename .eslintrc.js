module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'plugin:vue/vue3-essential': 'off',
    'plugin:vue/essential': 'off',
    'plugin:vue/vue3-strongly-recommended': 'off',
    'plugin:vue/vue3-recommended': 'off',
    'plugin:vue/recommended': 'off',
    'plugin:vue/strongly-recommended': 'off'
  }
}
