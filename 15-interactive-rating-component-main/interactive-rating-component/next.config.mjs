/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nextjs-github-pages",
  distDir:
    "./15-interactive-rating-component-main/interactive-rating-component",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
