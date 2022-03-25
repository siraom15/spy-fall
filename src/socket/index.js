import VueSocketIO from 'vue-3-socket.io';
import SocketIO from 'socket.io-client';
import store from '@/store';

const vueio = new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:4000'),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
});

export default vueio;
