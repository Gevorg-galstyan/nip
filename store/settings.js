/* global $nuxt */

export default {
  state: () => ({
    userEditMode: false,
    userAddMode: false,
    userRoleMode: false,
  }),
  getters: {},
  mutations: {
    setUserRoleMode(state, role) {
      state.userRoleMode = role;
    },
    setUserEditMode(state, mode) {
      state.userEditMode = mode;
    },
    setUserAddMode(state, mode) {
      state.userAddMode = mode;
    },
  },
  actions: {},
};
