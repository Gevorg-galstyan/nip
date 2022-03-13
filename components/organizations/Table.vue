<template>
  <div>
    <top-pagination>
      <v-btn class="custom-primary align-self-end" small @click="addOrganization">
        Добавить организацию
      </v-btn>
    </top-pagination>

    <v-divider />

    <div :class="{ 'dashboard-empty': !organizations.length }" class="dashboard">
      <template v-if="organizations.length">
        <action-tables
          :desserts="organizations"
          :headers="headers"
          action-icon="mdi-pencil"
          @update="editOrganization"
        />
      </template>

      <template v-else>
        <span>организации отсутствуют</span>
      </template>
    </div>
  </div>
</template>

<script>
import TopPagination from '@/components/content/TopPagination';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Table',
  components: { TopPagination },
  data: () => ({
    headers: [
      {
        text: 'Наименование организации',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      {
        text: 'ИНН',
        value: 'inn',
        sortable: false,
      },
      {
        text: 'Телефон',
        value: 'phone',
        sortable: false,
      },
      {
        text: 'Юридический адрес',
        value: 'ur-address',
        sortable: false,
      },
      {
        text: '',
        value: 'actions',
        sortable: false,
      },
    ],
    organizations: [
      {
        id: 2,
        name: 'Перспектива, ООО',
        inn: '7712345678',
        phone: '+7 (495) 555-55-55',
        'ur-address': '123456, г. Москва, ул. Подвойского, д. 14, стр. 7',
      },
    ],
  }),
  methods: {
    addOrganization() {
      this.$router.push('/organizations/register');
    },
    editOrganization(item) {
      this.$router.replace({
        path: `/organizations/edit/${item.id}`,
      });
    },
  },
};
</script>

<style scoped></style>
