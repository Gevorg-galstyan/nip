<template>
  <div class="auth-form d-flex align-content-center justify-content-center flex-wrap">
    <Nuxt />

    <ui-snackbar />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Auth',
};
</script>

<style scoped>
.auth-form {
  height: 100vh;
  width: 100vw;
}
</style>
