import { matchPath } from 'react-router-dom';

export default {
  getTab(urlPath) {
    const match = matchPath(urlPath, {
      path: '/pluginnameplaceholder/sample-page',
      exact: true,
    });

    if (match) {
      return {
        name: 'Sample',
        key: '#sample-page',
        icon: 'file',
        iconColor: 'orange',
      };
    }

    return null;
  },
};
