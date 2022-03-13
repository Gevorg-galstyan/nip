<template>
  <!-- begin::Page loader -->
  <div class="page-loader page-loader-logo d-flex justify-content-center">
    <img :src="logo" alt="Logo" width="100" />

    <div :class="spinnerClass || 'spinner-primary'" class="spinner"></div>
  </div>
  <!-- end::Page Loader -->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Loader',
  props: {
    logo: {
      type: String,
      default: '',
    },
    spinnerClass: {
      type: String,
      default: '',
    },
  },
};
</script>
