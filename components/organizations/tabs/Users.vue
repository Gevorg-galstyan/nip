<template>
  <div :class="{ 'dashboard-empty dashboard': !users.length }">
    <template v-if="users.length">
      <action-tables
        :desserts="users"
        :headers="headers"
        action-icon="mdi-pencil"
        @update="editEmployee"
      />
    </template>

    <template v-else>
      <span>организации отсутствуют</span>
    </template>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Users',
  data: () => ({
    headers: [
      {
        text: 'ФИО',
        align: 'left',
        sortable: false,
        value: 'fio',
      },
      {
        text: 'Email',
        value: 'email',
        sortable: false,
      },
      {
        text: 'Сервисы и роли',
        value: 'services-roles',
        sortable: false,
      },
      {
        text: '',
        value: 'actions',
        sortable: false,
      },
    ],
    users: [
      {
        fio: 'Баранов Илья Олегович',
        email: 'barilya@gmail.com',
        'services-roles': 'УЖЦ: Администратор КСП',
      },
      {
        fio: 'Баранов Илья Олегович',
        email: 'barilya@gmail.com',
        'services-roles': 'УЖЦ: Администратор КСП',
      },
      {
        fio: 'Баранов Илья Олегович',
        email: 'barilya@gmail.com',
        'services-roles': 'УЖЦ: Администратор КСП',
      },
    ],
  }),
  mounted() {
    this.$nuxt.$emit('update-dashboard');
  },
  methods: {
    editEmployee() {
      console.log('edit');
    },
  },
};
</script>
