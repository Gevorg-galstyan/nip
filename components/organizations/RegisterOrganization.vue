<template>
  <div>
    <top-pagination :item="{ name: 'ООО Перспектива' }" />

    <div>
      <v-tabs centered class="tabs" slider-color="#1976D2" v-model="model">
        <template v-for="tab in tabs">
          <v-tab :key="tab.name" :href="`#${tab.name}`">
            {{ tab.text }}
          </v-tab>
        </template>
      </v-tabs>

      <div :class="[model === 'create' ? 'tab-wrapper' : 'user-wrapper']">
        <v-tabs-items v-model="model">
          <template v-for="tab in tabs">
            <v-tab-item :key="tab.name" :value="tab.name">
              <component :is="tab.name" />
            </v-tab-item>
          </template>
        </v-tabs-items>
      </div>
    </div>
  </div>
</template>

<script>
import TopPagination from '@/components/content/TopPagination';

export default {
  name: 'RegisterOrganization',
  components: {
    Create: () => import(/* webpackPrefetch: true */ '@/components/organizations/tabs/Create'),
    Users: () => import(/* webpackPrefetch: true */ '@/components/organizations/tabs/Users'),
    TopPagination,
  },
  data: () => ({
    model: 'create',
    tabs: [
      {
        name: 'create',
        text: 'Карточка организации',
      },
      {
        name: 'users',
        text: 'Пользователи и роли',
      },
    ],
  }),
};
</script>

<style scoped>
.tab-wrapper {
  background: #fff;
  margin-top: 12px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 30px 20px 22px 20px;
}

.user-wrapper {
  background: #fff;
  margin-top: 12px;
}
</style>
