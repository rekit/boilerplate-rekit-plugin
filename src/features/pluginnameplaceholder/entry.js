// This is the entry for plugin and used for UI build
import * as ui from './ui';
import route from './route';
import reducer from './redux/reducer';

const toExport = {
  ...ui,
  route,
  reducer,
  name: 'pluginnameplaceholder',
};

window.__REKIT_PLUGINS.push(toExport);
