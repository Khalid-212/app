/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/zohoverify/verifyforzoho.html",
        destination: "/zohoverify/verifyforzoho.html",
      },
    ];
  },
};

module.exports = nextConfig;
