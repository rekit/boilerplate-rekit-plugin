const path = require('path');
const start = require('rekit-studio-sdk/lib/startDevServer');

start({ pluginDir: path.join(__dirname, '..') });
