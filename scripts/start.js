const path = require('path');
const start = require('rekit-studio-sdk/lib/startDevServer');

const root = path.join(__dirname, '..');
start({
  projectRoot: root,
  pluginPrj: root,
  port: require('../rekit.json').devPort,
});
