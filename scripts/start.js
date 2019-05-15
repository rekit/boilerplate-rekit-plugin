const path = require('path');
const start = require('rekit-studio-sdk/lib/startDevServer');
const rekitConfig = require('./rekit.json');

const root = path.join(__dirname, '..');
start({
  // The project Rekit Studio manages, change it if you don't want Rekit Studio to load the plugin project itself.
  projectRoot: rekitConfig.projectRoot || root,
  pluginDir: root,
  port: rekitConfig.devPort,
});
