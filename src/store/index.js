import { createStore, createLogger } from 'vuex';
import Lobby from '@/store/modules/Lobby.js';
import Player from '@/store/modules/Player.js';
import Game from '@/store/modules/Game.js';
import Server from '@/store/modules/Server.js';

const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  strict: debug,
  modules: {
    Lobby,
    Player,
    Game,
    Server
  },
  plugins: debug ? [createLogger()] : [],
});

export default store;
