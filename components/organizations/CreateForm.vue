<template>
  <div class="v-application--is-ltr" data-app>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          :rules="[rules.required, rules.minInn]"
          class="custom-input"
          clearable
          dense
          label="ИНН*"
          outlined
          required
          v-model="form.inn"
        />
      </v-col>

      <v-col cols="12" md="4" offset-lg="4">
        <v-text-field
          class="custom-input"
          clearable
          dense
          label="СРО"
          outlined
          required
          v-model="form.sro"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-autocomplete
          :items="legalForm"
          :menu-props="{ bottom: true, offsetY: true }"
          :rules="[rules.required]"
          class="custom-input"
          clearable
          dense
          label="Организационно-правовая форма *"
          outlined
          required
          v-model="form.legal"
        />
      </v-col>

      <v-col cols="12" md="8">
        <v-text-field
          :rules="[rules.required]"
          class="custom-input"
          clearable
          dense
          label="Наименование *"
          outlined
          required
          v-model="form.name"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          class="custom-input"
          clearable
          dense
          label="Юридический адрес"
          outlined
          required
          v-model="form.urAddress"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          class="custom-input"
          clearable
          dense
          label="Фактический адрес"
          outlined
          required
          v-model="form.factAddress"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          class="custom-input"
          clearable
          dense
          label="Почтовый адрес"
          outlined
          required
          v-model="form.zip"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          class="custom-input"
          clearable
          dense
          label="Телефон"
          outlined
          required
          type="tel"
          v-model="form.phone"
        />
      </v-col>
    </v-row>

    <v-row>
      <h5 class="bank-form-title w-100 px-5">Банковские реквизиты</h5>

      <v-col cols="12" md="4">
        <v-text-field
          class="custom-input"
          clearable
          dense
          label="Расчетный счет"
          outlined
          required
          type="tel"
          v-model="form.bankAccount"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          class="custom-input"
          clearable
          dense
          label="Корреспондентский счет"
          outlined
          required
          type="tel"
          v-model="form.korrAccount"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          class="custom-input"
          clearable
          dense
          label="ОГРНИП"
          outlined
          required
          type="tel"
          v-model="form.ogrnip"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          class="custom-input"
          clearable
          dense
          label="Наименование банка"
          outlined
          required
          type="tel"
          v-model="form.bankName"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          class="custom-input"
          clearable
          dense
          label="КПП"
          outlined
          required
          type="tel"
          v-model="form.kpp"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          class="custom-input"
          clearable
          dense
          label="БИК"
          outlined
          required
          type="tel"
          v-model="form.bik"
        />
      </v-col>
    </v-row>

    <div class="button-footer">
      <v-btn :disabled="!required" class="custom-primary" @click="createOrganization">
        Сохранить
      </v-btn>

      <v-btn class="custom-outline ml-3" @click="cancelForm">Отменить</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateForm',
  data: () => ({
    form: {
      inn: '',
      sro: '',
      legal: '',
      name: '',
      urAddress: '',
      factAddress: '',
      phone: '',
      zip: '',
      bankAccount: '',
      korrAccount: '',
      ogrnip: '',
      bankName: '',
      kpp: '',
      bik: '',
    },
    legalForm: [
      {
        text: 'asdasd',
        value: 2,
      },
    ],
    rules: {
      required: value => !!value || 'Обязательное поле.',
      min: v => v.length >= 8 || 'Минимум 8 символа',
      minNumbers: v => v.replace(/[^0-9]/g, '').split('').length >= 3 || 'Минимум 3 цифры',
      confirmMatched: v => v === vm.form.password || 'Пароли не совпадают',
      minInn: v => v.length === 10 || 'Неполный формат ИНН',
      minName: v => v.length >= 3 || 'Минимум 3 символа',
      emailRules: [
        v => !!v || 'E-mail Обязателен',
        v => /.+@.+/.test(v) || 'Недействительный E-mail',
      ],
    },
  }),
  computed: {
    required() {
      const { inn, legal, name } = this.form;

      return [inn, legal, name].every(Boolean);
    },
  },
  methods: {
    createOrganization() {
      this.$router.go(-1);
    },
    cancelForm() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.bank-form-title {
  margin: 24px 0 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.07875px;
  color: #000000;
}

.custom-input {
  margin-bottom: 0 !important;
}

.button-footer {
  margin-top: 42px;
}
</style>
