const path = require('path')

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});

const baseOptions = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = Object.assign({}, withNextra({
  // reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/topics',
        permanent: true,
      },
    ]
  },
}), baseOptions);