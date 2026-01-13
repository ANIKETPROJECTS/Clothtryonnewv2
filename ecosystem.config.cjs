module.exports = {
  apps: [{
    name: "rest-express",
    script: "./dist/index.cjs",
    env: {
      NODE_ENV: "production",
      PORT: 3008
    }
  }]
};
