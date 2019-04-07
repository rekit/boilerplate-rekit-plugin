const path = require('path');
const build = require('rekit-studio-sdk/lib/build');

build({ pluginPrj: path.join(__dirname, '..') });
