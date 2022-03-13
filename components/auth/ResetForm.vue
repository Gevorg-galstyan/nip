<template>
  <div class="login-form v-application--is-ltr theme--light">
    <div class="login-signin">
      <div class="text-center mb-10 mb-lg-10">
        <h3 class="form-title">{{ title }}</h3>

        <p v-if="step === 1" class="form-description">
          На этот адрес придут инструкции для восстановления доступа к аккаунту
        </p>
      </div>

      <v-alert v-if="step > 1" class="mb-10" color="#FDF4E7">
        <div class="d-flex align-items-center">
          <v-icon class="mr-2 align-self-start" color="#F1A54A">
            {{ step > 2 ? 'mdi-checkbox-marked-circle-outline' : 'mdi-alert-outline' }}
          </v-icon>

          <template v-if="step === 2">
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
            :rules="rules.emailRules"
            class="mb-5 custom-input"
            clearable
            dense
            label="E-mail"
            outlined
            required
            v-model="email"
          />
        </template>

        <template v-else-if="step === 2">
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.minNumbers]"
            :type="show ? 'text' : 'password'"
            class="custom-input mb-5"
            dense
            label="Новый пароль"
            name="input-10-1"
            outlined
            v-model="password"
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
            v-model="confirm"
            @click:append="showConfirm = !showConfirm"
          />
        </template>

        <div class="d-flex flex-wrap justify-content-center">
          <v-btn
            :disabled="disableStepOne || disableStepTwo"
            block
            class="custom-button w-100"
            @click="reset"
          >
            {{ btnTitle }}
          </v-btn>
        </div>
      </form>
      <!--end::Form-->
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { cloneDeep } from 'lodash';
import { DEFAULT_NOTIFY_SNACKBAR } from '@/constants';

export default {
  name: 'ResetForm',
  data: vm => ({
    step: 1,
    show: false,
    confirm: '',
    password: '',
    showConfirm: false,
    email: '',
    rules: {
      confirmMatched: v => v === vm.password || 'Пароли не совпадают',
      required: value => !!value || 'Обязательное поле.',
      min: v => v.length >= 8 || 'Минимум 8 символа',
      minNumbers: v => v.replace(/[^0-9]/g, '').split('').length >= 3 || 'Минимум 3 цифры',
      emailRules: [
        v => !!v || 'Обязательное поле.',
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Недействительный E-mail',
      ],
    },
  }),
  computed: {
    disableStepOne() {
      if (this.step !== 1) {
        return false;
      }

      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email);
    },
    disableStepTwo() {
      if (this.step !== 2) {
        return false;
      }

      return ![this.password, this.confirm].every(Boolean);
    },
    btnTitle() {
      if (this.step === 1) {
        return 'Восстановить доступ';
      }

      return this.step > 2 ? 'ОК' : 'Продолжить';
    },
    title() {
      if (this.step === 1) {
        return 'Восстановление доступа';
      } else if (this.step === 2) {
        return 'Создайте пароль';
      }

      return 'Доступ восстановлен!';
    },
  },
  methods: {
    ...mapMutations('ui', ['triggerNotifySnackbar']),
    reset() {
      this.step++;

      if (this.step === 4) {
        this.$router.push('/auth/login');

        return;
      }

      const options = {
        ...cloneDeep(DEFAULT_NOTIFY_SNACKBAR),
        show: true,
        message:
          'Указанный логин не зарегистрирован. Проверьте данные или обратитесь в службу поддержки',
        icon: 'mdi-alert-circle',
      };

      // options.options.color = '#43A047';

      this.triggerNotifySnackbar(options);
    },
  },
};
</script>

<style scoped>
.login-form {
  max-width: 450px;
}

.form-description {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.07875px;
  color: #72737a;
}
</style>
