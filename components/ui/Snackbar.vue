<template>
  <v-snackbar
    class="d-flex align-items-start"
    max-width="320"
    min-width="305px"
    top
    v-model="show"
    v-bind="options"
  >
    <div class="d-flex align-items-start">
      <v-icon class="pr-3" color="white" dark>{{ icon }}</v-icon>

      <span class="fz-14 snack-message">{{ message }}</span>
    </div>

    <template #action="{ attrs }">
      <div class="close-btn" v-bind="attrs" @click="close">
        <v-icon>mdi-close</v-icon>
      </div>
    </template>
  </v-snackbar>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Snackbar',
  computed: {
    ...mapState('ui', ['notifySnackbar']),
    show: {
      get() {
        return this.notifySnackbar.show;
      },
      set(value) {
        if (!value) {
          this.close();
        }
      },
    },
    message: vm => vm.notifySnackbar.message,
    icon: vm => vm.notifySnackbar.icon,
    options: vm => vm.notifySnackbar.options || {},
  },
  methods: {
    ...mapMutations('ui', ['triggerNotifySnackbar', 'triggerNotifySnackbarShow']),
    close() {
      this.triggerNotifySnackbarShow(false);
      setTimeout(() => this.triggerNotifySnackbar(), 1000);
    },
  },
};
</script>

<style>
.snack-message {
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #ffffff;
}

.close-btn {
  cursor: pointer;
  padding: 15px 21px;
}
</style>
