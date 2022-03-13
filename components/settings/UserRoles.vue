<template>
  <div class="v-application--is-ltr" data-app>
    <h1 class="user-name">Баранов Илья Олегович</h1>

    <div class="row-unity">
      <v-row class="m-0 bordered">
        <v-col cols="12" md="3">
          <h5 class="role-name">Сервис</h5>
        </v-col>
        <v-col cols="12" md="3">
          <h5 class="role-name">Проект</h5>
        </v-col>
        <v-col cols="12" md="3">
          <h5 class="role-name">Роль</h5>
        </v-col>
      </v-row>

      <v-row v-for="(role, key) in roles" :key="key" class="m-0 mt-5">
        <v-col cols="12" md="3">
          <v-autocomplete
            :items="services"
            :menu-props="{ bottom: true, offsetY: true, contentClass: 'custom-menu' }"
            class="custom-input"
            dense
            hide-details
            label="Сервис"
            outlined
            v-model="role.services"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-autocomplete
            :items="services"
            :menu-props="{ bottom: true, offsetY: true, contentClass: 'custom-menu' }"
            class="custom-input"
            dense
            hide-details
            label="Проект"
            outlined
            v-model="role.project"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-autocomplete
            :items="services"
            :menu-props="{ bottom: true, offsetY: true, contentClass: 'custom-menu' }"
            class="custom-input"
            dense
            hide-details
            label="Роль"
            outlined
            v-model="role.role"
          />
        </v-col>
      </v-row>
    </div>

    <div class="mt-10 ml-3 d-flex align-items-center justify-content-between">
      <v-btn class="text-button fz-14" small text @click="addRole">Добавить роль</v-btn>

      <v-btn class="text-button fz-14" small text @click="save">Сохранить</v-btn>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'UserRoles',
  data: () => ({
    services: ['Сервис1', 'Сервис2', 'Сервис3'],
    roles: [
      {
        service: '',
        project: '',
        role: '',
      },
      {
        service: '',
        project: '',
        role: '',
      },
    ],
  }),
  beforeDestroy() {
    this.setUserRoleMode(false);
  },
  methods: {
    ...mapMutations('settings', ['setUserRoleMode']),
    addRole() {
      this.roles.push({
        service: '',
        project: '',
        role: '',
      });
    },
    save() {
      console.log('save');
    },
  },
};
</script>

<style scoped>
.user-name {
  margin: 45px 0 45px 25px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #303133;
}

.row-unity {
}

.role-name {
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.07px;
  color: #303133;
}

.bordered {
  border-bottom: 1px solid #e0e0e0;
}

@media all and (max-width: 992px) {
  .user-name {
    margin: 20px 0 20px 15px;
  }

  .row-unity {
    display: flex;
  }
}
</style>
