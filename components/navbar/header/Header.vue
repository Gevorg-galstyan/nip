<template>
  <!-- begin:: Header -->
  <div ref="kt_header" id="kt_header" class="header header-fixed">
    <div class="container-fluid d-flex align-items-center justify-content-between px-3">
      <!-- begin:: Header Menu -->
      <div ref="kt_header_menu_wrapper" class="header-menu-wrapper header-menu-wrapper-left">
        <div ref="kt_header_menu" id="kt_header_menu" class="header-menu header-menu-mobile">
          <!-- example static menu here -->
          <global-search />
        </div>
      </div>

      <!-- end:: Header Menu -->
      <top-bar />
    </div>
  </div>
  <!-- end:: Header -->
</template>

<script>
import KTLayoutHeader from 'assets/js/layout/base/header.js';
import KTLayoutHeaderMenu from 'assets/js/layout/base/header-menu.js';
import TopBar from '@/components/navbar/header/Topbar.vue';
import GlobalSearch from '@/components/navbar/header/GlobalSearch.vue';

export default {
  name: 'NipHeader',
  components: {
    TopBar,
    GlobalSearch,
  },
  mounted() {
    // Init Desktop & Mobile Headers
    KTLayoutHeader.init('kt_header', 'kt_header_mobile');

    // Init Header Menu
    KTLayoutHeaderMenu.init(this.$refs.kt_header_menu, this.$refs.kt_header_menu_wrapper);

    const headerRef = this.$refs.kt_header;

    headerRef.querySelectorAll("a[class='menu-link']").forEach(item => {
      item.addEventListener('click', () => {
        KTLayoutHeaderMenu.getOffcanvas().hide();
      });
    });
  },
};
</script>
