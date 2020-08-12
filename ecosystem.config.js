module.exports = {
  apps : [
  {
      name: "ors",
      script: "~/acurerate/electron-release-server/app.js",
      args: "--env=production --name=op --allowProduction",
      node_args: "--inspect=0.0.0.0:29930 --max-old-space-size=6300",
      error_file: '/mnt/logs/ors_err.log',
      out_file: '/mnt/logs/ors.log',
      log_file: '/mnt/logs/ors_combined.log',
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }]
};

