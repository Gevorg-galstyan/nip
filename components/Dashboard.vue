<template>
  <div class="container-fluid bg-white mt-5 dashboard">
    <div class="row">
      <v-col class="d-flex flex-wrap align-items-center mb-8 mt-3" cols="12">
        <div class="cursor-pointer mr-4">
          <img alt="" src="/media/home/parker.svg" />
        </div>

        <div class="cursor-pointer">
          <img alt="" src="/media/home/prosa.svg" />
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <div class="filter-col d-flex align-items-center justify-content-between">
          <h3 class="title">Уведомления</h3>

          <div class="filter-action">
            <v-icon>mdi-filter-variant</v-icon>
          </div>
        </div>

        <home-notifications-tasks :header-enabled="false" :notify="notify" class="shadowed" />
      </v-col>

      <v-col cols="12" md="6">
        <div class="filter-col d-flex align-items-center justify-content-between">
          <h3 class="title">Задачи</h3>

          <div class="filter-action">
            <v-icon>mdi-filter-variant</v-icon>
          </div>
        </div>

        <home-notifications-tasks :header-enabled="false" :notify="tasks" class="shadowed" />
      </v-col>
    </div>

    <confirm-dialog
      :dialog="confirmDialog"
      accept="Перейти"
      accept-class="custom-primary"
      alert-color="#fff"
      alert-icon="mdi-bell-ring"
      alert-text="Для вас есть новые задачи и уведомления"
      alert-text-class="fz-12"
      data-app
      disable-cancel
      footer-class="justify-content-center"
      icon-color="#757575"
      modal-title="Внимание!"
      modal-width="378"
      title-class="justify-content-center"
      @accept="toTaskPage"
      @close="confirmDialog = false"
    />
  </div>
</template>

<script>
import { dateToDateLong, dateToHoursMinutes } from '~/services/helper.service';
import ConfirmDialog from '@/components/modals/ConfirmDialog';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  components: { ConfirmDialog },
  data: () => ({
    confirmDialog: true,
    model: 'Задачи',
    tasks: [
      {
        id: 1,
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-alert-octagon',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 2,
        iconColor: '#4ECD62',
        status: '#E1FBE2',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-check',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 3,
        iconColor: '#D32F2F',
        status: '#FFE3E3',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-alarm',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 1,
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-alert-octagon',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 2,
        iconColor: '#4ECD62',
        status: '#E1FBE2',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-check',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 3,
        iconColor: '#D32F2F',
        status: '#FFE3E3',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-alarm',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 1,
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-alert-octagon',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 2,
        iconColor: '#4ECD62',
        status: '#E1FBE2',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-check',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 3,
        iconColor: '#D32F2F',
        status: '#FFE3E3',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-alarm',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 1,
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-alert-octagon',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 2,
        iconColor: '#4ECD62',
        status: '#E1FBE2',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-check',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 3,
        iconColor: '#D32F2F',
        status: '#FFE3E3',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-alarm',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 1,
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-alert-octagon',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 2,
        iconColor: '#4ECD62',
        status: '#E1FBE2',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-check',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 3,
        iconColor: '#D32F2F',
        status: '#FFE3E3',
        link: 'Ремонт газовой га...',
        hours: dateToHoursMinutes(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        icon: 'mdi-alarm',
        text: 'Наименование задачи....',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
    ],
    notify: [
      {
        id: 1,
        icon: 'mdi-checkbox-blank-circle',
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой га...',
        text: 'Вам необходимо указать Ответственных в плане работ по проекту',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 2,
        iconColor: '#9E9E9E',
        status: '#fff',
        link: 'Ремонт газовой котельной',
        icon: 'mdi-checkbox-blank-circle',
        text: 'Загружен План работ в проект',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 3,
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой котельной',
        icon: 'mdi-checkbox-blank-circle',
        text: 'Вам назначена роль - Руководитель проекта - в проекте',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 1,
        icon: 'mdi-checkbox-blank-circle',
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой га...',
        text: 'Вам необходимо указать Ответственных в плане работ по проекту',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 2,
        iconColor: '#9E9E9E',
        status: '#fff',
        link: 'Ремонт газовой котельной',
        icon: 'mdi-checkbox-blank-circle',
        text: 'Загружен План работ в проект',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 3,
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой котельной',
        icon: 'mdi-checkbox-blank-circle',
        text: 'Вам назначена роль - Руководитель проекта - в проекте',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 1,
        icon: 'mdi-checkbox-blank-circle',
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой га...',
        text: 'Вам необходимо указать Ответственных в плане работ по проекту',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 2,
        iconColor: '#9E9E9E',
        status: '#fff',
        link: 'Ремонт газовой котельной',
        icon: 'mdi-checkbox-blank-circle',
        text: 'Загружен План работ в проект',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 3,
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой котельной',
        icon: 'mdi-checkbox-blank-circle',
        text: 'Вам назначена роль - Руководитель проекта - в проекте',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 1,
        icon: 'mdi-checkbox-blank-circle',
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой га...',
        text: 'Вам необходимо указать Ответственных в плане работ по проекту',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 2,
        iconColor: '#9E9E9E',
        status: '#fff',
        link: 'Ремонт газовой котельной',
        icon: 'mdi-checkbox-blank-circle',
        text: 'Загружен План работ в проект',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 3,
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой котельной',
        icon: 'mdi-checkbox-blank-circle',
        text: 'Вам назначена роль - Руководитель проекта - в проекте',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 1,
        icon: 'mdi-checkbox-blank-circle',
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой га...',
        text: 'Вам необходимо указать Ответственных в плане работ по проекту',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 2,
        iconColor: '#9E9E9E',
        status: '#fff',
        link: 'Ремонт газовой котельной',
        icon: 'mdi-checkbox-blank-circle',
        text: 'Загружен План работ в проект',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 3,
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        link: 'Ремонт газовой котельной',
        icon: 'mdi-checkbox-blank-circle',
        text: 'Вам назначена роль - Руководитель проекта - в проекте',
        date: dateToDateLong(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
    ],
  }),
  methods: {
    toTaskPage() {
      this.$router.push('notify-task');
    },
  },
};
</script>

<style>
.task-table th {
  font-weight: 600;
  font-size: 14px !important;
  line-height: 22px;
  letter-spacing: 0.07px;
  color: #303133 !important;
}

.task-table td {
  font-size: 14px !important;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #303133;
}

.task-table .text-button {
  font-size: 14px !important;
  letter-spacing: 0.1px;
}

.filter-col {
  margin-bottom: 30px;
}

.filter-col .title {
  margin: 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
}

.filter-action i {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.87) !important;
  font-size: 25px;
}
</style>
