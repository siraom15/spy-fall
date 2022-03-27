const getDefaultState = () => {
  return {
    socketId: '',
    name: '',
  };
};
const state = getDefaultState();

const mutations = {
  SET_SOCKET_ID(state, socketId) {
    state.socketId = socketId;
  },
  SET_NAME(state, name) {
    state.name = name;
  },
};

const actions = {
  setSocketId({ commit }, socketId) {
    commit('SET_SOCKET_ID', socketId);
  },
  setName({ commit }, name) {
    commit('SET_NAME', name);
  },
};

const getters = {
  players: (state) => {
    return {
      socketId: state.socketId,
      name: state.name,
    };
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
