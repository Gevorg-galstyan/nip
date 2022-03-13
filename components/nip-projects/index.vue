<template>
  <div>
    <top-pagination>
      <v-btn class="custom-primary align-self-end" small @click="dialog = true">
        Добавить проект
      </v-btn>
    </top-pagination>

    <v-divider />

    <div class="dashboard mt-10">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="itemsPerPage"
        :page.sync="page"
        class="elevation-1 custom-table"
        hide-default-footer
        multi-sort
      >
        <template #item.actions="{ item }">
          <div class="text-right">
            <span class="table-icon-btn timeline" @click="timeline(item)">
              <v-icon>mdi-chart-timeline-variant</v-icon>
            </span>

            <span class="table-icon-btn edit" @click="edit(item, 'edit')">
              <v-icon>mdi-pencil</v-icon>
            </span>
          </div>
        </template>

        <template #footer="{ props }">
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

    <div class="project-dialog">
      <modals-project-modal
        :dialog="dialog"
        :dialog-data="dialogData"
        @dialog="close"
        @remove="confirmDialog = true"
      />
    </div>

    <confirm-dialog
      :dialog="confirmDialog"
      accept="Удалить"
      accept-class="custom-outline-danger"
      alert-color="#fff"
      alert-icon="mdi-alert-circle"
      alert-text="Вы хотите удалить проект? Это может привести к потере данных"
      icon-color="#D32F2F"
      modal-title="Внимание"
      title-class="justify-content-center"
      @close="confirmDialog = false"
    />
  </div>
</template>

<script>
import { currencyMask, dateFormat } from '@/services/helper.service';
import TopPagination from '@/components/content/TopPagination';
import ConfirmDialog from '@/components/modals/ConfirmDialog';

export default {
  name: 'NipProjects',
  components: {
    ConfirmDialog,
    TopPagination,
  },
  data: () => ({
    confirmDialog: false,
    dialog: false,
    loading: false,
    itemsPerPage: 5,
    page: 1,
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
    dialogData: null,
    headers: [
      {
        text: 'Код проекта',
        align: 'left',
        sortable: false,
        value: 'code',
      },
      {
        text: 'Наименование проекта',
        value: 'name',
        sortable: false,
      },
      {
        text: 'Срок начала',
        value: 'start',
        sortable: false,
      },
      {
        text: 'Срок окончания',
        value: 'end',
        sortable: false,
      },
      {
        text: 'Стоимость, руб',
        value: 'cost',
        sortable: false,
      },
      {
        text: '',
        value: 'actions',
        sortable: false,
      },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        code: 159,
        start: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        end: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        cost: currencyMask(1000000),
      },
      {
        name: 'Ice cream sandwich',
        code: 237,
        start: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        end: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        cost: currencyMask(10000),
      },
      {
        name: 'Eclair',
        code: 262,
        start: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        end: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        cost: currencyMask(10000),
      },
      {
        name: 'Cupcake',
        code: 305,
        start: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        end: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        cost: currencyMask(10000),
      },
      {
        name: 'Gingerbread',
        code: 356,
        start: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        end: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        cost: currencyMask(10000),
      },
      {
        name: 'Jelly bean',
        code: 375,
        start: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        end: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        cost: currencyMask(10000),
      },
      {
        name: 'Honeycomb',
        code: 408,
        start: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        end: dateFormat(new Date(`2/${Math.floor(Math.random() * 30) + 1}/22`)),
        cost: currencyMask(10000),
        actions: '',
      },
    ],
  }),
  methods: {
    timeline(item) {
      console.log(item);
    },
    edit(item) {
      this.dialogData = item || null;

      this.dialog = true;
    },
    close(event) {
      this.dialog = event;
      this.dialogData = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.table-icon-btn {
  display: inline-block;
  margin-right: 10px;
  width: 25px;
  height: 25px;
  line-height: 25px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;

  i {
    font-size: 15px !important;
    color: #fff !important;
  }

  &.edit {
    background: #1976d2;
  }

  &.timeline {
    background: #e0e0e0;
  }

  &.timeline i {
    color: #757575 !important;
  }
}
</style>
