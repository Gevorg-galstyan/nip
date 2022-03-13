<template>
  <div>
    <v-dialog :max-width="modalWidth" :persistent="persistent" v-model="modal">
      <div class="dialog-content">
        <div
          v-if="modalTitle"
          :class="titleClass"
          class="dialog-title-action d-flex align-items-center"
        >
          <h2 class="content-title mb-5">
            {{ modalTitle }}
          </h2>
        </div>

        <v-alert v-if="alertIcon || alertText" :color="alertColor">
          <div class="d-flex align-items-center">
            <v-icon v-if="alertIcon" :color="iconColor" class="mr-2 align-self-start">
              {{ alertIcon }}
            </v-icon>

            <span v-if="alertText" :class="alertTextClass" class="alertText">
              {{ alertText }}
            </span>
          </div>
        </v-alert>

        <div v-if="content" class="content-body v-application--is-ltr" data-app>
          {{ content }}
        </div>

        <div :class="footerClass" class="content-footer d-flex align-items-center mt-15">
          <v-btn
            v-if="cancel && !disableCancel"
            class="ml-3 custom-outline"
            @click="$emit('close')"
          >
            {{ cancel }}
          </v-btn>

          <v-btn
            v-if="accept"
            :class="acceptClass"
            class="fz-14 ml-3"
            small
            text
            @click="$emit('accept')"
          >
            {{ accept }}
          </v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    disableCancel: {
      type: Boolean,
      default: false,
    },
    alertColor: {
      type: String,
      default: '#1976D2',
    },
    alertIcon: {
      type: String,
      default: null,
    },
    iconColor: {
      type: String,
      default: null,
    },
    alertText: {
      type: String,
      default: null,
    },
    modalTitle: {
      type: String,
      default: null,
    },
    cancel: {
      type: String,
      default: 'Отмена',
    },
    accept: {
      type: String,
      default: 'Ок',
    },
    content: {
      type: String,
      default: null,
    },
    acceptClass: {
      type: String,
      default: 'custom-primary',
    },
    footerClass: {
      type: String,
      default: 'justify-content-end',
    },
    titleClass: {
      type: String,
      default: 'justify-space-between',
    },
    alertTextClass: {
      type: String,
      default: '',
    },
    persistent: {
      type: Boolean,
      default: false,
    },
    modalWidth: {
      type: [String, Number],
      default: '600',
    },
  },
  data: () => ({}),
  computed: {
    modal: {
      get() {
        return this.dialog;
      },
      set(bool) {
        this.$emit('close', bool);
      },
    },
  },
};
</script>
