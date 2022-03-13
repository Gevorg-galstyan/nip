<template>
  <div class="px-5 mt-3 v-application--is-ltr">
    <v-alert color="#EAF4FC">
      <div class="d-flex align-items-center">
        <v-icon class="mr-2 align-self-start" color="#5A9FEE">mdi-alert-circle-outline</v-icon>

        <span class="alertText">Заполните данные пользователя и настройте права доступа</span>
      </div>
    </v-alert>

    <v-row class="mt-8">
      <v-col cols="12" lg="4" md="6">
        <v-text-field class="custom-input" dense label="Фамилия" outlined v-model="user.surname" />
      </v-col>

      <v-col cols="12" lg="4" md="6">
        <v-text-field class="custom-input" dense label="Имя*" outlined v-model="user.name" />
      </v-col>

      <v-col cols="12" lg="4" md="6">
        <v-text-field
          class="custom-input"
          dense
          label="Отчество"
          outlined
          v-model="user.patronymic"
        />
      </v-col>

      <v-col cols="12" lg="4" md="6">
        <v-text-field class="custom-input" dense label="E-mail*" outlined v-model="user.email" />
      </v-col>

      <v-col cols="12" lg="4" md="6">
        <v-text-field
          ref="userPhone"
          class="custom-input"
          dense
          label="Номер телефона"
          outlined
          type="number"
          v-model="user.phone"
        />
      </v-col>

      <v-col cols="12" lg="4" md="6">
        <v-autocomplete
          :items="organizations"
          class="custom-input"
          dense
          label="Организация"
          outlined
          v-model="user.organizations"
        />
      </v-col>
    </v-row>

    <div class="d-flex flex-wrap">
      <h2 class="mb-10 mt-10 w-100 service-title">Сервисы</h2>

      <div>
        <div class="d-flex align-items-center justify-content-between mb-3">
          <h5 class="checkbox-title">УЖЦ</h5>

          <v-checkbox class="p-0 m-0" color="#1976D2" hide-details v-model="user.ujc" />
        </div>

        <div class="d-flex align-items-center justify-content-between">
          <h5 class="checkbox-title">ПТОС</h5>

          <v-checkbox class="p-0 m-0" color="#1976D2" hide-details v-model="user.ptos" />
        </div>
      </div>

      <v-btn
        :disabled="!user.ptos && !user.ujc"
        class="text-button fz-14 ml-5"
        small
        text
        @click="setRole"
      >
        Настроить роли
      </v-btn>
    </div>

    <div class="py-8">
      <v-switch
        class="admin-switch"
        color="#1976D2"
        label="Администратор кабинета"
        v-model="user.admin"
      />
    </div>

    <div :class="{ 'justify-content-between': userEditMode }" class="d-flex align-items-center">
      <div v-if="!userEditMode">
        <v-btn class="custom-primary" @click="create">Сохранить</v-btn>
      </div>

      <div v-else>
        <v-btn class="custom-primary" @click="create">Редактировать</v-btn>
        <v-btn class="custom-outline-danger ml-3" @click="confirm = true">Удалить</v-btn>
      </div>

      <v-btn class="custom-outline ml-3" @click="cancel">Отмена</v-btn>
    </div>

    <modals-confirm-dialog
      :dialog="confirm"
      accept="Удалить"
      alert-color="#FDF4E7"
      alert-icon="mdi-alert-outline"
      alert-text="Пользователь Баранов Илья Олегович будет перенесен в архив."
      cancel="Отмена"
      data-app
      icon-color="#F1A54A"
      modal-title="Удалить пользовтеля?"
      @accept="remove"
      @close="confirm = false"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { DEFAULT_NOTIFY_SNACKBAR } from '@/constants';
import { cloneDeep } from 'lodash';

export default {
  name: 'UserEdit',
  props: {
    organizations: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    confirm: false,
    user: {
      surname: '',
      name: '',
      patronymic: '',
      email: '',
      phone: '',
      organization: '',
      ujc: false,
      ptos: false,
      admin: false,
    },
  }),
  computed: {
    ...mapState('settings', ['userEditMode']),
  },
  methods: {
    ...mapMutations('settings', ['setUserEditMode', 'setUserAddMode', 'setUserRoleMode']),
    ...mapMutations('ui', ['triggerNotifySnackbar']),
    create() {
      const options = {
        ...cloneDeep(DEFAULT_NOTIFY_SNACKBAR),
        show: true,
        message: 'Пользователь создан',
        icon: 'mdi-check-circle',
      };

      options.options.color = '#43A047';

      this.triggerNotifySnackbar(options);
    },
    remove() {
      const options = {
        ...cloneDeep(DEFAULT_NOTIFY_SNACKBAR),
        show: true,
        message: 'Пользователь перенесен в архив',
        icon: 'mdi-check-circle',
      };

      options.options.color = '#43A047';

      this.triggerNotifySnackbar(options);

      this.confirm = false;
    },
    cancel() {
      this.setUserEditMode(false);
      this.setUserAddMode(false);
    },
    setRole() {
      this.setUserRoleMode(true);

      this.$router.push('/settings/roles');
    },
  },
};
</script>

<style scoped>
.checkbox-title {
  margin-right: 30px;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.07875px;
  color: #303133;
}

.service-title {
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}
</style>
