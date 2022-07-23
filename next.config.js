module.exports = {
  async rewrites() {
    return [
      {
        source: "/render/(.+)",
        destination: "/api",
      },
    ];
  },
};
