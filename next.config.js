const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});

module.exports = withNextra({
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
});
