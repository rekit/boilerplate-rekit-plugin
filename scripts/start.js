'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const {
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.config');
const createDevServerConfig = require('../config/webpackDevServer.config');

const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;

// Tools like Cloud9 rely on this.
const HOST = process.env.HOST || '0.0.0.0';

if (process.env.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(process.env.HOST),
      )}`,
    ),
  );
  console.log(`If this was unintentional, check that you haven't mistakenly set it in your shell.`);
  console.log(`Learn more here: ${chalk.yellow('http://bit.ly/CRA-advanced-config')}`);
  console.log();
}

const prjDir = path.join(__dirname, '..');
function startRekitStudio() {
  console.log('Starting Rekit Studio...');
  const start = require('rekit-studio/lib/start');
  start({
    port: require('../rekit.json').devStudioPort,
    devPluginsDir: path.join(prjDir),
    projectRoot: prjDir,
  });
}
// We require that you explictly set browsers and do not fall back to
// browserslist defaults.
const { checkBrowsers } = require('react-dev-utils/browsersHelper');
checkBrowsers(paths.appPath, isInteractive)
  // .then(() => {
  //   // We attempt to use the default port but if it is busy, we offer the user to
  //   // run on a different port. `choosePort()` Promise resolves to the next free port.
  //   return choosePort(HOST, DEFAULT_PORT);
  // })
  .then(() => {
    const port = require('../rekit.json').devPort;
    // const config = configFactory('development');
    const entryConfig = {};
    const isDirectory = source => fs.lstatSync(source).isDirectory();
    const featureDir = path.join(__dirname, '../src/features');
    const plugins = fs.readdirSync(featureDir).filter(name =>
      isDirectory(path.join(featureDir, name)),
    )
    console.log('plugins: ', plugins);
    plugins.forEach(name => {
      entryConfig[name] = [
        // 'react-dev-utils/webpackHotDevClient?http://localhost:6080',
        // `webpack-dev-server/client?http://localhost:${port}`, // WebpackDevServer host and port
        // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        paths.resolveApp(`src/features/${name}/entry.js`),
        // paths.resolveApp(`src/features/${name}/style.less`),
      ];
    });

    const config = {
      ...configFactory('development'),
      entry: entryConfig,
    };

    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const appName = require(paths.appPackageJson).name;
    const urls = prepareUrls(protocol, HOST, port);
    // Create a webpack compiler that is configured with custom messages.
    const compiler = createCompiler(webpack, config, appName, urls, useYarn);
    // Load proxy config
    const proxySetting = require(paths.appPackageJson).proxy;
    const proxyConfig = prepareProxy(proxySetting, paths.appPublic);
    // Serve webpack assets generated by the compiler over a web server.
    const serverConfig = createDevServerConfig(proxyConfig, urls.lanUrlForConfig);
    const devServer = new WebpackDevServer(compiler, serverConfig);
    // Launch WebpackDevServer.
    devServer.listen(port, HOST, err => {
      if (err) {
        return console.log(err);
      }
      if (isInteractive) {
        clearConsole();
      }
      console.log(chalk.cyan('Starting the development server...\n'));
      // openBrowser(urls.localUrlForBrowser);
      setTimeout(startRekitStudio, 300);
    });

    ['SIGINT', 'SIGTERM'].forEach(function(sig) {
      process.on(sig, function() {
        devServer.close();
        process.exit();
      });
    });
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
