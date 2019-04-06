const path = require('path');
const start = require('rekit-studio/lib/start');
const root = path.join(__dirname, '..');
start({
  projectRoot: root,
  pluginDir: root,
  port: require('../rekit.json').servePort,
});
