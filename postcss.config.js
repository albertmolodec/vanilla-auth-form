module.exports = {
  plugins: [
    require('postcss-mixins')({
      mixinsDir: "src/mixins"
    }),
    require('postcss-nested'),
    require('postcss-preset-env'),
  ],
}