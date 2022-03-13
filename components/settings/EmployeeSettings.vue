<template>
  <div>
    <top-pagination>
      <v-btn
        v-if="model === 'users'"
        class="custom-primary align-self-end"
        small
        @click="addEmployee"
      >
        Добавить пользователя
      </v-btn>
    </top-pagination>

    <div class="dashboard">
      <div class="d-flex align-items-center justify-content-between tabs-wrapper">
        <v-tabs centered class="tabs" slider-color="#1976D2" v-model="model">
          <template v-for="tab in tabs">
            <v-tab
              v-if="tab.enabled"
              :key="tab.name"
              :href="`#${tab.name}`"
              @click="changeUrl(tab.name)"
            >
              {{ tab.text }}
            </v-tab>
          </template>
        </v-tabs>

        <v-btn
          v-if="model === 'admin' && !userRoleMode"
          class="custom-primary mr-3"
          small
          @click="addUser = true"
        >
          Назначить
        </v-btn>
      </div>

      <v-tabs-items v-if="!userRoleMode" v-model="model">
        <template v-for="tab in tabs">
          <v-tab-item v-if="tab.enabled" :key="tab.name" :value="tab.name">
            <component :is="tab.name" v-model="addUser" @change="addUser = $event" />
          </v-tab-item>
        </template>
      </v-tabs-items>

      <slot />
    </div>
  </div>
</template>

<script>
import TopPagination from '@/components/content/TopPagination';
import Admin from '@/components/settings/tabs/Admin';
import Archive from '@/components/settings/tabs/Archive';
import Users from '@/components/settings/tabs/Users';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'EmployeeSettings',
  components: {
    TopPagination,
    Admin,
    Archive,
    Users,
  },
  data: () => ({
    addUser: false,
    model: 'admin',
    tabs: [
      {
        name: 'admin',
        text: 'Администратор',
        enabled: true,
      },
      {
        name: 'users',
        text: 'Пользователи',
        enabled: true,
      },
      {
        name: 'archive',
        text: 'Архив',
        enabled: true,
      },
    ],
  }),
  computed: {
    ...mapState('settings', ['userRoleMode']),
  },
  beforeMount() {
    const { name = '' } = this.$route;

    const routName = name.split('-');

    if (routName?.[1]) {
      const model = this.tabs.find(item => item.name === routName[1]);

      if (model) {
        this.model = model.name;
      }
    }
  },
  methods: {
    ...mapMutations('settings', ['setUserAddMode']),
    changeUrl(param) {
      if (this.$route.name === `settings-${param}`) {
        return;
      }

      this.$router.replace(param);
    },
    addEmployee() {
      this.setUserAddMode(true);
    },
  },
};
</script>

<style scoped>
.tabs-wrapper {
  border-bottom: 1px solid #f1f1f1;
}
</style>
