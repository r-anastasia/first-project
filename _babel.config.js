module.exports = function (api) {
  api.cache(true)

  const presets = [
    '@babel/env',
    '@babel/preset-typescript',
    '@babel/preset-react',
    'next/babel',
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-private-property-in-object',
  ]

  return {
    presets,
    plugins,
  }
}
