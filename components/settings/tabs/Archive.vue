<template>
  <div>
    <div class="table-filters">
      <settings-employee-filters />
    </div>

    <action-tables
      :desserts="users"
      :headers="headers"
      action-img="/media/icons/reset.svg"
      @update="reset"
    />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Archive',
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
    ],
  }),
  methods: {
    reset() {
      console.log('reset');
    },
  },
};
</script>

<style scoped></style>
