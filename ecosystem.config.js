module.exports = {
  apps: [
    {
      name: 'mindset-tkc-api',
      script: './build/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
    },
  ],
}
