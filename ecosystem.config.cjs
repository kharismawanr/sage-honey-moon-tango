module.exports = {
  apps: [
    {
      name: 'identity-portfolio',
      cwd: '/home/aris/projects/sage-honey-moon-tango',
      script: 'node_modules/vite/bin/vite.js',
      args: 'preview --host 0.0.0.0 --port 8745',
      env: {
        NODE_ENV: 'production',
        PORT: '8745'
      },
      restart_delay: 3000,
      max_restarts: 10
    }
  ]
};
