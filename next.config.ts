import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";

const nextConfig: NextConfig = {
  webpack: (config: WebpackConfig) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        fs: false, // Ensure fs is not bundled
      },
    };
    return config;
  },
};

export default nextConfig;
