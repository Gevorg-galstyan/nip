<template>
  <v-container class="v-application--is-ltr bg-transparent theme--light py-8" fluid>
    <v-row align="center">
      <v-col cols="6" md="4">
        <v-autocomplete
          :items="services"
          :menu-props="{ bottom: true, offsetY: true }"
          class="custom-input"
          dense
          hide-details
          label="Сервис"
          outlined
          v-model="filters.services"
        />
      </v-col>

      <v-col cols="6" md="4">
        <v-autocomplete
          :items="organization"
          :menu-props="{ bottom: true, offsetY: true }"
          class="custom-input"
          dense
          hide-details
          label="Организация"
          outlined
          v-model="filters.organization"
        />
      </v-col>

      <v-col class="d-flex justify-content-end" cols="12" md="4">
        <v-btn class="text-button fz-14" color="#D32F2F" small text @click="reset">
          Сбросить фильтр</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EmployeeFilters',
  props: {
    services: {
      type: Array,
      default: () => [],
    },
    organization: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    filters: {
      services: '',
      organization: '',
    },
  }),
  methods: {
    reset() {
      this.filters = {
        services: '',
        organization: '',
      };
    },
  },
};
</script>

<style scoped>
.standart {
  text-transform: none !important;
}
</style>
