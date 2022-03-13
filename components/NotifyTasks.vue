<template>
  <div>
    <top-pagination />

    <div class="dashboard">
      <v-tabs centered class="tabs" slider-color="#1976D2" v-model="model">
        <v-tab :href="`#tab-Задачи`"> Задачи</v-tab>

        <v-tab :href="`#tab-Уведомления`"> Уведомления</v-tab>
      </v-tabs>

      <v-divider class="p-0 m-0" />

      <div class="table-filters">
        <home-filters />
      </div>

      <v-tabs-items v-model="model">
        <v-tab-item value="tab-Задачи">
          <home-notifications-tasks :notify="tasks" />
        </v-tab-item>

        <v-tab-item value="tab-Уведомления">
          <home-notifications-tasks :notify="notify" />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import { dateFormat } from '~/services/helper.service';
import TopPagination from '@/components/content/TopPagination';

export default {
  name: 'NotifyTasks',
  components: { TopPagination },
  layout: 'default',
  data: () => ({
    model: 'Задачи',
    tasks: [
      {
        id: 1,
        icon: 'mdi-alert-octagon',
        iconColor: '#1E88E5',
        status: '#F0F9FF',
        date: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        project: 'Ремонт газовой кательной',
        task: 'Наименование задачи....',
        end: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 2,
        icon: 'mdi-check',
        iconColor: '#4ECD62',
        status: '#E1FBE2',
        date: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        project: 'Ремонт газовой кательной',
        task: 'Наименование задачи....',
        end: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 3,
        icon: 'mdi-alarm',
        iconColor: '#D32F2F',
        status: '#FFE3E3',
        date: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        project: 'Ремонт газовой кательной',
        task: 'Наименование задачи....',
        end: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
      {
        id: 4,
        icon: 'mdi-alert-octagon',
        iconColor: '#9E9E9E',
        status: '#ffffff',
        date: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        project: 'Ремонт газовой кательной',
        task: 'Наименование задачи....',
        end: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
      },
    ],
    notify: [
      {
        id: 1,
        iconColor: '#1E88E5',
        icon: 'mdi-checkbox-blank-circle',
        status: '#F0F9FF',
        date: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        text: 'Вам необходимо указать Ответственных в плане работ по проекту',
        link: 'Ремонт газовой га...',
      },
      {
        id: 2,
        iconColor: '#9E9E9E',
        icon: 'mdi-checkbox-blank-circle',
        status: '#fff',
        text: 'Загружен План работ в проект',
        date: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        link: 'Ремонт газовой котельной',
      },
      {
        id: 3,
        iconColor: '#1E88E5',
        icon: 'mdi-checkbox-blank-circle',
        status: '#F0F9FF',
        date: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        text: 'Вам назначена роль - Руководитель проекта - в проекте',
        link: 'Ремонт газовой котельной',
      },
    ],
  }),
};
</script>

<style scoped></style>
