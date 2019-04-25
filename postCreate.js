'use strict';

/* eslint "no-use-before-define": 0 */

// This script is executed after a project is created with this boilerplate.
// After execution, the script will be deleted.

const path = require('path');
const fs = require('fs-extra');
const _ = require('lodash');

const prjPath = __dirname;

function postCreate(args) {
  // Empty readme
  fs.writeFileSync(path.join(prjPath, 'README.md'), '# README\n');

  // Remove unnecessary files
  ['build', '.travis.yml', 'yarn.lock', 'LICENSE', 'package-lock.json']
    .map(f => path.join(prjPath, f))
    .forEach(file => fs.existsSync(file) && fs.removeSync(file));

  const name = args.name.replace(/^rekit-plugin-/, '');
  // Clean package.json
  const pkgJsonPath = path.join(prjPath, 'package.json');
  const pkgJson = require(pkgJsonPath); // eslint-disable-line
  pkgJson.name = _.kebabCase(`rekit-plugin-${name}`);
  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, '  '));

  const dashedName = _.kebabCase(name);
  // Rename pluginnameplaceholder to real plugin name.
  ['features/home/route.js', 'ext/menu.js', 'index.js'].forEach(file => {
    const absPath = path.join(prjPath, 'src', file);
    const text = fs
      .readFileSync(absPath)
      .toString()
      .replace(/pluginnameplaceholder/g, dashedName);
    fs.writeFileSync(absPath, text);
  });

  // Remove build folder
  fs.removeSync(path.join(prjPath, 'src/features/pluginnameplaceholder/build'));
}

module.exports = postCreate;
