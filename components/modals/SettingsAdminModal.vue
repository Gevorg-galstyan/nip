<template>
  <div>
    <v-dialog :max-width="modalWidth" persistent v-model="modal">
      <div class="dialog-content">
        <div class="dialog-title-action d-flex align-items-center justify-content-between">
          <h2 :class="{ 'text-center fz-14': next }" class="content-title mb-5">
            {{
              !next
                ? 'Настройка прав Администратора'
                : 'Произвести настройку прав администрирования доступных сервисов?'
            }}
          </h2>
        </div>

        <v-alert v-if="!next" color="#EAF4FC">
          <div class="d-flex align-items-center">
            <v-icon class="mr-2 align-self-start" color="#5A9FEE">mdi-alert-circle-outline</v-icon>

            <span class="alertText"> {{ alertText }} </span>
          </div>
        </v-alert>

        <div v-if="!selfAdmin" class="content-body v-application--is-ltr" data-app>
          <v-autocomplete
            :items="users"
            :menu-props="{ bottom: true, offsetY: true }"
            class="fz-14 m-0 p-0 custom-input"
            dense
            hide-details
            item-text="name"
            item-value="id"
            label="Поиск пользователя"
            outlined
            small
            v-model="user"
          >
            <template #item="{ item }">
              <div class="py-2">
                <p class="user-name mb-0 fz-14">
                  {{ item.name }}
                </p>

                <p class="user-email mb-0 fz-12">
                  {{ item.email }}
                </p>
              </div>
            </template>
          </v-autocomplete>
        </div>

        <div :class="footerClass" class="content-footer d-flex align-items-center mt-15">
          <v-btn v-if="!selfAdmin" class="text-button fz-14" small text @click="createUser">
            Добавить пользователя
          </v-btn>

          <div v-if="!next">
            <v-btn :disabled="!selfAdmin && !user" class="custom-primary" @click="checkAction">
              {{ selfAdmin ? 'Продолжить' : 'Выбрать' }}
            </v-btn>

            <v-btn class="ml-3 custom-outline" @click="cancel">Отмена</v-btn>
          </div>

          <div v-else>
            <v-btn class="ml-3 custom-outline" @click="create">Позже</v-btn>

            <v-btn class="custom-primary"> Продолжить</v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash';

import { mapMutations } from 'vuex';

import { DEFAULT_NOTIFY_SNACKBAR } from '@/constants';

export default {
  name: 'SettingsAdminModal',
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    selfAdmin: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    next: false,
    user: '',
    users: [
      {
        id: 1,
        name: 'Баранов Илья Олегович',
        email: 'baranov_vasya@mail.ru',
      },
      {
        id: 2,
        name: 'Баранов Илья Олегович',
        email: 'baranov_vasya@mail.ru',
      },
      {
        id: 3,
        name: 'Баранов Илья Олегович',
        email: 'baranov_vasya@mail.ru',
      },
      {
        id: 4,
        name: 'Баранов Илья Олегович',
        email: 'baranov_vasya@mail.ru',
      },
      {
        id: 5,
        name: 'Баранов Илья Олегович',
        email: 'baranov_vasya@mail.ru',
      },
      {
        id: 1,
        name: 'Баранов Илья Олегович',
        email: 'baranov_vasya@mail.ru',
      },
    ],
  }),
  computed: {
    modal: {
      get() {
        return this.dialog;
      },
      set(bool) {
        this.$emit('close', bool);
      },
    },
    modalWidth() {
      return this.selfAdmin ? '375' : '500';
    },
    alertText() {
      return this.selfAdmin
        ? 'Вы будете назначены Администратором кабинета'
        : 'Выберите или добавьте пользователя';
    },
    footerClass() {
      return this.selfAdmin
        ? !this.next
          ? 'justify-content-end'
          : 'justify-content-center'
        : 'justify-content-between';
    },
  },
  methods: {
    ...mapMutations('ui', ['triggerNotifySnackbar']),
    ...mapMutations('settings', ['setUserAddMode']),
    create() {
      const message = `Администратор успешно назначен! \n\n
      Изменить настройки возможно в настройках прав доступа`;

      const options = {
        ...cloneDeep(DEFAULT_NOTIFY_SNACKBAR),
        show: true,
        message,
        icon: 'mdi-check-circle',
      };

      options.options.color = '#43A047';

      this.triggerNotifySnackbar(options);

      this.modal = false;
      this.next = false;
      this.user = '';
      this.$emit('cancel');
    },
    checkAction() {
      if (this.selfAdmin) {
        this.next = true;
      } else {
        this.create();
      }
    },
    cancel() {
      this.$emit('cancel');
      this.modal = false;
      this.next = false;
      this.user = '';
    },
    createUser() {
      this.setUserAddMode(true);

      this.$router.replace('/settings/users');
    },
  },
};
</script>

<style scoped>
.user-email {
  line-height: 21px;
  letter-spacing: 0.07875px;
  color: #1565c0;
}

.user-name {
  line-height: 14px;
  letter-spacing: 0.07875px;
  color: #000000;
}
</style>
