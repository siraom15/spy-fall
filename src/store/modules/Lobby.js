const state = {
  players: [],
  roomId: null,
};

const mutations = {
  SET_PLAYERS(state, players) {
    state.players = players;
  },
  SET_ROOM_ID(state, roomId) {
    state.roomId = roomId;
  }
};

const actions = {
  setPlayers({ commit, state }, player) {
    commit('SET_PLAYERS', player);
  },
  setRoomId({ commit, state }, roomId) {
    commit('SET_ROOM_ID', roomId);
  }
};

const getters = {
  players: state => state.players,
  roomId: state => state.roomId,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
