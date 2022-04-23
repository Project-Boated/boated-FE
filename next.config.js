/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
    SERVER_URL: process.env.SERVER_URL,
    DESTINATION_URL: process.env.DESTINATION_URL,
    SOURCE_PATH: process.env.SOURCE_PATH,
  },
  async rewrites() {
    if (process.env.NODE_ENV !== 'production') {
      return [
        {
          destination: process.env.DESTINATION_URL,
          source: process.env.SOURCE_PATH,
        },
      ];
    }
  },
};
