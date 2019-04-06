export default {
  mainMenu: {
    fillMenuItems(items) {
      items.push({
        label: 'Say Hello',
        icon: 'anticon-smile',
        iconColor: '#555',
        key: 'pluginnameplaceholder-say-hello',
        order: 1,
      });
    },
    handleMenuClick(key) {
      switch (key) {
        case 'pluginnameplaceholder-say-hello':
          alert('Hello plugin!');
          break;
        default:
          break;
      }
    },
  },
};
