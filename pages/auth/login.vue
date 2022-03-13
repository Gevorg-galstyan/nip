<template>
  <auth-login-form />
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  layout: 'auth',
};
</script>

<style lang="scss" scoped>
.spinner.spinner-right {
  padding-right: 3.5rem !important;
}
</style>
