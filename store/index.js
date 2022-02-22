import axios from 'axios';

export const state = () => ({
  showSignin: true,
  isSignin: false,
  users: []
});

export const getters = {
  allUsers: (state) => state.users
}

export const mutations = {
  showSignin(state) {
    state.showSignin = !state.showSignin;
    return state.showSignin;
  },
  setSigninState(state) {
    state.isSignin = !state.isSignin;
  },
  SET_USERS(state, users) {
    state.users = users
  }
};

export const actions = {
  setSigninState(context) {
    context.commit('setSigninState')
  },
  getUsers({ commit }) {
    axios.get(process.env.PROJECT_API)
      .then(response => {
        commit('SET_USERS', response.data)
      })
  }
};

