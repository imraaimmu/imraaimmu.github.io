/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — GitHub Pages serves files, it cannot run a Node server.
  output: 'export',
  // The export has no image optimisation server, so Next's optimiser must be off.
  images: { unoptimized: true },
  // Emit /about/index.html rather than /about.html so Pages resolves clean URLs.
  trailingSlash: true,
};
export default nextConfig;
