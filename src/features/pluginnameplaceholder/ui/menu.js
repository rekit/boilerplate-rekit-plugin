// import axios from 'axios';
// import plugin from '../plugin/plugin';

export default {
  mainMenu: {
    fillMenuItems(items) {
      items.push({
        label: 'Say Hello',
        icon: 'anticon-smile',
        iconColor: '#555',
        key: 'pluginnameplaceholder-my-sample-page',
        order: 1,
      });
    },
    handleClick(key) {
      switch (key) {
        case 'pluginnameplaceholder-my-sample-page':
          alert('hello plugin');
          break;
        default:
          break;
      }
    },
  },
};
