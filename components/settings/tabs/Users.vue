<template>
  <div v-if="!userEditMode && !userAddMode">
    <div class="table-filters">
      <settings-employee-filters />
    </div>

    <action-tables
      :desserts="users"
      :headers="headers"
      action-icon="mdi-pencil"
      @update="editEmployee"
    />
  </div>

  <settings-user-edit v-else />
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Users',
  data: () => ({
    headers: [
      {
        text: 'Email',
        align: 'left',
        sortable: false,
        value: 'email',
      },
      {
        text: 'Организация',
        value: 'organization',
        sortable: true,
      },
      {
        text: 'ФИО',
        value: 'fio',
        sortable: true,
      },
      {
        text: 'УЖЦ',
        value: 'ujc',
        sortable: true,
      },
      {
        text: 'ПТОС',
        value: 'ptos',
        sortable: true,
      },
      {
        text: '',
        value: 'actions',
        sortable: false,
      },
    ],
    users: [
      {
        organization: 'ООО Стройторг',
        email: 'olegov@gmail.com',
        fio: 'Баранов Илья Олегович',
        ujc: true,
        ptos: false,
      },
      {
        organization: 'ООО Стройторг',
        email: 'olegov@gmail.com',
        fio: 'Баранов Илья Олегович',
        admin: true,
        ujc: true,
        ptos: false,
      },
      {
        organization: 'ООО Стройторг',
        email: 'olegov@gmail.com',
        fio: 'Баранов Илья Олегович',
        ujc: true,
        ptos: false,
      },
      {
        organization: 'ООО Стройторг',
        email: 'olegov@gmail.com',
        fio: 'Баранов Илья Олегович',
        ujc: true,
        ptos: false,
      },
      {
        organization: 'ООО Стройторг',
        email: 'olegov@gmail.com',
        fio: 'Баранов Илья Олегович',
        ujc: true,
        ptos: false,
      },
      {
        organization: 'ООО Стройторг',
        email: 'olegov@gmail.com',
        fio: 'Баранов Илья Олегович',
        ujc: true,
        ptos: false,
      },
      {
        organization: 'ООО Стройторг',
        email: 'olegov@gmail.com',
        fio: 'Баранов Илья Олегович',
        ujc: true,
        ptos: false,
      },
    ],
  }),
  computed: {
    ...mapState('settings', ['userEditMode', 'userAddMode']),
  },
  beforeDestroy() {
    this.setUserAddMode(false);
    this.setUserEditMode(false);
  },
  methods: {
    ...mapMutations('settings', ['setUserAddMode', 'setUserEditMode']),

    editEmployee() {
      this.setUserEditMode(true);
    },
  },
};
</script>

<style scoped></style>
