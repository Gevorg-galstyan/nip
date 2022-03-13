<template>
  <v-simple-table class="task-table" fixed-header>
    <template #default>
      <template v-if="headerEnabled && headers.id">
        <thead>
          <tr>
            <template v-for="(item, key) in headers">
              <th v-if="key === 'icon'" :key="`${item.id}_${key}`" class="text-left"></th>

              <th v-if="key === 'date'" :key="`${item.id}_${key}`" class="text-left">Дата</th>

              <th v-if="key === 'text'" :key="`${item.id}_${key}`" class="text-left">
                Уведомления
              </th>

              <th v-if="key === 'project'" :key="`${item.id}_${key}`" class="text-left">Проект</th>
              <th v-if="key === 'task'" :key="`${item.id}_${key}`" class="text-left">Задача</th>
              <th v-if="key === 'end'" :key="`${item.id}_${key}`" class="text-left">
                Срок выполнения
              </th>
            </template>
          </tr>
        </thead>
      </template>

      <tbody>
        <tr v-for="item in notify" :key="item.id" :style="`background: ${item.status};`">
          <td v-if="item.icon">
            <v-icon :color="item.iconColor" class="fz-20">{{ item.icon }}</v-icon>
          </td>
          <td v-if="item.date" :class="{ hours: item.text }">
            {{ item.date }}

            <p v-if="item.hours" class="mb-0 mt-2">{{ item.hours }}</p>
          </td>
          <td v-if="item.text">
            {{ item.text }}

            <v-btn v-if="item.link" class="text-button" text>{{ item.link }}</v-btn>
          </td>

          <td v-if="item.project">
            {{ item.project }}
          </td>

          <td v-if="item.task">
            <v-btn class="text-button" color="#0097EF" small text>
              {{ item.task }}
            </v-btn>
          </td>

          <td v-if="item.end">
            {{ item.end }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'NotificationsTasks',
  props: {
    notify: {
      type: Array,
      default: () => [],
    },
    headerEnabled: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    headers() {
      if (!this.notify.length || !this.headerEnabled) {
        return [];
      }

      let head = {};

      this.notify.forEach(item => {
        head = {
          ...head,
          ...item,
        };
      });

      return head;
    },
  },
};
</script>

<style scoped>
.hours {
  font-size: 14px;
  line-height: 14px !important;
  letter-spacing: 0.09px;
  color: #7e838a;
}

.hours p {
  font-size: 10px !important;
}
</style>
