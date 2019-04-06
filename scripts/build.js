const path = require('path');
const build = require('rekit-studio/lib/build');

build({ pluginPrj: path.join(__dirname, '..') });
