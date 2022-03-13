<template>
  <div class="login-form v-application--is-ltr theme--light">
    <div class="login-signin">
      <div class="text-center mb-10 mb-lg-10">
        <h3 class="form-title">Вход</h3>
      </div>

      <form>
        <v-text-field
          :rules="rules.emailRules"
          class="mb-5 custom-input"
          clearable
          dense
          label="E-mail"
          outlined
          required
          v-model="form.email"
        />

        <v-text-field
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          class="custom-input"
          dense
          label="Пароль"
          name="input-10-1"
          outlined
          v-model="form.password"
          @click:append="show = !show"
        />

        <div class="d-flex flex-wrap justify-content-center">
          <v-btn :disabled="!form.password || !form.email" block class="custom-button w-100">
            Войти
          </v-btn>

          <v-btn
            class="text-button w-100 my-3 fz-14"
            text
            @click="$router.push('/auth/registration')"
          >
            Создать аккаунт
          </v-btn>

          <v-btn class="text-button fz-14" text @click="$router.push('/auth/reset')">
            Восстановить доступ
          </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  layout: 'auth',
  data() {
    return {
      show: false,
      form: {
        email: 'admin@demo.com',
        password: 'demo',
      },
      rules: {
        required: value => !!value || 'Обязательное поле.',
        min: v => v.length >= 8 || 'Минимум 8 знаков',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Недействительный E-mail',
        ],
      },
    };
  },
  computed: {},
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];

      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        email: null,
        password: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
  },
};
</script>

<!-- Load login custom page styles -->
<style lang="scss">
@import '~vuetify/src/components/VTextField/VTextField.sass';

.login-form {
  min-width: 450px;
  padding: 40px !important;
  background: #fff !important;
  box-shadow: 0 0 14px rgba(53, 64, 82, 0.05);
}

.custom-button {
  background: #1976d2 !important;
  border-color: #1976d2 !important;
  color: #fff !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  text-transform: capitalize !important;
  box-shadow: none !important;
}

.custom-button.v-btn--disabled {
  background-color: #9e9e9e !important;
  border-color: #9e9e9e !important;
}

.form-title {
  font-size: 20px !important;
  color: rgba(0, 0, 0, 0.87);
}

.custom-input label {
  color: #72737a !important;
}

.custom-input input {
  font-size: 14px;
}
</style>
