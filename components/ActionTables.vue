<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="itemsPerPage"
      :page.sync="page"
      class="elevation-1 custom-table"
      hide-default-footer
      multi-sort
    >
      <template v-if="actionIcon || actionImg" #item.actions="{ item }">
        <div class="text-right">
          <span class="cursor-pointer" @click="$emit('update', item)">
            <v-icon v-if="actionIcon">{{ actionIcon }}</v-icon>
            <span v-if="actionImg">
              <img :src="actionImg" alt="img-action" />
            </span>
          </span>
        </div>
      </template>

      <template #item.fio="{ item }">
        <span> {{ item.fio }} <v-icon v-if="item.admin" color="#1976D2">mdi-star</v-icon> </span>
      </template>

      <template #item.email="{ item }">
        <span class="linked-text"> {{ item.email }} </span>
      </template>

      <template #item.ujc="{ item }">
        <v-icon>{{ item.ujc ? 'mdi-check' : 'mdi-close' }}</v-icon>
      </template>

      <template #item.ptos="{ item }">
        <v-icon>{{ item.ptos ? 'mdi-check' : 'mdi-close' }}</v-icon>
      </template>

      <template v-if="desserts > itemsPerPage" #footer="{ props }">
        <div class="align-self-end w-100">
          <v-divider />

          <div
            class="pagination d-flex align-items-center justify-content-end px-10 v-application--is-ltr"
            data-app
          >
            <div style="max-width: 90px; margin-right: 40px">
              <v-select
                :items="itemsPerPageData"
                class="fz-14 m-0 p-0"
                hide-details
                v-model="itemsPerPage"
              />
            </div>

            <div class="d-flex align-items-center">
              <v-icon :disabled="page === 1" class="cursor-pointer" @click="page = 1">
                mdi-page-first
              </v-icon>

              <v-icon :disabled="page === 1" class="ml-8 mr-5 cursor-pointer" @click="page--">
                mdi-chevron-left
              </v-icon>

              <span class="pages-text">
                {{ props.pagination.pageStart + 1 }}-{{ props.pagination.pageStop }} из
                {{ props.pagination.itemsLength }}
              </span>

              <v-icon
                :disabled="page === props.pagination.pageCount"
                class="ml-5 mr-8 cursor-pointer"
                @click="page++"
              >
                mdi-chevron-right
              </v-icon>

              <v-icon
                :disabled="page === props.pagination.pageCount"
                class="cursor-pointer"
                @click="page = props.pagination.pageCount"
              >
                mdi-page-last
              </v-icon>
            </div>
          </div>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'EmployeeTables',
  props: {
    actionImg: {
      type: String,
      default: '',
    },
    actionIcon: {
      type: String,
      default: '',
    },
    headers: {
      type: Array,
      default: () => [],
    },
    desserts: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    itemsPerPageData: [
      {
        text: '5 строк',
        value: 5,
      },
      {
        text: '10 строк',
        value: 10,
      },
      {
        text: '15 строк',
        value: 15,
      },
      {
        text: '20 строк',
        value: 20,
      },
      {
        text: '25 строк',
        value: 25,
      },
      {
        text: '30 строк',
        value: 30,
      },
    ],
    itemsPerPage: 5,
    page: 1,
  }),
};
</script>
