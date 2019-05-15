const path = require('path');
const start = require('rekit-studio-sdk/lib/start');
const rekitConfig = require('./rekit.json');

const root = path.join(__dirname, '..');
start({
  projectRoot: rekitConfig.projectRoot || root,
  pluginDir: root,
  port: rekitConfig.servePort,
});
