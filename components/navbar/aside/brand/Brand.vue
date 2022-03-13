<template>
  <!-- begin:: Aside -->
  <div ref="kt_brand" id="kt_brand" class="brand flex-column-auto">
    <div class="brand-logo">
      <nuxt-link to="/">
        <img alt="Logo" src="/logo.svg" />
      </nuxt-link>
    </div>
  </div>
  <!-- end:: Aside -->
</template>

<script>
import KTLayoutBrand from 'assets/js/layout/base/brand.js';
import KTLayoutAsideToggle from 'assets/js/layout/base/aside-toggle.js';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Brand',
  mounted() {
    // Init Brand Panel For Logo
    KTLayoutBrand.init(this.$refs.kt_brand);

    // Init Aside Menu Toggle
    KTLayoutAsideToggle.init(this.$refs.kt_aside_toggle);
  },
};
</script>

<style lang="scss" scoped>
.aside-toggle {
  outline: none;
}
</style>
