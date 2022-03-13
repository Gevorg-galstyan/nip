<template>
  <div class="login-form v-application v-application--is-ltr theme--light">
    <!--begin::Signin-->
    <div class="login-signin">
      <div class="text-center mb-10 mb-lg-10">
        <h3 class="form-title">{{ title }}</h3>
      </div>

      <v-alert class="mb-10" color="#FDF4E7">
        <div class="d-flex align-items-center">
          <v-icon class="mr-2 align-self-start" color="#F1A54A">
            {{ step > 2 ? 'mdi-checkbox-marked-circle-outline' : 'mdi-alert-outline' }}
          </v-icon>

          <template v-if="step === 1">
            <span class="alertText">*Обязательные поля для заполнения</span>
          </template>

          <template v-else-if="step === 2">
            <div class="alertText">
              <p>Ваш пароль должен содержать следующее:</p>
              <p class="mb-0">1. Не менее 8ми знаков</p>
              <p class="mb-0">2. Не менее 3х числовых значений</p>
            </div>
          </template>

          <template v-else>
            <div class="alertText">
              <p>Ваш логин и пароль направлены на указанный электронный адрес</p>
            </div>
          </template>
        </div>
      </v-alert>

      <form>
        <template v-if="step === 1">
          <v-text-field
            :rules="[rules.required, rules.minInn]"
            class="mb-5 custom-input"
            clearable
            counter="10"
            dense
            label="ИНН*"
            outlined
            required
            type="number"
            v-model="form.inn"
          />
          <v-text-field
            :rules="[rules.required, rules.minName]"
            class="mb-5 custom-input"
            clearable
            dense
            label="Организация*"
            outlined
            required
            v-model="form.organization"
          />
          <v-text-field
            class="mb-5 custom-input"
            clearable
            dense
            label="Юридический адрес"
            outlined
            required
            v-model="form.address"
          />
          <v-text-field
            :rules="rules.emailRules"
            class="mb-5 custom-input"
            clearable
            dense
            label="Логин (E-mail)*"
            outlined
            required
            v-model="form.email"
          />
          <v-text-field
            :rules="[rules.required]"
            class="mb-5 custom-input"
            clearable
            dense
            label="Номер телефона*"
            outlined
            required
            v-model="form.tel"
          />
          <v-text-field
            class="mb-5 custom-input"
            clearable
            dense
            label="Имя пользователя"
            outlined
            required
            v-model="form.username"
          />
        </template>
        <template v-if="step === 2">
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.minNumbers]"
            :type="show ? 'text' : 'password'"
            class="custom-input mb-5"
            dense
            label="Новый пароль"
            name="input-10-1"
            outlined
            v-model="form.password"
            @click:append="show = !show"
          />

          <v-text-field
            :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.confirmMatched]"
            :type="showConfirm ? 'text' : 'password'"
            class="custom-input mb-5"
            dense
            label="Повторите пароль"
            name="input-10-1"
            outlined
            v-model="form.confirm"
            @click:append="showConfirm = !showConfirm"
          />
        </template>

        <v-btn
          :disabled="disableStepOne || disableStepTwo"
          block
          class="custom-button"
          @click="register"
        >
          {{ btnTitle }}
        </v-btn>
      </form>
      <!--end::Form-->
    </div>

    <!--end::Signin-->
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data: vm => ({
    show: false,
    showConfirm: false,
    step: 1,
    form: {
      email: '',
      inn: '',
      organization: '',
      address: '',
      tel: '',
      username: '',
      password: '',
      confirm: '',
    },
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
    disableStepOne() {
      if (this.step !== 1) {
        return false;
      }

      const { email, inn, organization, tel } = this.form;

      return ![email, inn, organization, tel].every(Boolean);
    },
    disableStepTwo() {
      if (this.step !== 2) {
        return false;
      }

      const { password, confirm } = this.form;

      return ![password, confirm].every(Boolean);
    },

    btnTitle() {
      return this.step > 2 ? 'ОК' : 'Сохранить';
    },
    title() {
      if (this.step === 1) {
        return 'Регистрация';
      } else if (this.step === 2) {
        return 'Создайте пароль';
      }

      return 'Регистрация завершена!';
    },
  },
  methods: {
    register() {
      this.step++;

      if (this.step > 3) {
        this.$router.push('/auth/login');
      }
    },
  },
};
</script>
