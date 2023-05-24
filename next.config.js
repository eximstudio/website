/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  distDir: "./build",
  output: "export",
};

module.exports = nextConfig;
