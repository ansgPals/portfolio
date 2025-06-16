const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
  compiler: {
    emotion: true,
  },
  webpack(config) {
    // 기존 svg 로더 제거 (중복 처리 방지)
    config.module.rules = config.module.rules.map((rule) => {
      if (rule?.test?.toString().includes("svg")) {
        return { ...rule, exclude: /\.svg$/ };
      }
      return rule;
    });

    // svgr 로더 추가
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
