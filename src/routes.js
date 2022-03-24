import Home from '@/views/Home.vue';
import JoinGame from '@/views/JoinGame.vue';
import NotFound from '@/views/NotFound.vue';
import HostGame from '@/views/HostGame.vue';
import Lobby from '@/views/Lobby.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const history = createWebHashHistory();
const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/join-game', component: JoinGame },
  { path: '/host-game', component: HostGame },
  { path: '/lobby', component: Lobby },
  { path: '/:path(.*)', component: NotFound },
];

const router = createRouter({ history, routes });

export default router;
