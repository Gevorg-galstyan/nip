/* global $nuxt */

export default {
  state: () => ({}),
  getters: {
    getRouteName() {
      return $nuxt.$route.name;
    },
  },
  mutations: {},
  actions: {},
};
