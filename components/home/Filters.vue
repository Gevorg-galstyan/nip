<template>
  <v-container class="v-application--is-ltr bg-transparent theme--light py-8" fluid>
    <v-row align="center">
      <v-col cols="6" lg="2" md="3">
        <v-select
          :items="status"
          class="custom-input"
          dense
          hide-details
          label="Статус"
          outlined
          v-model="filters.status"
        />
      </v-col>

      <v-col cols="6" lg="2" md="3">
        <v-select
          :items="date"
          class="custom-input"
          dense
          hide-details
          label="Дата обновления"
          outlined
          v-model="filters.date"
        />
      </v-col>

      <v-col cols="6" lg="2" md="3">
        <v-select
          :items="project"
          class="custom-input"
          dense
          hide-details
          label="Проект"
          outlined
          v-model="filters.project"
        />
      </v-col>

      <v-col cols="6" lg="2" md="3">
        <v-btn class="standart bg-transparent border-primary" color="#1976D2" outlined
          >Сбросить фильтр
        </v-btn>
      </v-col>

      <v-col class="d-flex justify-content-end" cols="12" lg="4">
        <v-btn class="standart border-danger bg-transparent" color="#D32F2F" outlined
          >Показать просроченные задачи
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Filters',
  props: {
    status: {
      type: Array,
      default: () => [],
    },
    date: {
      type: Array,
      default: () => [],
    },
    project: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    filters: {
      status: '',
      date: '',
      project: '',
    },
  }),
};
</script>

<style scoped>
.standart {
  text-transform: none !important;
}
</style>
