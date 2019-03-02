// import history from 'rs/common/history';

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
          // history.push('/pluginnameplaceholder/sample-page');
          break;
        default:
          break;
      }
    },
  },
};
