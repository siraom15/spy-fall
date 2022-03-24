const state = {
  players: [],
  roomId: null,
  roomSetting: {
    playTime: 5,
  },
};

const mutations = {
  SET_PLAYERS(state, players) {
    state.players = players;
  },
  SET_ROOM_ID(state, roomId) {
    state.roomId = roomId;
  },
  SET_ROOM_SETTING(state, roomSetting) {
    state.roomSetting = roomSetting;
  },
};

const actions = {
  setPlayers({ commit, state }, player) {
    commit('SET_PLAYERS', player);
  },
  setRoomId({ commit, state }, roomId) {
    commit('SET_ROOM_ID', roomId);
  },
  setRoomSetting({ commit, state }, roomSetting) {
    commit('SET_ROOM_SETTING', roomSetting);
  },
};

const getters = {
  players: (state) => state.players,
  roomId: (state) => state.roomId,
  roomSetting: (state) => state.roomSetting,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
