import { createStore, createLogger } from 'vuex';
import Lobby from '@/store/modules/Lobby.js';
import Player from '@/store/modules/Player.js';

const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  strict: debug,
  modules: {
    Lobby,
    Player,
  },
  plugins: debug ? [createLogger()] : [],
});

export default store;
