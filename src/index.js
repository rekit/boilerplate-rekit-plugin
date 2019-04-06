// This is the entry for plugin and used for UI build
import * as extUi from './ext-ui';
import route from './common/routeConfig';
import reducer from './common/rootReducer';
import './styles/index.less';

const plugin = {
  ...extUi,
  route,
  reducer,
  name: 'pluginnameplaceholder',
};

window._registerRekitPlugin(plugin);
