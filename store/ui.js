/* global $nuxt */
import Vue from 'vue';
import cloneDeep from 'lodash/cloneDeep';
import { DEFAULT_MESSAGE_MODAL, DEFAULT_NOTIFY_SNACKBAR } from '@/constants';

export const state = () => ({
  isDark: Boolean(Number(localStorage.getItem('is-dark'))) || false,
  loaderDialog: false,
  /* notifiers */
  notifySnackbar: cloneDeep(DEFAULT_NOTIFY_SNACKBAR),
  /* modals */
  messageModal: cloneDeep(DEFAULT_MESSAGE_MODAL),
});

export const mutations = {
  toggleIsDark(state, bool) {
    $nuxt.$vuetify.theme.isDark = bool;
    state.isDark = bool;
    localStorage.setItem('is-dark', String(Number(bool)));
  },
  /* notifiers */
  triggerNotifySnackbar(state, options) {
    const notifySnackbar = cloneDeep(DEFAULT_NOTIFY_SNACKBAR);

    if (options) {
      for (const key in options) {
        notifySnackbar[key] = options[key];
      }
    }
    state.notifySnackbar = notifySnackbar;
  },
  triggerNotifySnackbarShow(state, bool) {
    Vue.set(state.notifySnackbar, 'show', bool);
  },
};
