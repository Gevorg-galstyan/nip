<template>
  <div>
    <v-dialog max-width="900" v-model="modal">
      <div class="dialog-content">
        <div class="dialog-title-action d-flex align-items-center justify-content-between">
          <h2 class="content-title">{{ title }}</h2>

          <span class="cursor-pointer" @click="modal = false">
            <img alt="close" src="/media/icons/close.svg" />
          </span>
        </div>

        <div class="content-body v-application--is-ltr" data-app>
          <v-row>
            <v-col cols="12" md="8">
              <v-text-field
                :disabled="disableInputs"
                class="custom-input"
                dense
                hide-details
                label="Краткое наименование проекта"
                outlined
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                :disabled="disableInputs"
                class="custom-input"
                dense
                hide-details
                label="Код проекта"
                outlined
                placeholder="Placeholder"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                :disabled="disableInputs"
                class="custom-input"
                dense
                hide-details
                label="Полное наименование проекта"
                outlined
                placeholder="Placeholder"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                :disabled="disableInputs"
                :items="customer"
                :menu-props="{ bottom: true, offsetY: true }"
                class="custom-input"
                dense
                label="Заказчик"
                outlined
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                :disabled="disableInputs"
                class="custom-input"
                dense
                hide-details
                label="Генподрядчик"
                outlined
                placeholder="Placeholder"
              />
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field
                :disabled="disableInputs"
                append-inner-icon="mdi-calendar-range"
                class="custom-input"
                dense
                hide-details
                label="Срок начала"
                outlined
                type="date"
              />
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                :disabled="disableInputs"
                append-inner-icon="mdi-calendar-range"
                class="custom-input"
                dense
                hide-details
                label="Срок окончания"
                outlined
                type="date"
              />
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                :disabled="disableInputs"
                :items="currency"
                class="custom-input"
                dense
                label="Валюта"
                outlined
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                :disabled="disableInputs"
                class="custom-input"
                dense
                hide-details
                label="Сумма"
                outlined
                prepend-inner-icon="mdi-currency-rub"
                type="number"
              />
            </v-col>
          </v-row>

          <v-row class="mt-0 justify-content-between">
            <div class="d-flex flex-wrap col-md-8 col-12 p-0">
              <v-col cols="12" md="6">
                <v-text-field
                  :disabled="disableInputs"
                  append-inner-icon="mdi-calendar-range"
                  class="custom-input"
                  dense
                  hide-details
                  label="Дата"
                  outlined
                  type="date"
                />
              </v-col>

              <v-col class="align-self-end" cols="12" md="6">
                <v-btn :disabled="disableInputs" class="custom-primary">Сформировать отчет</v-btn>
              </v-col>
            </div>

            <v-col class="align-self-end d-flex justify-content-end" cols="12" md="3">
              <v-btn :disabled="disableInputs" class="custom-default">Справочник ЛСР</v-btn>
            </v-col>
          </v-row>
        </div>

        <div
          :class="{ 'justify-content-end': !editBtn }"
          class="content-footer d-flex align-items-center mt-15"
        >
          <v-btn
            v-if="dialogData && editBtn"
            class="mr-3 custom-outline-primary"
            @click="editBtn = false"
          >
            Редактировать
          </v-btn>

          <div v-else class="d-flex align-items-center justify-content-between w-100">
            <v-btn class="mr-3 custom-outline" @click="modal = false">Отмена</v-btn>

            <div>
              <v-btn
                class="mr-3 custom-outline-danger mr-3"
                color="#E0E0E0"
                @click="$emit('remove')"
              >
                Удалить
              </v-btn>

              <v-btn class="custom-primary" @click="create">Создать</v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { cloneDeep } from 'lodash';
import { DEFAULT_NOTIFY_SNACKBAR } from '@/constants';

export default {
  name: 'ProjectModal',
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    dialogData: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    editBtn: false,
    currency: ['RUB', 'EUR', 'USD', 'GBR'],
    customer: ['АО Газпром', 'АО Газпром', 'АО Газпром', 'АО Газпром'],
  }),
  computed: {
    modal: {
      get() {
        return this.dialog;
      },
      set(bool) {
        this.$emit('dialog', bool);
      },
    },
    title() {
      if (!this.dialogData) {
        return 'Создание нового проекта';
      }

      return this.dialogData.name;
    },
    disableInputs() {
      return this.dialogData && this.editBtn;
    },
  },
  watch: {
    modal(val) {
      if (!val) {
        this.editBtn = false;
      }
    },
    dialogData(value) {
      if (value) {
        this.editBtn = true;
      }
    },
  },
  methods: {
    ...mapMutations('ui', ['triggerNotifySnackbar']),
    create() {
      const options = {
        ...cloneDeep(DEFAULT_NOTIFY_SNACKBAR),
        show: true,
        message: 'Проект создан',
        icon: 'mdi-check-circle',
      };

      options.options.color = '#43A047';

      this.triggerNotifySnackbar(options);
    },
  },
};
</script>

<style lang="scss">
.v-dialog.v-dialog--active {
  background: #fff;
}

.dialog-content {
  padding: 15px 20px;

  .content-title {
    margin: 0;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.0595px;
    color: rgba(0, 0, 0, 0.87);
  }

  .content-body {
    margin-top: 46px;

    .custom-input i {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.87);
    }
  }
}
</style>
