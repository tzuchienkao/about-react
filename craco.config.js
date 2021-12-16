module.exports = {
  webpack: {
    // 返回webpack的配置信息
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.publicPath = '/about-react/'
      return webpackConfig
    }
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}