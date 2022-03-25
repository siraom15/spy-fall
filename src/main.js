import { createApp } from 'vue';
import './tailwind.css';
import App from './App.vue';
import router from './routes.js';
import store from './store';
import i18n from '@/i18n';
import vueio from './socket';

const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(vueio);
app.use(router);
app.mount('#app');
