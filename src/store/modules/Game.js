const state = {
  location: '',
  role: '',
};

const mutations = {
    SET_LOCATION(state, location) {
    state.location = location;
  },
  SET_ROLE(state, role) {
    state.role = role;
  },
};

const actions = {
  setLocation({ commit }, location) {
    commit('SET_LOCATION', location);
  },
  setRole({ commit }, role) {
    commit('SET_ROLE', role);
  },
};

const getters = {
  location: (state) => state.location,
  role: (state) => state.role,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
