import VueSocketIO from 'vue-3-socket.io';
import SocketIO from 'socket.io-client';
import store from '@/store';

const vueio = new VueSocketIO({
  debug: true,
  connection: SocketIO(import.meta.env.VITE_APP_SOCKET_URL),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
});

export default vueio;
