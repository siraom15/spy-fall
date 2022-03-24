import { createApp } from 'vue';
import './tailwind.css';
import App from './App.vue';
import router from './routes.js';
import store from './store';
import VueSocketIO from 'vue-3-socket.io';
import SocketIO from 'socket.io-client';

const vueio = new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:4000'),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
});

const app = createApp(App);
app.use(store);
app.use(vueio);
app.use(router);
app.mount('#app');
