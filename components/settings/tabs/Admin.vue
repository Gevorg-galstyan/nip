<template>
  <div class="px-5 mt-3 v-application--is-ltr create-admin">
    <v-alert color="#EAF4FC">
      <div class="d-flex align-items-center">
        <v-icon class="mr-2 align-self-start" color="#5A9FEE">mdi-alert-circle-outline</v-icon>

        <span class="alertText">Необходимо назначить Администратора</span>
      </div>
    </v-alert>

    <div class="px-5">
      <div class="py-10">
        <v-switch class="admin-switch" color="#1976D2" label="Администратор" v-model="selfAdmin" />
      </div>

      <div>
        <h3 class="admin-title">Администратор</h3>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              class="custom-input"
              dense
              label="Фамилия"
              outlined
              v-model="admin.surname"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field class="custom-input" dense label="Имя" outlined v-model="admin.name" />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              class="custom-input"
              dense
              label="Отчество"
              outlined
              v-model="admin.patronymic"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              :rules="emailRules"
              class="custom-input"
              dense
              label="E-mail"
              outlined
              v-model="admin.email"
            />
          </v-col>
        </v-row>
      </div>
    </div>

    <modals-settings-admin-modal
      :dialog="dialog"
      :self-admin="selfAdmin"
      data-app
      @cancel="cancel"
      @close="dialog = $event"
    />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Admin',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    selfAdmin: false,
    dialog: false,
    admin: {
      name: '',
      surname: '',
      patronymic: '',
      email: '',
    },
    emailRules: [
      v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Недействительный E-mail',
    ],
  }),
  watch: {
    value() {
      if (this.value) {
        this.selfAdmin = false;
        this.dialog = true;
      }
    },
    selfAdmin() {
      if (this.selfAdmin) {
        this.selfAdmin = true;
        this.dialog = true;
      }
    },
  },
  methods: {
    cancel() {
      this.selfAdmin = false;
      this.$emit('change', false);
    },
  },
};
</script>

<style lang="scss">
.admin-switch {
  .v-label {
    margin-bottom: 0;
    margin-left: 15px;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.07875px;
    color: rgba(0, 0, 0, 0.87);
  }
}

.create-admin {
  .admin-title {
    margin-bottom: 37px;
    font-size: 18px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
