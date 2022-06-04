/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } }
}

// compile hashpack
const withTM = require('next-transpile-modules')(['hashconnect']); // pass the modules you would like to see transpiled

module.exports = nextConfig

module.exports = withTM({});