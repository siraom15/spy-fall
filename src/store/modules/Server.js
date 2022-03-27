const getDefaultState = () => {
  return {
    serverStatus: false,
  };
};
const state = getDefaultState();

const mutations = {
  SET_SERVER_STATUS(state, serverStatus) {
    state.serverStatus = serverStatus;
  },
};

const actions = {
  setServerStatus({ commit }, serverStatus) {
    commit('SET_SERVER_STATUS', serverStatus);
  },
};

const getters = {
  serverStatus: (state) => state.serverStatus,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
