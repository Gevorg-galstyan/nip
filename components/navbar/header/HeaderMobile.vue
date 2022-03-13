<template>
  <div
    id="kt_header_mobile"
    class="header-mobile align-items-center header-mobile-fixed header-mobile-fixed"
  >
    <a href="/">
      <img alt="Logo" src="/logo.svg" />
    </a>

    <div class="d-flex align-items-center">
      <button id="kt_aside_mobile_toggle" class="btn p-0 burger-icon burger-icon-left">
        <span></span>
      </button>

      <button
        ref="kt_header_mobile_toggle"
        id="kt_header_mobile_toggle"
        class="btn p-0 burger-icon ml-4"
      >
        <span></span>
      </button>

      <button
        ref="kt_header_mobile_topbar_toggle"
        id="kt_header_mobile_topbar_toggle"
        class="btn btn-hover-text-primary p-0 ml-2"
      >
        <span class="svg-icon svg-icon-xl">
          <inline-svg class="svg-icon" src="/media/svg/icons/General/User.svg" />
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import KTLayoutHeaderTopbar from 'assets/js/layout/base/header-topbar.js';

export default {
  name: 'KTHeaderMobile',
  components: {},
  mounted() {
    // Init Header Topbar For Mobile Mode
    KTLayoutHeaderTopbar.init(this.$refs.kt_header_mobile_topbar_toggle);
  },
};
</script>
